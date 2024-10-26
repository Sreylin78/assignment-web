window.onload = function () {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const successMessage = document.querySelector(".success-message");
  const errorMessage = document.querySelector(".error-message");

  emailjs.init({
    publicKey: "SM8pjMizG3MatUgNi",
  });

  document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_72je23m", "template_dhi8xvn", this).then(
      () => {
        console.log("Success!");
        successMessage.classList.add("show");
        successMessage.textContent = "Your message has been successfully sent!";
        name.value = "";
        email.value = "";
        message.value = "";
        errorMessage.classList.remove("show");

        setTimeout(() => {
          successMessage.classList.remove("show");
        }, 5000); 
      },
      (error) => {
        console.error("Failed!", error);
        errorMessage.classList.add("show");
        errorMessage.textContent = "Failed to send message!";
        successMessage.classList.remove("show"); 

        setTimeout(() => {
          errorMessage.classList.remove("show");
        }, 5000); 
      }
    );
  });
};

// Faqs
const faqContent = document.getElementsByClassName("faq-content");
const faqHeader = document.querySelectorAll(".quest");

const toggleFaqs = function () {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < faqContent.length; i++) {
    faqContent[i].className = "faq-content faq-close";
  }

  if (itemClass === "faq-content faq-close") {
    this.parentNode.className = "faq-content faq-open";
  }
};

faqHeader.forEach((item) => {
  item.addEventListener("click", toggleFaqs);
});
