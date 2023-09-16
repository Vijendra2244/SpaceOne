let input1 = document.getElementById("input");
function SubmitValue() {
  if (!input1.value) {
    alert("please enter a valid email address");
  }
  input1.value = "Thank you for your submission";
}
