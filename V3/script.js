var initial = `M 10 100 Q 250 100 490 100`
var final = `M 10 100 Q 250 100 490 100`
var string = document.querySelector("#string")
string.addEventListener("mousemove", function (dets) {
    final = `M 10 100 Q ${dets.x} ${dets.y} 490 100`
    gsap.to("svg path", {
        attr: { d: final },
        duration: 0.23,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: initial },
        duration: 0.3,
        ease: "elastic.out(1,0.2)"
    })
})

var box = document.querySelector("#box")
main.addEventListener("mousemove", function (dets) {
    gsap.to(box, {
        x:dets.x,
        y:dets.y,
        duration:0.35,
        ease:"expoScale(0.5,7,none)",
        boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)" // Lighter shadow
    })
})