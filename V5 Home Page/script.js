var tl = gsap.timeline({ paused: true });
var box = document.querySelector("#box");
var nav = document.querySelector("#nav");
var cross = document.querySelector("#box i");
var menu = document.querySelector("#nav i");

// Define the timeline animations
tl.to(box, {
    duration: 0.6,
    right: "0vw",
})
.from("#box h3", {
    x: 150,
    duration: 0.6,
    stagger: 0.3,
    opacity: 0,
});

tl.from(cross,{
    opacity:0,
})
// tl.pause();
// Event listeners to play and reverse the timeline
menu.addEventListener("click", function () {
    tl.play(); // Play forward
});

cross.addEventListener("click", function () {
    tl.to("#box h3", {
        x: 150,
        duration: 0.5, // Faster animation for hiding
        stagger: 0.1, // Slightly quicker stagger
        opacity: 0,
    });
    tl.reverse(); // Reverse the box animation
});
