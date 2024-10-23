document.addEventListener("DOMContentLoaded", () => {
    const hobbyName = document.getElementById("hobby-name");
    const addHobbyButton = document.getElementById("add-hobby");
    const hobbyListUl = document.getElementById("hobby-list");
  
    addHobbyButton.addEventListener("click", () => {
      const hobbyNameInput = hobbyName.value.trim();
  
      // Check if the number of list items is less than 11
      if (hobbyListUl.children.length < 12) {
        if (hobbyNameInput !== "") {
          const newHobby = document.createElement("li");
          newHobby.textContent = hobbyNameInput;
          hobbyListUl.appendChild(newHobby);
          hobbyName.value = ""; // Clear the input after adding
        }
  
        // If list reaches 11 items, hide input and button
        if (hobbyListUl.children.length === 12) {
          hobbyName.style.display = "none";
          addHobbyButton.style.display = "none";
        }
      }
    });
  });
