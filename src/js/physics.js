// --- MATTER JS
// Runs the physics engine
// generates cursor hitbox, background boxes, and deals with interactions.

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

import Matter from "matter-js"


var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Events = Matter.Events,
    Body = Matter.Body;

var engine = Engine.create();
let engineWrap = document.getElementById('physics-engine-wrap')
var render = Render.create({
    element: engineWrap,
    engine: engine,
    options: {
        wireframes: false
    }
});

//Size dimensions to parent el (100vw/h)
render.options.wireframeBackground = 'transparent';
render.options.background = 'transparent';
render.bounds.max.x = engineWrap.getBoundingClientRect().width;
render.bounds.max.y = engineWrap.getBoundingClientRect().height * 2;
render.options.width = engineWrap.getBoundingClientRect().width;
render.options.height = engineWrap.getBoundingClientRect().height * 2;
render.canvas.width = engineWrap.getBoundingClientRect().width;
render.canvas.height = engineWrap.getBoundingClientRect().height * 2;

window.addEventListener('resize', () => {
    render.bounds.max.x = engineWrap.getBoundingClientRect().width;
    render.bounds.max.y = engineWrap.getBoundingClientRect().height * 2;
    render.options.width = engineWrap.getBoundingClientRect().width;
    render.options.height = engineWrap.getBoundingClientRect().height * 2;
    render.canvas.width = engineWrap.getBoundingClientRect().width;
    render.canvas.height = engineWrap.getBoundingClientRect().height * 2;
});

//Creates invisible cursor hitbox
var cursor = Bodies.circle(450, 50, 37, 37);
cursor.render.visible = false;
//Add cursor to world
let world = engine.world
Composite.add(world, [cursor]);

engine.gravity.y = 0.05;

Render.run(render);

// run the engine
var runner = Runner.create();
Runner.run(runner, engine);

// create mouse that engine understands
let canvas = document.querySelector("canvas");
let canvasMouse = Mouse.create(canvas);

// create mouse constraint
let mConstraintOptions = {
    mouse: canvasMouse,
    constraint: {
        render: {
            visible: false
        }
    }
}
let mConstraint = MouseConstraint.create(engine, mConstraintOptions);

World.add(world, mConstraint)

//Change default event listeners for Matter.Mouse
canvasMouse.element.removeEventListener('mousedown', canvasMouse.mousedown);
canvasMouse.element.removeEventListener('mouseup', canvasMouse.mouseup);
//Makes mouse always mousedown
document.addEventListener('mousemove', canvasMouse.mousedown);
document.addEventListener('mousemove', canvasMouse.mousemove);
if (!isTouchDevice()) {
    document.addEventListener('mousemove', alignCursor, { once: true });
}

function alignCursor() {
    Matter.Body.setPosition(cursor, canvasMouse.position)
}

//Spawn boxes

function newBox() {
    let size = (Math.random() * 100) + 20;
    let spawnPosY = (-document.getElementById('main').scrollTop); // Ensures boxes spawn at top of document after user has scrolled
    let box = Bodies.rectangle(Math.random() * render.options.width, spawnPosY - (size * 3), size, size);
    box.render.fillStyle = 'transparent';
    box.render.strokeStyle = '#BCFFE3'
    if (Math.random() > 0.9) {
        box.render.strokeStyle = '#FF8A00'
    }
    box.render.lineWidth = '3';
    Matter.Body.setVelocity(box, { x: (Math.random() - 0.5) * 10, y: (Math.random() - 0.5) * 2 });
    Matter.Body.setAngularVelocity(box, Math.random() / 5);
    return box;
}

let spawnRate = 1000000 / document.getElementById('main').clientWidth; //control spawn rate depending on device width
let initSpawn = document.getElementById('main').clientWidth / 40;
console.log(spawnRate);
let startBoxes = () => setInterval(() => {
    if (!document.hidden) { World.add(world, newBox()) }

    const bodyLimit = 1000;//maximum amount of boxes
    let bodiesArray = Composite.allBodies(world);
    if (bodiesArray.length > bodyLimit) {
        let excessBodies = bodiesArray.length - bodyLimit;
        for (let i = 1; i < excessBodies; i++) { // i === 1 to preserve cursor body
            Composite.remove(world, bodiesArray[i])
        }
    }
}, spawnRate);
function lotsOfBoxes() {
    if (!document.hidden) {
        for (let i = 0; i < initSpawn; i++) {
            let size = (Math.random() * 100) + 20;
            let spawnPosY = (-document.getElementById('main').scrollTop); // Ensures boxes spawn at top of document after user has scrolled
            let box = Bodies.rectangle(Math.random() * render.options.width, spawnPosY - (size * 3), size, size);
            box.render.fillStyle = 'transparent';
            box.render.strokeStyle = '#BCFFE3'
            if (Math.random() > 0.9) {
                box.render.strokeStyle = '#FF8A00'

            }
            box.render.lineWidth = '3';
            Matter.Body.setVelocity(box, { x: (Math.random() - 0.5) * 10, y: (Math.random() - 0.5) * 10 });
            Matter.Body.setAngularVelocity(box, Math.random() / 5);
            World.add(world, box)
        }

    }

}

//Starts boxes spawning once is active
if (!isTouchDevice()) {
    document.addEventListener('mousemove', startBoxes, { once: true });
    document.addEventListener('mousemove', lotsOfBoxes, { once: true });
}
else {
    startBoxes();
    lotsOfBoxes();
}



// --- PARRALAX EFFECT
// Creating the parralax effect for boxes in the engine rather than moving canvas helps performance alot

const parallaxSpeed = 0.8;
let main = document.getElementById('main');

let prevTop = 0;
main.addEventListener('scroll', (e) => {
    let amountMoved = prevTop - main.scrollTop;
    if (prevTop > main.scrollTop) {
        Composite.translate(world, { x: 0, y: parallaxSpeed * amountMoved })
    }
    else {
        Composite.translate(world, { x: 0, y: parallaxSpeed * amountMoved })

    }
    prevTop = main.scrollTop;
})


if (isTouchDevice()) {
    let bodiesArray = Composite.allBodies(world);
    Composite.remove(world, bodiesArray[0])
    Composite.remove(world, mConstraint)

}