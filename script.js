const userInput = document.getElementById("input");
const open = document.getElementById("open");
const lock = document.getElementById("lock");



const viewPassword = () => {

  if (open.style.display == "block") {
    userInput.type = "text";
    open.style.display = "none";
    lock.style.display = "block";
  } else {
    userInput.type = "password";
    open.style.display = "block";
    lock.style.display = "none";
  }

}





open.addEventListener("click", () => {
  // alert("hello world")
  viewPassword()
});

lock.addEventListener("click", () => {
  // alert("hello world")
  viewPassword()
});
