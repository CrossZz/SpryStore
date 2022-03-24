// BANNER 
const slides=document.querySelectorAll(".banner-content-left-img");
const btnRight=document.getElementById("btn-right");
const btnLeft=document.getElementById("btn-left");

let activeSlide=0;

btnLeft.addEventListener("click",()=>{
   activeSlide--;
   if ( activeSlide < 0 ) {
      activeSlide=slides.length-1;
   }
   // console.log(activeSlide)
   setActiveSlide();
})
btnRight.addEventListener("click",()=>{
   activeSlide++;
   if( activeSlide > slides.length-1 ){
      activeSlide=0;
   }
   // console.log(activeSlide)
   // setTimeout(setActiveSlide,500)
   setActiveSlide();
})
const setActiveSlide = ()=>{
   slides.forEach((slide)=>{
      if (slide.className.includes("active")){
         // slide.style.right="50px"
         // console.log(slide.style)
         // console.log(slide.clientWidth)
         slide.classList.remove("active")
      }
      // console.log(slide.classList.includes["active"])
      
      // console.log(slide.classList);
   });
   // console.log('active');
   slides[activeSlide].classList.add("active");
   // console.log(slides[activeSlide].className.includes("active"))
}

