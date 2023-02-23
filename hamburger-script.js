const Button = document.getElementById("btn")
const Nav = document.getElementById("nav")

Button.addEventListener("click", function(){
    Nav.classList.toggle("active");
    Button.classList.toggle("active");
});