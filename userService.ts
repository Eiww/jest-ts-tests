import axios from "axios";

export async function getUserById(
  id: string
): Promise<{ id: string; name: string }> {
  if (!id.trim()) {
    throw new Error("ID cannot be empty");
  }
  const response = await axios.get(`/users/${id}`);
  return response.data;
}
