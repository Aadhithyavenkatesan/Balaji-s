document.addEventListener('DOMContentLoaded', function() {
const optionMenus = document.querySelectorAll(".select-menu");

optionMenus.forEach((optionMenu) => {
    const selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;

            optionMenu.classList.remove("active");
        });
    });
});
document.getElementById('arrow').addEventListener('click', function() {
    var container = document.getElementById('speccontainer');
    container.classList.toggle('expanded');
});

//Responsive Nav-Bar
const navLinks = document.querySelector('.nav-links');
    

const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');

const hamburger = document.querySelector('.Hamburger');
document.getElementById('Hamburger').addEventListener('click', function() {
    
    navLinks.classList.toggle('active');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    
});


});


  