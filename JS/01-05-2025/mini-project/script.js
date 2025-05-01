async function searchUser() {
  const userId = document.getElementById("userId").value;
  const userCard = document.getElementById("userCard");
  const errorMessage = document.getElementById("errorMessage");
  const loader = document.getElementById("loader");

  if (!userId || userId < 1 || userId > 10) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Please enter a valid user ID between 1 and 10";
    userCard.style.display = "none";
    loader.style.display = "none";
    return;
  }

  // Show loader and hide other elements
  loader.style.display = "block";
  userCard.style.display = "none";
  errorMessage.style.display = "none";

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();

    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = `Email: ${user.email}`;
    document.getElementById("userPhone").textContent = `Phone: ${user.phone}`;
    document.getElementById(
      "userWebsite"
    ).textContent = `Website: ${user.website}`;
    document.getElementById(
      "userCompany"
    ).textContent = `Company: ${user.company.name}`;
    document.getElementById(
      "userAddress"
    ).textContent = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}`;

    userCard.style.display = "block";
    errorMessage.style.display = "none";
  } catch (error) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Error fetching user data. Please try again.";
    userCard.style.display = "none";
  } finally {
    // Hide loader after operation is complete
    loader.style.display = "none";
  }
}
