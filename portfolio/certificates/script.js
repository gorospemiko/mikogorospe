document.getElementById('home').onclick = function() {
    window.location.href = '../../index.html';
};
document.getElementById('about').onclick = function() {
    window.location.href = '../about/index.html';
};
document.getElementById('projects').onclick = function() {
    window.location.href = '../projects/index.html';
};
document.getElementById('experience').onclick = function() {
    window.location.href = '../experience/index.html';
};
document.getElementById('certificates').onclick = function() {
    window.location.href = 'index.html';
};

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const contentDrop = document.querySelector(".content-drop");

    // Toggle the dropdown on click
    dropdown.addEventListener("click", function (event) {
      contentDrop.classList.toggle("show");
      event.stopPropagation(); 
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
  constructor(header, title, postedDate, imageUrl) {
      this.header = header;
      this.title = title;
      this.postedDate = postedDate;
      this.imageUrl = imageUrl;
  }
}

const certificates = [
  new FeaturedViewModel(
      "COMPUTER ENGINEERING STUDENT SOCIETY",
      "CoESS",
      "October 09, 2024",
      "12CoEES.png"
  ),

  new FeaturedViewModel(
      "DEAN'S LISTER",
      "Technological Institute of the Philippines",
      "March 20, 2024",
      "11deanLister.PNG"
  ),

  new FeaturedViewModel(
      "CYBER FIGHTER: THE ULTIMATE SUMOBOT BATTLE 2024",
      "University of Santo Tomas",
      "February 27, 2024",
      "10cyberfigther.jpg"
  ),

  new FeaturedViewModel(
      "UP UP AND AWAY: A CLOUD COMPUTING WEBINAR",
      "ICpEP",
      "February 10, 2024",
      "9upup.png"
  ),

  new FeaturedViewModel(
      "CYBEROPS ASSOCIATE",
      "Cisco Networking Academy",
      "February 03, 2024",
      "8CyberOps_Associate.jpg"
  ),

  new FeaturedViewModel(
      "CCNAV7: ENTERPRISE NETWORKING, SECURITY, AND AUTOMATION",
      "Cisco Networking Academy",
      "July 29, 2023",
      "7CCNA-_Enterprise_Networking-_Security-_and_Automation.jpg"
  ),

  new FeaturedViewModel(
      "AIOT+: UNLEASHING MACHINE LEARNING IN IOT ERA",
      "Technological Institute of the Philippines",
      "July 12, 2023",
      "6AIoT_GOROSPE.png"
  ),

  new FeaturedViewModel(
      "AGRITHINK!: DEVELOPING AGRICULTURAL SOLUTIONS FOR A SUSTAINABLE AGRICULTURE INDUSTRY",
      "Technological Institute of the Philippines",
      "June 22, 2023",
      "5agrithink.png"
  ),

  new FeaturedViewModel(
      "CYBERSECURITY ESSENTIALS",
      "Cisco Networking Academy",
      "December 17, 2022",
      "4Cybersecurity_Essentials.jpg"
  ),

  new FeaturedViewModel(
      "CCNAV7: SWITCHING, ROUTING, AND WIRELESS ESSENTIALS",
      "Cisco Networking Academy",
      "November 24, 2022",
      "3CCNA-_Switching-_Routing-_and_Wireless_Essentials.jpg"
  ),

  new FeaturedViewModel(
      "CCNAV7: INTRODUCTION TO NETWORKS",
      "Cisco Networking Academy",
      "August 11, 2022",
      "2CCNA-_Introduction_to_Networks.jpg"
  ),

  new FeaturedViewModel(
      "COMPUTER SYSTEM OPERATION",
      "Tesda - Las Piñas City Manpower Training Center",
      "September 25, 2019",
      "1tesdaCom.jpg"
  ),
];



const colors = ["#dde1ea", "#ffe996", "#fff3cd", "#bacce3", "#87e5ff", "#87e5ff", "#b7b6e2" , "#a1ff96", "#87e5ff", "#87e5ff", "#87e5ff", "#96ffd6"]; 

// Function to render certificates
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
          <p><strong>Issued:</strong> ${certificate.postedDate}</p>
          <img src="certificates_sprints/${certificate.imageUrl}" alt="${certificate.title} image">
          
      `;

      // Append each card to the container
      container.appendChild(card);
  });
}

// Call the render function on page load
document.addEventListener("DOMContentLoaded", () => {
  renderCertificates(certificates);
});
