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