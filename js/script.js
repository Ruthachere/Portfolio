const modal = document.getElementById("modal-box");
const modalText = document.getElementById("modal-text");
const studyBtns = document.querySelectorAll(".study_btn");

studyBtns.forEach(function (studyBtn) {
  studyBtn.addEventListener("click", function () {
    const content = this.getAttribute("data-content");
    modalText.textContent = content; // Set modal content
    modal.style.display = "flex"; // Show modal
  });
});

// Close modal functions
function closeModal() {
  modal.style.display = "none"; // Hide modal
}

// Event listener for the close button
const closeBtn = document.querySelector(".delete-icon");
closeBtn.addEventListener("click", closeModal);


//Close modal on clicking outside of the modal-box
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

//form validation
let form = document.querySelector(".formSubmit");
/* function to add error message*/
function addErrorElement(inputElement,errorMessage) {
    let errorEle = inputElement.parentElement.querySelector(".error");
    if (!errorEle) {
     errorEle = document.createElement("span");
     errorEle.setAttribute("class","error");
     inputElement.parentElement.appendChild(errorEle);  
    }
   errorEle.textContent = errorMessage;
}
//function to remove error message
function removeErrorElement(inputElement) {
    let errorEle = inputElement.parentElement.querySelector('.error');
    if (errorEle) {
        errorEle.remove();
   }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    

  const name = form.name;
  const email = form.email;
  const location = form.location;
  const budget = form.budget;
  const subject = form.subject;
  const message = form.message;

  let hasError = false;
  if (name.value.trim() == "") {
    addErrorElement(name, "This is required");
    hasError = true;
  } else if (name.value.length < 6) {
    addErrorElement(name, "Enter at least 6 characters");
    hasError = true;
  } else {
    removeErrorElement(name);
  }
  if (email.value.trim() == "") {
    addErrorElement(email, "This is required");
    hasError = true;
  } else {
    removeErrorElement(email);
  }
  if (location.value.trim() == "") {
    addErrorElement(location, "This is required");
    hasError = true;
  } else {
    removeErrorElement(location);
  }
  if (budget.value.trim() == "") {
    addErrorElement(budget, "This is required");
    hasError = true;
  } else {
    removeErrorElement(budget);
  }
  if (subject.value.trim() == "") {
    addErrorElement(subject, "This is required");
    hasError = true;
  } else {
    removeErrorElement(subject);
    }
      if (message.value.trim() == "") {
        addErrorElement(message, "This is required");
        hasError = true;
      } else {
        removeErrorElement(message);
      }
  if (hasError) {
    return;
  }
  form.reset();
});
