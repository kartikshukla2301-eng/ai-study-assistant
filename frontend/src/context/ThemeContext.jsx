import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultThemeKey, themes } from "../data/themes";

const ThemeContext = createContext(null);

const toCssVars = (theme, fontScale) => ({
  "--bg": theme.background,
  "--surface": theme.surface,
  "--sidebar": theme.sidebar,
  "--bubble-user": theme.bubbleUser,
  "--bubble-ai": theme.bubbleAI,
  "--accent": theme.accent,
  "--text": theme.text,
  "--muted": theme.muted,
  "--code": theme.code,
  "--hover": theme.hover,
  "--glow": theme.glow,
  "--blur": theme.blur,
  "--font-scale": fontScale
});

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(() => localStorage.getItem("asa-theme") || defaultThemeKey);
  const [accent, setAccent] = useState(() => localStorage.getItem("asa-accent") || "");
  const [fontScale, setFontScale] = useState(() => Number(localStorage.getItem("asa-font-scale") || 1));
  const [animations, setAnimations] = useState(() => localStorage.getItem("asa-animations") !== "false");

  const theme = useMemo(() => {
    const selected = themes[themeKey] || themes[defaultThemeKey];
    return accent ? { ...selected, accent, glow: `${accent}55` } : selected;
  }, [themeKey, accent]);

  useEffect(() => {
    const vars = toCssVars(theme, fontScale);
    Object.entries(vars).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
    document.documentElement.dataset.animations = String(animations);
    localStorage.setItem("asa-theme", themeKey);
    localStorage.setItem("asa-accent", accent);
    localStorage.setItem("asa-font-scale", String(fontScale));
    localStorage.setItem("asa-animations", String(animations));
  }, [theme, themeKey, accent, fontScale, animations]);

  const value = useMemo(
    () => ({ theme, themeKey, setThemeKey, accent, setAccent, fontScale, setFontScale, animations, setAnimations, themes }),
    [theme, themeKey, accent, fontScale, animations]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}
