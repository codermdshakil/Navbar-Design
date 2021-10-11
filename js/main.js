const navslide=()=>{
    const burger=document.querySelector(".burger");
    const nav=document.querySelector(".nav-links");
    const navLink=document.querySelectorAll(".nav-links li");

burger.addEventListener('click',()=>{

    //toggle nav
    nav.classList.toggle('nav-active');

    //navlink anmation
    navLink.forEach((link,index)=>{
        if (link.style.animation) {
            link.style.animation=""
            
        }else{
            link.style.animation=`navAnimation 0.5s ease forwards ${index/7+.2}s`;

        }
    });
    
    //Burger Animation
    burger.classList.toggle('toggle');

});



}

navslide();