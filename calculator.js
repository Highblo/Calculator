const buttons = document.querySelectorAll('input[type="button"]');
const display = document.querySelector(".display input");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "AC":
        display.value = "";
        break;
      case "DE":
        display.value = display.value.toString().slice(0, -1);
        break;
      case "=":
        display.value = eval(display.value);
        break;
      default:
        display.value += e.target.value;
    }
  });
});

