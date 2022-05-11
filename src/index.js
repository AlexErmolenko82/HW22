"use strict"
// css
import "./style.scss";
require('bootstrap-icons/font/bootstrap-icons.css');

import { addItem, showCountItems, form, input } from "./script";

const container = document.querySelector(".container");
const errorMessage = document.querySelector(".error_message");

showCountItems();

form.onsubmit = (event) => {
  event.preventDefault();

  if (input.value.trim().length === 0) {
    input.classList.add("error");
    errorMessage.textContent = "ToDo field is required";
    return;
  }
  addItem();
}

input.onchange = () => {
  const isErrorField = input.classList.contains("error");
if (isErrorField) {
      input.classList.remove("error");
      errorMessage.textContent = "";
    }
}

container.addEventListener("click", (event) => {
    const isRemoveButton = event.target.classList.contains("delete_button");
    if (isRemoveButton) {
      event.target.closest(".list_item").remove();
      showCountItems();
      }
});

container.addEventListener("change", (event) => {
  const isCheckboxChanged = event.target.classList.contains("checkbox");
  if (isCheckboxChanged) {
    let markedItem = event.target.closest(".list_item");
    event.target.disabled = true;
    markedItem.querySelector(".delete_button").disabled = true;
    markedItem.classList.toggle("marked_item");
    }
});

