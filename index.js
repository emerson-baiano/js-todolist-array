const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const inputAdd = document.querySelector("#input-add");
const ulTodoList = document.querySelector(".todo-list");

/**
 * Creates the item element and append to the ul
 * @param {string} item
 * @returns
 */
const createItem = (item) => {
  inputAdd.value = "";
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  li.innerHTML = item;
  li.appendChild(deleteBtn);
  ulTodoList.appendChild(li);
  deleteBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    return;
  });
  return;
};

// adding item to the ul List
//if no value, return alert
addBtn.addEventListener("click", () => {
  if (inputAdd.value) return createItem(inputAdd.value);
  return alert("Please write something!");
});
