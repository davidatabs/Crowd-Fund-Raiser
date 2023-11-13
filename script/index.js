let backProjectBtn = document.getElementById("backProjectBTN");
let bookmarkBtn = document.getElementById("bookmarkBtn");
let modalPage = document.querySelector(".modalPage");
let modalPageContainer = document.querySelector(".modalContainer");
let modalCheckBtn = document.querySelectorAll(".customCheck");
let modalTopRow = document.querySelectorAll(".modalTopRow");
let modalPledgeInput = document.querySelector(".modalPledgeInput");

//  Back Project
backProjectBtn.addEventListener("click", () => {
  modalPageContainer.style.display = "block";
  document.body.style.overflow = "hidden";
});

modalTopRow.forEach((modalCheckBtn) => {
  modalCheckBtn.addEventListener("click", modalDropDown);
});

function modalDropDown() {
  modalCheckBtn.forEach((btn) => {
    btn.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle(
      "showModal"
    );
  });
}

// modalCheckBtn.forEach((btn) => {
//   console.log(btn.parentElement.parentElement.parentElement.nextElementSibling);
// });
