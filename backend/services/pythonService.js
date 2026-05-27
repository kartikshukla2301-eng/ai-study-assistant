import axios from "axios";
import FormData from "form-data";
import fs from "fs";

export async function analyzeWithPythonService(file) {
  const serviceUrl = process.env.PYTHON_SERVICE_URL || "http://localhost:8000";
  const form = new FormData();
  form.append("file", fs.createReadStream(file.path), file.originalname);
  const { data } = await axios.post(`${serviceUrl}/analyze`, form, {
    headers: form.getHeaders(),
    timeout: 20000
  });
  return data;
}
