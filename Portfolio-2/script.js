const header = document.querySelectorAll("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxc6iVcjLNrAN_siZy0wbcmDA8jWba07WFMyT3Hb8KCZEORKM29eOLHyxNn54LudvYrKw/exec'
const form = document.forms['contact-forms']

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(new FormData(form)); // Log the form data for debugging

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        console.log('Success!', response);
        alert("Thank you! your form is submitted successfully.");
    })
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})