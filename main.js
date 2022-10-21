const elForm = document.querySelector(".ad-form");
const elInput = elForm.querySelector(".js-input");
const elBtn = elForm.querySelector(".js-btn");
const elList = document.querySelector(".list");

const arr = []

elBtn.addEventListener("click", function (evt){
    evt.preventDefault();

    const elInputVale = elInput.value.trim();
    const object = {
        id: "",
        text: elInputVale
    }

    arr.push(object);
    elForm.reset();
    elList.innerHTML = null;

    for (let i = 0; i < arr.length; i++) {
        arr[i].id = i+1;

        // New element
        const newItem = document.createElement("li");
        const newNumber = document.createElement("span");
        const newInput = document.createElement("input");
        const newText = document.createElement("p");
        const newBtnWrap = document.createElement("div");
        const newDeleteBtn = document.createElement("button");
        const newAddBtn = document.createElement("button");

        // New element assigment value
        newItem.classList.add("p-4", "bg-success", "rounded", "d-flex", "mb-4", "align-items-center", "me-3")
        newNumber.classList.add("me-2", "d-inline-block", "text-white");
        newNumber.textContent = arr[i].id + ".";
        newInput.classList.add("form-check-input", "me-3");
        newInput.setAttribute("type", "checkbox")
        newText.textContent = arr[i].text;
        newText.classList.add("me-4", "mb-0", "text-white", "fs-3")
        newBtnWrap.classList.add("d-flex", "align-items-center");
        newDeleteBtn.classList.add("btn", "btn-danger", "me-3");
        newDeleteBtn.textContent = "Delete"
        newAddBtn.classList.add("btn", "btn-primary")
        newAddBtn.textContent = "Add"

        // Element appendChild
        newItem.appendChild(newNumber);
        newItem.appendChild(newInput);
        newItem.appendChild(newText);
        newItem.appendChild(newBtnWrap);
        newItem.appendChild(newDeleteBtn);
        newItem.appendChild(newAddBtn);


        elList.appendChild(newItem);
    }
})
