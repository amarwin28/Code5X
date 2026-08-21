const API_URL = "http://127.0.0.1:8000";

export async function testBackend(): Promise<string> {
  const response = await fetch(`${API_URL}/api/test`);

  if (!response.ok) {
    throw new Error("Backend request failed");
  }

  const data: { message: string } = await response.json();

  return data.message;
}
