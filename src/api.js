export const fetchSampleUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const users = await response.json();

    return users.map((user) => ({id: user.id, name: user.name, email: user.email }));
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return [];
  } finally {
    console.log("Finished fetching users.");
  }
};

export const fetchSampleUsersPromise = () => fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.json();
    })
    .then((users) => users.map((user) => ({ id: user.id, name: user.name, email: user.email}))
    )
    .catch((error) => { console.error("Error fetching users:", error.message);
      return [];
    });