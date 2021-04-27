const form = document.querySelector("#form");
form.addEventListener("submit", test);

function test(e) {
  e.preventDefault();

  const input = document.querySelector("[data-input-class]");
  const inputSecond = document.querySelector("[data-input-class-second]");
  const popupSubmit = document.querySelector("[data-submit-check]");

  //All the functions
  function error() {
    input.classList.add("error");
    input.classList.remove("text");
  }
  function succes() {
    input.classList.remove("error");
    input.classList.add("text");
  }
  function errorSecond() {
    inputSecond.classList.add("error");
    inputSecond.classList.remove("text");
  }
  function succesSecond() {
    inputSecond.classList.remove("error");
    inputSecond.classList.add("text");
  }

  function popup() {
    popupSubmit.classList.add("submitted-check");
    popupSubmit.classList.remove("not-submitted-check");
    const input = document.querySelector("[data-input-class]");
    const span = document.querySelector("[data-user-name]");
    span.innerHTML = input.value;
  }
  //if the first input is empty..
  if (
    input.value == "" ||
    input.value == undefined ||
    input.value.trim() == ""
  ) {
    error();
  } else {
    succes();
  }
  //if the second input is empty..
  if (
    inputSecond.value == "" ||
    inputSecond.value == undefined ||
    inputSecond.value.trim() == ""
  ) {
    errorSecond();
  } else {
    succesSecond();
  }
  //if both inputs are completed
  if (input.value !== "" && inputSecond.value !== "") {
    popup();
  }
}
