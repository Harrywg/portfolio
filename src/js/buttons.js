// DISCLAIMER!!!!
// - If you're looking through my portfolio to check out my code standard, please check out my most recent projects as this code is now very old and messy.

function scrollToSection(e) {
  let section = document.getElementById(e.target.name);
  let rect = section.getBoundingClientRect();
  document.getElementById("main").scrollTo(rect.x, rect.y);
}

const sectionLinks = document.getElementsByClassName("section-link");
Array.from(sectionLinks).forEach((link) => (link.onclick = scrollToSection));

function handleFormSubmit(e) {
  let button = e.target;
  let form = e.target.form;

  if (
    !form.elements[0].value ||
    !form.elements[1].value ||
    !form.elements[2].value ||
    !form.elements[3].value
  ) {
    return;
  }

  form.style.pointerEvents = "none";
  form.style.opacity = "0.75";

  button.style.transform = "scale(0.01)";
  button.style.opacity = "0";

  $.ajax({
    url: "https://formsubmit.co/ajax/harrywgdev@gmail.com",
    method: "POST",
    data: {
      name: form.elements[0].value,
      email: form.elements[1].value,
      _subject: form.elements[2].value,
      message: form.elements[3].value,
    },
    dataType: "json",
    success: (data) => {
      document.getElementById("form-success").style.display = "flex";
      form.style = "";
      button.style = "";
      Array.from(form.elements).forEach((el) => {
        el.value = "";
      });
    },
    error: (err) => {
      alert(
        "Something went wrong, please contact me at harrywgdev@gmail.com. Apologies for any inconvenience."
      );
    },
  });
}

const submitButton = document.getElementById("form-submit-button");
submitButton.onclick = handleFormSubmit;

function formSuccessBack(e) {
  const button = e.target;
  button.parentElement.style.display = "none";
}

const backButton = document.getElementById("form-success-button");
backButton.onclick = formSuccessBack;
