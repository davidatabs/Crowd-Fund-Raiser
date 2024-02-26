let backProjectBtn = document.getElementById("backProjectBTN");
let bookmarkContainer = document.querySelector("#bookmarkContainer");
let bookmarkHousing = document.querySelector(".bookmarkHousing");
let bookmarkBtn = document.getElementById("bookmarkBtn");
let modalPage = document.querySelector(".modalPage");
let modalPageContainer = document.querySelector(".modalContainer");
let modalCheckBtn = document.querySelectorAll(".customRadioBtnContainer");
let modalTopRow = document.querySelectorAll(".modalTopRow");
let modalPledgeInput = document.querySelector(".modalPledgeInput");
let modalPledgeInputField = document.querySelector(".modalPledgeInputField");
let modalPledgeAmountInput = document.querySelector(".modalPledgeAmountInput");
let modalPledgeBtn = document.querySelectorAll(".modalPledgeBtn");
let closeModal = document.querySelector(".closeModal");
let thankyouPageContainer = document.querySelector(".thankyouPageContainer");
let gotItBtn = document.getElementById("gotIt");
let menuCheckbox = document.querySelector("#menuCheckbox");
let optionsContainer = document.querySelector(".optionsContainer");
let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".closeMenu");

//  Back Project
backProjectBtn.addEventListener("click", () => {
  modalPageContainer.style.display = "block";
  document.body.style.overflow = "hidden";
});

modalTopRow.forEach((modalCheckBtn) => {
  modalCheckBtn.addEventListener("click", (event) => {
    if (event.target.classList.contains("customCheck"))
      modalDropDown(event.target);
  });
});

function modalDropDown(element) {
  element.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle(
    "showModal"
  );
}

bookmarkBtn.addEventListener("click", () => {
  bookmarkContainer.classList.toggle("markBookedd");
  bookmarkHousing.classList.toggle("markBooked");
  bookmarkHousing.children[0].innerText = "Bookmarked";

  if (bookmarkHousing.classList.contains("markBooked")) {
    bookmarkBtn.addEventListener("click", () => {
      bookmarkHousing.children[0].innerText = "Bookmark";
    });
  } else if (!bookmarkHousing.classList.contains("markBooked")) {
    bookmarkBtn.addEventListener("click", () => {
      bookmarkHousing.children[0].innerText = "Bookmarked";
    });
  }
});

closeModal.addEventListener("click", () => {
  modalPageContainer.style.display = "none";
  document.body.style.overflow = "auto";
});

// THANK YOU Page
modalPledgeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (
      modalPledgeInputField.value == "" &&
      modalPledgeAmountInput.value == "$"
    ) {
      alert("Pledge can't be empty");
      return;
    } else {
      thankyouPageContainer.style.display = "flex";
    }
  });
});

gotItBtn.addEventListener("click", () => {
  thankyouPageContainer.style.display = "none";
  modalPageContainer.style.display = "none";
  document.body.style.overflow = "auto";
});

menuCheckbox.addEventListener("click", (event) => {
  // Stop the propagation of the click event
  event.stopPropagation();

  var isChecked = localStorage.getItem("isChecked");
  if (isChecked === "true") {
    menuCheckbox.checked = false;
  } else {
    menuCheckbox.checked = true;
  }
  if (menuCheckbox.checked) {
    optionsContainer.style.display = "flex";
    menu.style.display = "none";
    closeMenu.style.display = "flex";
  } else {
    optionsContainer.style.display = "none";
    menu.style.display = "flex";
    closeMenu.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.overflow = "hidden";
  }

  // optionsContainer.style.display = "flex";

  let options = document.querySelector(".options");

  document.addEventListener("click", (event) => {
    if (
      !options.contains(event.target) &&
      !menuCheckbox.contains(event.target)
    ) {
      optionsContainer.style.display = "none";
      menuCheckbox.checked = false;
      menu.style.display = "flex";
      closeMenu.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
