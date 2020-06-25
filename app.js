const burger=document.querySelector(".burger");
const menu =document.querySelector(".mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-menu li");   

//MENU BAR TRANSFORMATION ON BURGER CLICK

const navSlide=()=>{     

    burger.addEventListener("click",()=>{

        //menu-bar transformation on burger click
        menu.classList.toggle("nav-active");

        //links animation on burger click     
        menuLinks.forEach((link,index)=>{

            if(link.style.animation){
                link.style.animation="";
            }else{
            link.style.animation = `links-animation 2s ease ${index/7}s forwards`;}

        });

        //burger transformation on click
        burger.classList.toggle("transform-burger");
    });
}
navSlide();

//MENU BAR TRANSFORMATION ON MENU-BAR-LINKS CLICK
const activeLink =()=>{    
     
    menuLinks.forEach((link)=>{

        link.addEventListener("click",()=>{
            //menu-bar transformation on links click
            menu.classList.toggle("nav-active");

            //burger transformation on click
            burger.classList.toggle("transform-burger");
        });  
    })
}
activeLink();