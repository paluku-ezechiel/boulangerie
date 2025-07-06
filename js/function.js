let burgerIcon = document.querySelector("div.burger-icon");
let nav = document.querySelector("nav.header-nav");
let formContact = document.forms["contact"];
let firstname = document.forms[0]["firstname"];
let lastname = document.forms[0]["lastname"];
let email = document.forms[0]["email"];
let objet = document.forms[0]["objet"];
let message = document.forms[0]["message"];
let check = {};

var listenerFunction = {
  openNav: () => {
    nav.style.display = "block";
  },

  checkFirstname: (ev) => {
    let input = ev.target;
    let content = input.value.trim();
    document.querySelector("#error-firstname").innerHTML = "";
    let error = "";

    if (!content) {
      error = "Your first name will not be empty";
    } else if (!/^[a-zA-Z]{2,20}$/.test(content)) {
      error = "Your first name is not valid";
    }

    if (error) {
      check = { ...check, firstname: false };
      document.querySelector("#error-firstname").innerHTML = error;
    } else {
      check = { ...check, firstname: true };
    }

    setSubmitButton();
  },

  checkLastname: (ev) => {
    let input = ev.target;
    let content = input.value.trim();
    document.querySelector("#error-lastname").innerHTML = "";
    let error = "";

    if (!content) {
      error = "Your last name will not be empty";
    } else if (!/^[a-zA-Z]{2,20}$/.test(content)) {
      error = "Your last name is not valid";
    }

    if (error) {
      check = { ...check, lastname: false };
      document.querySelector("#error-lastname").innerHTML = error;
    } else {
      check = { ...check, lastname: true };
    }

    setSubmitButton();
  },

  checkEmail: (ev) => {
    let input = ev.target;
    let content = input.value.trim();
    document.querySelector("#error-email").innerHTML = "";
    let error = "";

    if (!content) {
      error = "Your email will not be empty";
    } else if (!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(content)) {
      error = "Your email is not valid";
    }

    if (error) {
      check = { ...check, email: false };
      document.querySelector("#error-email").innerHTML = error;
    } else {
      check = { ...check, email: true };
    }

    setSubmitButton();
  },

  checkObjet: (ev) => {
    let input = ev.target;
    let content = input.value.trim();
    document.querySelector("#error-objet").innerHTML = "";
    let error = "";

    if (!content) {
      error = "Your objet will not be empty";
    } else if (!/^[a-zA-Z]{2,}$/.test(content)) {
      error = "Your objet is not valid";
    }

    if (error) {
      check = { ...check, objet: false };
      document.querySelector("#error-objet").innerHTML = error;
    } else {
      check = { ...check, objet: true };
    }

    setSubmitButton();
  },

  checkMessage: (ev) => {
    let input = ev.target;
    let content = input.value.trim();
    document.querySelector("#error-message").innerHTML = "";
    let error = "";

    if (!content) {
      error = "Your objet will not be empty";
    } else if (!/^[a-zA-Z]+$/.test(content)) {
      error = "Your objet is not valid";
    }

    if (error) {
      check = { ...check, message: false };
      document.querySelector("#error-message").innerHTML = error;
    } else {
      check = { ...check, message: true };
    }

    setSubmitButton();
  },

  submitContactForm:(ev) =>{
    ev.preventDefault()
    let formData = new FormData(formContact)
    console.log(formData.get('firstname'));

  }
};

let checkFormValidity = () => {
  let result = true;
  if (formContact) {
    if (Object.keys(check).length === 5) {
      for (const key in check) {
        const value = check[key];
        result = result && value;
        if (!result) return result;
      }
      return result;
    }
  }
};

let setSubmitButton = () => {
  if (formContact) {
    if (checkFormValidity()) {
      if (formContact.elements[5]) {
        formContact.elements[5].disabled = false;
        return;
      }
    }
    formContact.elements[5].disabled = true;
  }
};

var setupListener = () => {
  burgerIcon.addEventListener("mouseover", listenerFunction.openNav);
  firstname.onkeyup = listenerFunction.checkFirstname;
  lastname.onkeyup = listenerFunction.checkLastname;
  email.onkeyup = listenerFunction.checkEmail;
  objet.onkeyup = listenerFunction.checkObjet;
  message.onkeyup = listenerFunction.checkMessage;
  formContact ? formContact.onsubmit = listenerFunction.submitContactForm: null
};
