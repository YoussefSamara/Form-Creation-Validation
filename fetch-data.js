document.addEventListener('DOMContentLoaded', function () {
  async function fetchUserData() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      const dataContainer = document.getElementById('api-data');

      try {
          // Fetch the data from the API
          const response = await fetch(apiUrl);
          const users = await response.json();

          // Clear the loading message
          dataContainer.innerHTML = '';

          // Create a user list
          const userList = document.createElement('ul');
          users.forEach(user => {
              const listItem = document.createElement('li');
              listItem.textContent = user.name;
              userList.appendChild(listItem);
          });

          // Append the user list to the container
          dataContainer.appendChild(userList);
      } catch (error) {
          // Handle any errors
          dataContainer.innerHTML = 'Failed to load user data.';
      }
  }

  // Fetch user data once the document is loaded
  fetchUserData();
});
