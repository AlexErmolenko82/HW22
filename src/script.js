export const form = document.forms.addItem;
export const input = form.input;
const select = form.select;
const title = document.querySelector(".title");

export const addItem = () => {
    let list = document.querySelector(`.list`);

    let listItem = document.createElement('li');
    select.selectedIndex ? list.prepend(listItem) : list.append(listItem);
    listItem.className = "list_item";
    listItem.textContent = input.value;

    let inputCheckbox = document.createElement('input');
    listItem.prepend(inputCheckbox);
    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.className = "checkbox form-check-margin-auto";

    let deleteButton = document.createElement('button');
    listItem.append(deleteButton);
    deleteButton.className = "btn btn-outline-danger btn-sm delete_button";
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';

    form.reset();
    showCountItems();
}

export const showCountItems = () => {
    let count = document.querySelectorAll(".list_item").length;
    title.textContent = `ToDo list (${count} items):`;
  }