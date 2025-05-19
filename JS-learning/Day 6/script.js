const itemInput = document.getElementById("itemInput");
const list = document.getElementById("list");
const totalDisplay = document.getElementById("total");

const shoppingList = [];

function addItem() {
  const item = itemInput.value.trim();
  if (item !== "") {
    shoppingList.push(item);
    updateList();
    itemInput.value = "";
  }
}

function removeLastItem() {
  if (shoppingList.length > 0) {
    shoppingList.pop();
    updateList();
  }
}

function updateList() {
  list.innerHTML = "";
  shoppingList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item}`;
    list.appendChild(li);
  });
  totalDisplay.textContent = `Total Items: ${shoppingList.length}`;
}
