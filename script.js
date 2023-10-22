let cursor = document.querySelector("#cursor");
let cursor_blur = document.querySelector("#cursor-blur");

document.addEventListener('mousemove', function(dets) {
    cursor.style.left = dets.x + 30 +"px"
    cursor.style.top = dets.y+"px"
    cursor_blur.style.left = dets.x - 150 + "px"
    cursor_blur.style.top = dets.y - 150 + "px"
})

let navLinks = document.querySelectorAll("#nav h4");

navLinks.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        cursor.style.scale = 2;
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    element.addEventListener("mouseleave", function() {
        cursor.style.scale = 1;
        cursor.style.border = "1px solid ##95c11e"
        cursor.style.backgroundColor = "#95c11e"
    })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.3,
    height: "110px",
    scrollTrigger : {
        trigger: "#nav",
        scroller: "body",
        markers: false,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      markers: false,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
});

gsap.from("#about-us, .about-us-img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 2

    }

});

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1

    }

});

gsap.from("#colon1", {
    y:-60,
    x:-60,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 55%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y:60,
    x:60,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 55%",
        scrub: 4
    }
})

gsap.from("#page-4 h1", {
    y:60,
    scrollTrigger: {
        trigger: "#page-4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 65%",
        scrub: 2
    }
})