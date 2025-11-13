function init() {
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  button.addEventListener("click", function () {
    const textentry = input.value.trim();

    if (textentry) {
      alert("Giovanni: " + textentry);
      output.textContent = textentry;
    } else {
      alert("Please enter a message first!");
      output.textContent = "No message entered.";
    }
  });
}

window.addEventListener("load", init);
