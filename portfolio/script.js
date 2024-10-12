document.getElementById('home').onclick = function() {
    window.location.href = '../index.html';
};
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const contentDrop = document.querySelector(".content-drop");

    // Toggle the dropdown on click
    dropdown.addEventListener("click", function (event) {
      contentDrop.classList.toggle("show");
      event.stopPropagation(); // Prevents click from bubbling up to document
    });

    // Close dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
      // If the click was outside the dropdown, close it
      if (!dropdown.contains(event.target)) {
        contentDrop.classList.remove("show");
      }
    });
  });
