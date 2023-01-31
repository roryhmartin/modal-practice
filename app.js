//Assign classes to variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// Open modal Function by removing hidden class
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

// close modal by adding hidden class
const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// close modal when escape key is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

//Event Listeners 
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);