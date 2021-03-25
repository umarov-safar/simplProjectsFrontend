
    if(window.innerWidth < 1200) {
        document.body.innerHTML = "<h1>You are  not able to see this on phone</h1>"
        throw new Error("You are not able to see this on phone device")
    } 

let backgrounds =  [
    "bg3.png", "bg4.jpg",
    "bg6.jpg", "bg7.jpg", "bg8.jpg",
    "bg10.jpg", "bg11.jpg", "bg13.jpg"
];


function changeBackground() {
    let i = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = "url(images/" + backgrounds[i] + ")";
}


setInterval(changeBackground, 1500)

document.querySelector(".logo").onclick =  () => {
    document.location = "index.html"
}