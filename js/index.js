const passwordInput = document.querySelector("#passwd");
const confirmPasswordInput = document.querySelector("#confirm-passwd");
const signupBtn = document.querySelector("#sign-up-btn");

confirmPasswordInput.addEventListener("keyup", (e) => {
  if (e.target.value !== passwordInput.value) {
    confirmPasswordInput.parentElement.classList.add("error");
    signupBtn.disabled = true;
    return;
  }

  signupBtn.disabled = false;
  confirmPasswordInput.parentElement.classList.remove("error");
});
