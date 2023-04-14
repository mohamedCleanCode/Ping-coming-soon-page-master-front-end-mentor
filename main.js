const form = document.querySelector("form");
const emailInput = document.querySelector(`input[type="email"]`);

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const handleSubmit = (e) => {
  e.preventDefault();
  if (emailInput.value.match(validRegex)) {
    console.log(true);
  } else {
    form.classList.add("show-error");
    emailInput.placeholder = "example@email.com";
  }
};

form.addEventListener("submit", handleSubmit);
