window.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form");

    form.addEventListener("submit", (event) => {
         handleItemForm(event, form);
    });
}

function handleItemForm(event, formRef) {
    if(event.preventDefault) {
       event.preventDefault();
    }

    console.log("Event: ", event);

    return false;
}

