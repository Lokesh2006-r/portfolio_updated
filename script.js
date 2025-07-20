
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

     
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const contactData = {
        name: name,
        email: email,
        message: message,
      };


      localStorage.setItem("contactFormData", JSON.stringify(contactData));

     
      alert("Your message has been saved (locally) as JSON!");
      console.log("Saved JSON:", contactData);


      form.reset();
    });
  }
});
