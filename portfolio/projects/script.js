document.getElementById('home').onclick = function() {
    window.location.href = '../../index.html';
};
document.getElementById('about').onclick = function() {
    window.location.href = '../about/index.html';
};
document.getElementById('projects').onclick = function() {
    window.location.href = 'index.html';
};
document.getElementById('experience').onclick = function() {
    window.location.href = '../experience/index.html';
};
document.getElementById('certificates').onclick = function() {
    window.location.href = '../certificates/index.html';
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
  
class FeaturedViewModel {
  constructor(header, title, postedDate, otherLink, imageUrl) {
      this.header = header;
      this.title = title;
      this.postedDate = postedDate;
      this.otherLink = otherLink;
      this.imageUrl = imageUrl;
  }
}
const certificates = [
new FeaturedViewModel(
  "Scale Up: Food",
  "To scale up or down the ammount of ingredients that is needed to create a dish",
  "October 17, 2024",
  "index.html",
  "foodproject.jpg"
  ),

];
const colors = ["#36363EBF"]; 

function renderCertificates(certificates) {
  const container = document.getElementById("certificates-container");

  certificates.forEach((certificate, index) => {
      // Create a card element for each certificate
      const card = document.createElement("div");
      card.className = "certificate-card";

      // Set the background color based on the index
      card.style.backgroundColor = colors[index % colors.length];

      card.innerHTML = `
      
          <h2>${certificate.header}</h2>
          <h3>${certificate.title}</h3>
          <p><strong>Date Posted:</strong> ${certificate.postedDate}</p>
          <a href="Food/${certificate.otherLink}">View Project</a>
          <img src="Food/${certificate.imageUrl}" alt="${certificate.header} image">
          
      `;

      // Append each card to the container
      container.appendChild(card);
  });
}


// Call the render function on page load
document.addEventListener("DOMContentLoaded", () => {
  renderCertificates(certificates);
});
