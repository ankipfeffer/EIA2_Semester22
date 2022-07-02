// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich
var A11;
(function (A11) {
    window.addEventListener("load", hndLoad);
    let movables = [];
    let humans = [];
    let trees = [];
    let towels = [];
    let boards = [];
    let TASK;
    (function (TASK) {
        TASK[TASK["TOWEL"] = 0] = "TOWEL";
        TASK[TASK["TOBOARD"] = 1] = "TOBOARD";
        TASK[TASK["BOARD"] = 2] = "BOARD";
        TASK[TASK["TOTOWEL"] = 3] = "TOTOWEL";
    })(TASK = A11.TASK || (A11.TASK = {}));
    A11.frame = 0;
    A11.direction = true;
    function hndLoad(_event) {
        console.log("hndLoad");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A11.crc2 = canvas.getContext("2d");
        draw();
        window.setInterval(update, 20);
        canvas.addEventListener("mousedown", screenClicked);
    }
    function randomFloat(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    A11.randomFloat = randomFloat;
    function randomInt(_min, _max) {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }
    function createShip(_nShip) {
        for (let i = 0; i < _nShip; i++) {
            let position = new A11.Vector(randomFloat(337, 1856), randomFloat(351, 468));
            let velocity = new A11.Vector(randomFloat(position.x * -1, position.x), position.y);
            let ship = new A11.Ship(position, velocity);
            movables.push(ship);
            console.log(ship);
        }
    }
    function createBirds(_nBirds) {
        for (let i = 0; i < _nBirds; i++) {
            let position = new A11.Vector(randomFloat(100, 1856), randomFloat(100, 400));
            let velocity = new A11.Vector(randomFloat(position.x * -1, position.x), position.y);
            let bird = new A11.Bird(position, velocity);
            movables.push(bird);
            console.log(bird);
        }
    }
    function createFish(_nFish) {
        for (let i = 0; i < _nFish; i++) {
            let position = new A11.Vector(randomFloat(1941, 2489), randomFloat(468, 702));
            let velocity = new A11.Vector(randomFloat(position.x * -1, position.x), position.y);
            let nemo = new A11.Fish(position, velocity);
            movables.push(nemo);
            console.log(nemo);
        }
    }
    function createTourists(_nTourists) {
        for (let i = 0; i < _nTourists; i++) {
            let position = new A11.Vector(1000, 1050);
            let velocity = new A11.Vector(position.x, position.y);
            let task = TASK.TOWEL;
            let tourist = new A11.Human(position, velocity, task);
            humans.push(tourist);
            console.log("state1: " + task);
            // console.log(tourist);
        }
    }
    function createTowel(_nTowels) {
        for (let i = 0; i < _nTowels; i++) {
            let position = new A11.Vector(1000, 1050);
            let towel = new A11.Towel(position);
            towels.push(towel);
        }
    }
    function createBoard(_boards) {
        for (let i = 0; i < _boards; i++) {
            let position = new A11.Vector(1600, 600);
            let board = new A11.Board(position);
            boards.push(board);
        }
    }
    function createClouds(_nClouds) {
        for (let i = 0; i < _nClouds; i++) {
            let position = new A11.Vector(randomFloat(10, 2000), randomFloat(50, 200));
            let velocity = new A11.Vector(randomFloat(position.x * -1, position.x), position.y);
            let cloud = new A11.Cloud(position, velocity);
            movables.push(cloud);
            console.log(cloud);
        }
    }
    function createTrees() {
        let position = new A11.Vector(randomFloat(40, 350), randomFloat(850, 1165));
        let tree = new A11.Tree(position);
        trees.push(tree);
        console.log(tree);
    }
    function draw() {
        let nShips = randomInt(1, 3);
        let nBirds = randomInt(2, 4);
        let nFish = randomInt(3, 7);
        let nHuman = 1;
        let nClouds = randomInt(3, 4);
        drawSky();
        drawSea();
        drawBeach();
        createShip(nShips);
        createBirds(nBirds);
        createFish(nFish);
        createTourists(nHuman);
        createClouds(nClouds);
        createTowel(1);
        createBoard(1);
        for (let i = 0; i < 4; i++) {
            createTrees();
        }
    }
    function drawSky() {
        A11.crc2.save();
        let gradient = A11.crc2.createLinearGradient(0, 0, 0, 312);
        gradient.addColorStop(0, "#143c99");
        gradient.addColorStop(1, "#76a4db");
        A11.crc2.fillStyle = gradient;
        A11.crc2.fillRect(0, 0, A11.crc2.canvas.width, 312);
        A11.crc2.restore();
    }
    function drawSea() {
        A11.crc2.save();
        let gradient = A11.crc2.createLinearGradient(0, 312, 0, 468);
        gradient.addColorStop(0, "#036fa8");
        gradient.addColorStop(1, "#42c8e3");
        A11.crc2.fillStyle = gradient;
        A11.crc2.fillRect(0, 312, A11.crc2.canvas.width, 468);
        A11.crc2.restore();
    }
    function drawBeach() {
        A11.crc2.save();
        let gradient = A11.crc2.createLinearGradient(0, 778, 0, 1170);
        gradient.addColorStop(0, "#c9b142");
        gradient.addColorStop(0.3, "#f2e279");
        gradient.addColorStop(1, "#d6c354");
        A11.crc2.fillStyle = gradient;
        A11.crc2.fillRect(0, 778, A11.crc2.canvas.width, 1170);
        A11.crc2.restore();
    }
    function update() {
        drawSky();
        drawSea();
        drawBeach();
        for (let movable of movables) {
            movable.move(1 / 500);
            movable.draw();
        }
        for (let tree of trees) {
            tree.draw();
        }
        for (let board of boards) {
            board.draw();
        }
        for (let towel of towels) {
            towel.draw();
        }
        for (let tourist of humans) {
            tourist.move(1 / 200);
            tourist.draw();
            // console.log("human drawn");
        }
        A11.frame++;
    }
    function screenClicked(_event) {
        console.log("Screen was clicked");
        let hotspot = new A11.Vector(_event.clientX - A11.crc2.canvas.offsetLeft, _event.clientY - A11.crc2.canvas.offsetTop);
        console.log(hotspot);
        let shipHit = getShipHit(hotspot);
        let humanHit = getHumanHit(hotspot);
        if (shipHit) {
            console.log(shipHit);
            shipDirection(shipHit);
        }
        if (humanHit) {
            console.log(humanHit);
            humanToBoard(humanHit);
        }
    }
    function getShipHit(_hotspot) {
        for (let movable of movables) {
            if (movable instanceof A11.Ship && movable.shipisClicked(_hotspot)) {
                console.log("getShipHit");
                return movable;
            }
        }
        return null;
    }
    function getHumanHit(_hotspot) {
        for (let human of humans) {
            if (human instanceof A11.Human && human.humanisClicked(_hotspot)) {
                console.log("getHumanHit");
                return human;
            }
        }
        return null;
    }
    function shipDirection(_ship) {
        if (A11.direction == true) {
            A11.direction = false;
            console.log("changes direction to false");
        }
        else if (A11.direction == false) {
            A11.direction = true;
            console.log("changes direction to true");
        }
    }
    function humanToBoard(_human) {
        console.log("Human changes Task to");
        if (_human.task == TASK.TOWEL) {
            _human.task = TASK.TOBOARD;
        }
        else if (_human.task == TASK.BOARD) {
            _human.task = TASK.TOTOWEL;
            console.log("human to towel");
        }
        else if (_human.task == TASK.TOBOARD || _human.task == TASK.TOTOWEL) {
            console.log("state2: " + _human.task);
            return;
        }
        console.log("state2: " + _human.task);
    }
    A11.humanToBoard = humanToBoard;
})(A11 || (A11 = {}));
//# sourceMappingURL=Main.js.map