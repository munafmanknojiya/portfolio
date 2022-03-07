// javascript
 const toggleBtn = document.querySelector(".toggle");
 const navLink  = document.querySelectorAll(".nav__link");
 
 toggleBtn.addEventListener("click" , event =>{
     
     document.body.classList.toggle("nav-open");   
 })

navLink.forEach(link => {
    link.addEventListener("click" , ()=>{
         document.body.classList.remove("nav-open");
    })
})