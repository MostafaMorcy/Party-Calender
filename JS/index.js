let btn = document.querySelectorAll(".itemParent")
let items = document.querySelectorAll(".itemChild")
let textArea = document.getElementById("message")
let count = document.getElementById('characters')
let finishTime = new Date("Dec 18, 2022 19:55:00").getTime()
let time = setInterval(()=>{
    let now = new Date().getTime()
    let spaceBetween = finishTime - now
    let days = Math.floor(spaceBetween / (1000*60*60*24))
    let hours = Math.floor((spaceBetween % (1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor((spaceBetween % (1000*60*60))/(1000*60))
    let seconds = Math.floor((spaceBetween % (1000*60))/(1000))
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
    if(spaceBetween < 0){
        clearInterval(time)
        document.getElementById("deadTime").classList.add("d-none")
        document.getElementById("expired").innerHTML = "Expired"
        document.getElementById("expired").classList.replace("d-none","d-block")
    }
})
function checkText(){
    let max = 100 - textArea.value.length
    count.innerHTML = max
}
textArea.addEventListener("keyup",()=>checkText())
$(".itemChild").slideUp();
btn[0].addEventListener("click",()=>{
    $(".itemChild1").slideToggle(1000)
    $(".itemChild2").slideUp(1000);
    $(".itemChild3").slideUp(1000);
    $(".itemChild4").slideUp(1000);
})
btn[1].addEventListener("click",()=>{
    $(".itemChild2").slideToggle(1000)
    $(".itemChild1").slideUp(1000);
    $(".itemChild3").slideUp(1000);
    $(".itemChild4").slideUp(1000);
})
btn[2].addEventListener("click",()=>{
    $(".itemChild3").slideToggle(1000)
    $(".itemChild1").slideUp(1000);
    $(".itemChild2").slideUp(1000);
    $(".itemChild4").slideUp(1000);
})
btn[3].addEventListener("click",()=>{
    $(".itemChild4").slideToggle(1000)
    $(".itemChild1").slideUp(1000);
    $(".itemChild2").slideUp(1000);
    $(".itemChild3").slideUp(1000);
})