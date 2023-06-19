const beuabuttonscroll = document.querySelector('.beuabutton')
console.log(beuabuttonscroll)
const contentskills = document.querySelector(".backgroundcolor-babypink")
console.log(contentskills)

beuabuttonscroll.addEventListener("click", skillsscroll)


function skillsscroll(){
    contentskills.scrollIntoView({
        behavior: "smooth",

        block: "center",

        inline: "nearest",
    }
    )
}

// Scroll animation
// bron: https://www.youtube.com/watch?v=T33NN_pPeNI
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      } 
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));