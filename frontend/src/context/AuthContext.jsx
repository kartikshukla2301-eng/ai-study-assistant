import { createContext, useContext, useEffect, useMemo, useState } from "react";
import api, { setAuthToken } from "../api/client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("asa-token"));
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("asa-user");
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(Boolean(token));

  useEffect(() => {
    setAuthToken(token);
    if (!token) {
      setLoading(false);
      return;
    }
    api
      .get("/auth/me")
      .then(({ data }) => setUser(data.user))
      .catch(() => logout())
      .finally(() => setLoading(false));
  }, [token]);

  const persistSession = (payload) => {
    localStorage.setItem("asa-token", payload.token);
    localStorage.setItem("asa-user", JSON.stringify(payload.user));
    setToken(payload.token);
    setUser(payload.user);
    setAuthToken(payload.token);
  };

  const login = async (credentials) => {
    const { data } = await api.post("/auth/login", credentials);
    persistSession(data);
    return data.user;
  };

  const register = async (details) => {
    const { data } = await api.post("/auth/register", details);
    persistSession(data);
    return data.user;
  };

  const googleLogin = async (credential) => {
    const { data } = await api.post("/auth/google", { credential });
    persistSession(data);
    return data.user;
  };

  const logout = () => {
    localStorage.removeItem("asa-token");
    localStorage.removeItem("asa-user");
    setToken(null);
    setUser(null);
    setAuthToken(null);
  };

  const value = useMemo(() => ({ user, token, loading, login, register, googleLogin, logout, isAuthenticated: Boolean(token && user) }), [user, token, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
