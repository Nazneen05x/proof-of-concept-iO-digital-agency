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