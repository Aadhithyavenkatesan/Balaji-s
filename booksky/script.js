var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.querySelector("#add-popup-button");

addpopupbutton.addEventListener("click", function () {
    // Clear input fields
    document.getElementById("booktitle").value = '';
    document.getElementById("bookauthor").value = '';
    document.getElementById("bookdescription").value = '';

    popupbox.style.display = "block";
    popupoverlay.style.display = "block";
});

var cancelbutton = document.getElementById("cancelbook");
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
});

var container = document.querySelector(".container");
var bookadd = document.getElementById("addbook");
var booktitle = document.getElementById("booktitle");
var bookauthor = document.getElementById("bookauthor");
var bookdescription = document.getElementById("bookdescription");

bookadd.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitle.value}</h2>
                     <h3>${bookauthor.value}</h3>
                     <p>${bookdescription.value}</p>
                     <button onclick="deletebook(event)">delete</button>`;
    container.append(div);
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
});

function deletebook(event) {
    event.target.parentElement.remove();
}
