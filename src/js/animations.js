import gsap from "gsap"

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

//--- CURSOR TRAIL ANIMATION

const ballSpeed = 0.3

//cursor trail not visible until user interacts
document.addEventListener('mousemove', (e) => {
    let balls = Array.from(document.getElementsByClassName('ball'));
    balls.forEach((ball) => ball.style.display = 'grid')
})

//Globally declaring allows balls to keep track of eachother
let ball1 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let ball2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let ball3 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let ball4 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function animateBall(ballEl, ballSpeed) {
    gsap.set(ballEl, { xPercent: -50, yPercent: -50 });
    const ball = document.querySelector(ballEl);
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const speed = ballSpeed;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", e => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
        ball1 = { x: pos.x, y: pos.y }
    });
}
function animateBallTrail(ballEl, ballSpeed) {
    gsap.set(ballEl, { xPercent: -50, yPercent: -50 });
    const ball = document.querySelector(ballEl);
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const speed = ballSpeed;
    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");
    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (ball1.x - pos.x) * dt;
        pos.y += (ball1.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
        ball2 = { x: pos.x, y: pos.y }
    });
}

function animateBallTrail1(ballEl, ballSpeed) {
    gsap.set(ballEl, { xPercent: -50, yPercent: -50 });
    const ball = document.querySelector(ballEl);
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const speed = ballSpeed;
    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");
    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (ball2.x - pos.x) * dt;
        pos.y += (ball2.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
        ball3 = { x: pos.x, y: pos.y }

    });
}
function animateBallTrail2(ballEl, ballSpeed) {
    gsap.set(ballEl, { xPercent: -50, yPercent: -50 });
    const ball = document.querySelector(ballEl);
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const speed = ballSpeed;
    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");
    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (ball3.x - pos.x) * dt;
        pos.y += (ball3.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
        ball4 = { x: pos.x, y: pos.y }

    });
}

animateBall('#ball-1', ballSpeed)
animateBallTrail('#ball-2', ballSpeed)
animateBallTrail1('#ball-3', ballSpeed)
animateBallTrail2('#ball-4', ballSpeed)

// Cursor  
document.addEventListener('mousemove', (e) => {
    let cursor = document.querySelector('.cursor')
    cursor.style.left = `${e.pageX}px`
    cursor.style.top = `${e.pageY}px`

    //invisible if out of landing page
    if (!isSandbox) {
        if (!Array.from(document.elementsFromPoint(e.pageX, e.pageY)).includes(document.getElementById('home'))) {
            document.querySelector('.cursor').classList.add('cursor-inactive')
            Array.from(document.getElementsByClassName('ball')).forEach((ball) => { ball.classList.add('cursor-inactive') })
        }
        else {
            document.querySelector('.cursor').classList.remove('cursor-inactive')
            Array.from(document.getElementsByClassName('ball')).forEach((ball) => { ball.classList.remove('cursor-inactive') })
        }
    }
})

// --- CURSOR HOVER ANIMATION
let hoverElementTagArray = [
    //Enter all els with hover effect
    '#logo',
    '.page-link',
    '#home_sandbox-button',
    '#sandbox-return',
    '.project_title',
    '.project_info-button',
    '.project_info-link',
    '.about-link',
    '#wakatime-info',
    '#wakatime-logo',
    '#form-submit-button',
    '.section-link',
    '#footer-link',
    '.home_link',
    '#form-success-button',
    '.about-contact-link'
];

hoverElementTagArray.forEach((tag) => {
    let elements = document.querySelectorAll(tag);
    elements.forEach((el) => {
        el.addEventListener('mouseover', (e) => {
            document.querySelector('.cursor').classList.add('cursor-hover');
            let cursorTrail = Array.from(document.getElementsByClassName('ball'));
            cursorTrail.forEach((ball) => {
                ball.classList.add('ball-hover')
            })
        })
        el.addEventListener('mouseout', (e) => {
            document.querySelector('.cursor').classList.remove('cursor-hover');
            let cursorTrail = Array.from(document.getElementsByClassName('ball'));
            cursorTrail.forEach((ball) => {
                ball.classList.remove('ball-hover')
            })
        })
    })
})

// --- SANDBOX ANIMATION
let isSandbox = false;
function sandboxOn() {
    document.getElementById('page-wrap').classList.add('sandbox-mode')
    document.getElementById('sandbox-return-wrap').classList.add('sandbox-return-active');
    document.documentElement.style.setProperty('cursor', 'none');
    isSandbox = true;

}
function sandboxOff() {
    document.getElementById('page-wrap').classList.remove('sandbox-mode')
    document.getElementById('sandbox-return-wrap').classList.remove('sandbox-return-active')
    document.documentElement.style.setProperty('cursor', 'auto');
    isSandbox = false;

}
document.getElementById('home_sandbox-button').onclick = sandboxOn;
document.getElementById('sandbox-return').onclick = sandboxOff;

//---ABOUT SECTION TEXT ANIMATION

function animateAboutTitle() {
    let title = document.getElementById('about-title-2')
    let content = [
        'Problem Solver',
        'Builder',
        'Communicator'
    ]
    let currentContent = 0; //current content array index
    let currentChar = 0;
    let currentString = '' //current string that is rendered without '_'
    const delayFramesTotal = 30; //set how many frames to wait on full word
    const animationSpeed = 50; //set framerate for animation (ms)
    let delayFrames = delayFramesTotal;
    let staggerAnimation = false; //used to half 'typing' animation compared to 'delete' animation
    setInterval(() => {
        if (currentChar < content[currentContent].length) {
            if (!staggerAnimation) {
                currentString += content[currentContent][currentChar];
                title.innerText = currentString + '_';
                currentChar++
                staggerAnimation = true;
            }
            else staggerAnimation = false;
        }
        else {
            delayFrames--
            if (delayFrames <= 0) {
                currentString = currentString.substring(0, currentString.length - 1);
                title.innerText = currentString + '_';
                if (!currentString) {
                    currentChar = 0;
                    delayFrames = delayFramesTotal;
                    if (currentContent >= content.length - 1) {
                        currentContent = 0;
                        return
                    }
                    currentContent++;
                }
            }
        }
    }, animationSpeed)

}
animateAboutTitle();

//--- WAKATIME HOVER INFO

document.getElementById('wakatime-info').addEventListener('mouseover', (e) => {
    let hoverEl = document.querySelector('.wakatime-info-hover-el')
    let hoverElRect = hoverEl.getBoundingClientRect();
    let iconRect = document.getElementById('wakatime-info').getBoundingClientRect();
    hoverEl.classList.add('wakatime-info-hover-el-active');
    let x = iconRect.x - hoverElRect.width;
    let y = iconRect.y - hoverElRect.height;
    hoverEl.style.left = `${x}px`
    hoverEl.style.top = `${y}px`

})
document.getElementById('wakatime-info').addEventListener('mouseleave', (e) => {
    document.querySelector('.wakatime-info-hover-el').classList.remove('wakatime-info-hover-el-active')
})



if (isTouchDevice()) {
    document.querySelector('.cursor').style.display = 'none';
    document.getElementById('home_sandbox-button').style.display = 'none';
    let cursorTrail = Array.from(document.getElementsByClassName('ball'));
    cursorTrail.forEach((ball) => {
        ball.style.opacity = '0'
        console.log(ball)
    })


}