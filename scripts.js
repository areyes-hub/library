let myLibrary = [];

let template;
let rmvBtn;
let update;

let form = document.querySelector("form");
let clearBtn = document.querySelector(".clear");

let container = document.querySelector(".container");
let rightSide = document.querySelector(".right");
let leftSide = document.querySelector(".left");
let lib = document.querySelector(".lib")
let display = document.querySelector(".center");
let bottom = document.querySelector(".bottom");
let view = document.querySelector(".view");

let add = document.querySelector(".add-new");
add.addEventListener("click", () => {
    container.style.gridTemplateColumns = "39% 61%";
    display.style.backgroundImage = "none";
    display.style.opacity = 1;
    rightSide.style.width = "100%";
    leftSide.style.width = "100%";
    lib.textContent = "Books";
    add.style.display = "none";
});

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let year = document.querySelector("#year");
let pages = document.querySelector("#pages");

function Book(title, author, year, pages) {
    this.title = title.value,
        this.author = author.value,
        this.year = year.value,
        this.pages = pages.value
}

function createTab(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        template = document.createElement("div");
        rmvBtn = document.createElement("button");
        template.classList.add(`book${i}`);
        template.style.display = "flex";
        template.style.justifyItems = "center";
        template.style.alignItems = "center";
        template.style.width = "75%";
        template.style.padding = "8px";
        template.style.marginBottom = "8px";
        template.style.backgroundColor = "lightskyblue";
        template.style.borderRadius = "8px";
        template.textContent = arr[i];
        rmvBtn.textContent = "remove";
        rmvBtn.style.padding = "4px";
        rmvBtn.style.marginLeft = "auto";
        rmvBtn.style.borderRadius = "8px";
        rmvBtn.addEventListener("click", (e) => {
            e.preventDefault();
            arr.splice(i, 1);
        })
        rmvBtn.setAttribute("onclick", "deleteParent(this)");
        display.appendChild(template);
        template.appendChild(rmvBtn);
    }
}

function deleteParent(button) {
    button.parentElement.remove();
}

function viewAll() {
    view.addEventListener("click", (event) => {
        event.preventDefault();
        update = document.createElement("h2");
        update.textContent = "Books Available!";
        display.appendChild(update);
        createTab(myLibrary);
    })
}

function addBookToLibrary() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let book = new Book(title, author, year, pages);
        myLibrary.push(`Title: ${book.title}, author: ${book.author}, year: ${book.year}, pages: ${book.pages}`);
        form.reset();
    })
}


addBookToLibrary();
viewAll();


