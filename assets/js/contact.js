window.onload = function () {
  const name = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");

  emailjs.init("SM8pjMizG3MatUgNi");

  document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_72je23m", "template_dhi8xvn", this).then(
      () => {
        Swal.fire({
          title: "Success!",
          text: "Your email has been sent successfully!",
          icon: "success",
          confirmButtonText: "Okay",
          background: "#282828",
          color: "#fff",
          padding: "20px",
          showCloseButton: true,
          timer: 5000,
          customClass: {
            confirmButton: "custom-confirm-button-green", 
          },
        });

        name.value = "";
        emailInput.value = "";
        message.value = "";
      },
      (error) => {
        Swal.fire({
          title: "Error!",
          text: "There was an issue sending your email. Please try again.",
          icon: "error",
          confirmButtonText: "Okay",
          background: "#ffebee",
          color: "#c62828",
          padding: "20px",
          showCloseButton: true,
          customClass: {
            confirmButton: "custom-confirm-button-red", 
          },
        });
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
