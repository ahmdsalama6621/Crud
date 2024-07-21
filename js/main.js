let textInput = document.querySelector(".text");
let emailInput = document.querySelector(".email");
let btn = document.querySelector(".btn");
let spansContainer = document.querySelector(".spans");

btn.addEventListener("click", function () {
  if (textInput.value === "" && emailInput.value === "") {
    swal("No Value");
  } else {
    let newDiv = document.createElement("div");
    newDiv.classList.add("span");

    let testSpan = document.createElement("span");
    let emailSpan = document.createElement("span");
    let spanButtons = document.createElement("span");

    testSpan.textContent = textInput.value;
    emailSpan.textContent = emailInput.value;

    let updateSpan = document.createElement("span");
    updateSpan.textContent = "Edit";
    updateSpan.classList.add("edit");

    updateSpan.addEventListener("click", function () {
      if (textInput.value === "" && emailInput.value === "") {
        alert("no value to edit");
      } else {
        testSpan.innerHTML = textInput.value;
        emailSpan.innerHTML = emailInput.value;
        textInput.focus();
        textInput.value = ""
        emailInput.value = ""
      }
    });
    let deleteSpan = document.createElement("span");
    deleteSpan.textContent = "Delete";
    deleteSpan.classList.add("delete");

    spanButtons.appendChild(updateSpan);
    spanButtons.appendChild(deleteSpan);

    newDiv.appendChild(testSpan);
    newDiv.appendChild(emailSpan);
    newDiv.appendChild(spanButtons);

    spansContainer.appendChild(newDiv);

    textInput.value = "";
    emailInput.value = "";
    deleteSpan.addEventListener("click", function () {
      if(confirm("Are You Sure Delete It")){
        spansContainer.removeChild(newDiv);
      }
    });
  }
});
