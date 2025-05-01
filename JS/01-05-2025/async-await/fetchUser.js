const fetchUser = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.co/users/${userId}`
    );

    if (response.status !== 200) {
      throw new Error("User not found");
    }

    const user = await response.json();
    console.log("User fetched: ", user);
  } catch (error) {
    console.log("Error fetching user: ", error);
  }
};

fetchUser(1);
