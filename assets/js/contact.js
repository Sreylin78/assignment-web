window.onload = function () {
  const name = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");

  emailjs.init("SM8pjMizG3MatUgNi");

  document
    .querySelector(".contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_72je23m", "template_dhi8xvn", this).then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Your email has been sent successfully!",
            icon: "success",
            confirmButtonText: "Okay",
            background: "#1e1e1e",
            color: "#ffffff",
            padding: "20px",
            showCloseButton: true,
            timer: 1000,
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
            background: "#1e1e1e",
            color: "#ffffff",
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
