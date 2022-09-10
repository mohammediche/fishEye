const modal = document.getElementById("contact_modal");
const allBody = document.querySelector("body");

/* open & close form modal */
const displayModal = () => {
  modal.style.display = "block";
  allBody.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  allBody.style.overflow = "visible";
};
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    allBody.style.overflow = "visible";
  }
});

/********* Errors messages **********/
const messagesErrors = {
  firstNameError:
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
  lastNameError: "Veuillez entrer 2 caractères ou plus pour le champ du nom",
  emailError: "Veuillez entrer une adresse e-mail valide",
  messageError: "Veuillez entrer 8 caractères ou plus pour ce champ",
};

const validateInputs = (element, errorMessage) => {
  element.setAttribute("data-error-visible", "true");
  element.setAttribute("data-error", errorMessage);
};
//////// fonctions qui retourne false si le champ est incorrect, ou true si valide ///////////
// champ Prénom
const firstNameValidation = (firstNameInput) => {
  const firstNameRegex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;

  if (firstNameRegex.test(firstNameInput.value) === false) {
    validateInputs(firstNameInput.parentNode, messagesErrors.firstNameError);

    return false;
  } else {
    firstNameInput.parentNode.setAttribute("data-error-visible", "false");
    return true;
  }
};
// champ nom
const lastNameValidation = (lastNameInput) => {
  const lastNameRegex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
  if (lastNameRegex.test(lastNameInput.value) === false) {
    validateInputs(lastNameInput.parentNode, messagesErrors.lastNameError);
    return false;
  } else {
    lastNameInput.parentNode.setAttribute("data-error-visible", "false");
    return true;
  }
};
// champ email
const emailValidation = (emailInput) => {
  const emailRegex =
    /^[A-Z-a-z-0-9.-_]+[@]{1}[A-Z-a-z-0-9.-_]+[.]{1}[a-z]{2,10}$/;
  if (emailRegex.test(emailInput.value) === false) {
    validateInputs(emailInput.parentNode, messagesErrors.emailError);
    return false;
  } else {
    emailInput.parentNode.setAttribute("data-error-visible", "false");
    return true;
  }
};
// champ message
const messageValidation = (messageInput) => {
  if (messageInput.value.length <= 8) {
    validateInputs(messageInput.parentNode, messagesErrors.messageError);
    return false;
  } else {
    messageInput.parentNode.setAttribute("data-error-visible", "false");
    return true;
  }
};

/********** fonction conditions validate ***********/
const formValid = () => {
  let inputs = this;
  let isValid;

  // prénom
  isValidateFirsName = firstNameValidation(inputs["firstName"]);
  // nom
  isValidateLastName = lastNameValidation(inputs["lastName"]);
  //email
  isValidateEmail = emailValidation(inputs["email"]);
  //birthday
  isValidateMessage = messageValidation(inputs["message"]);

  if (
    isValidateFirsName === false ||
    isValidateLastName === false ||
    isValidateEmail === false ||
    isValidateMessage === false
  ) {
    return (isValid = false);
  } else {
    return (isValid = true);
  }
};

/***** formulaire de contact  *****/
const formulaire = document.getElementById("form-submit");
let formInputs = document.querySelectorAll(".formData input");
let formTextArea = document.querySelector(".formData textarea");

formulaire.onsubmit = function (e) {
  e.preventDefault();
  if (formValid()) {
    for (filledInput of formInputs) {
      console.log(filledInput.value);
      filledInput.value = "";
    }
    console.log(formTextArea.value);
    formTextArea.value = "";
    closeModal();
  }
};
