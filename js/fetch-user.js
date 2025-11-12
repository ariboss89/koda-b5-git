export async function fetchUser() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    if (!result.ok) {
      throw new Error(`${response.status}
        ${response}`);
    }
  } catch (error) {}
}
