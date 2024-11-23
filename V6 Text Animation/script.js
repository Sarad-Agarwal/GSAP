function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");
    var clutter = "";
    var half = Math.floor(splittedText.length / 2) - 2; // Half index calculation

    splittedText.forEach(function (elem, idx) {
        if (idx <= half) {
            if (elem == ' ') {
                clutter += `<span class="a">&nbsp;</span>`;
            } else {
                clutter += `<span class="a">${elem}</span>`;
            }
        } else {
            clutter += `<span class="b">${elem}</span>`;
        }
    });

    h1.innerHTML = clutter; // Apply the modified content to the h1
}

breakTheText();
var tl = gsap.timeline()
tl.from(".box", {
    y: 150,
    opacity: 0,
    duration: 2
})
tl.from("h1 .a", {
    y: 80,
    duration: 0.6,
    // delay: 0.5,
    stagger: 0.15,
    opacity: 0
})
tl.from("h1 .b", {
    y: 80,
    duration: 0.6,
    // delay: 0.5,
    stagger: -0.15,
    opacity: 0
})
// GSAP animation
// gsap.from("h1 span", {
//     y: 80,
//     opacity: 0,
//     duration: 0.5,
//     delay: 0.1,
//     stagger: 0.15,
// });
