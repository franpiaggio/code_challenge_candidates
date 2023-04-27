import { User } from "../state/initialState";
const mockFetch = (data: any) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1000));

const URL = "http://localhost:4000";

export async function getCandidatesApi(): Promise<any> {
  try {
    const res = await fetch(`${URL}/candidates`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

export async function updateCandidateApi(user: User): Promise<any> {
  try {
    const res = await mockFetch(user);
    return res;
  } catch (err) {
    console.error("Error updating user: ", user);
    throw err;
  }
}
