var A09_2;
(function (A09_2) {
    window.addEventListener("load", hndLoad);
    let ships = [];
    let birds = [];
    let fish = [];
    let humans = [];
    let clouds = [];
    let trees = [];
    function hndLoad(_event) {
        console.log("hndLoad");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_2.crc2 = canvas.getContext("2d");
        draw();
        window.setInterval(update, 20);
    }
    function randomFloat(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    A09_2.randomFloat = randomFloat;
    function randomInt(_min, _max) {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }
    function createShip(_nShip) {
        for (let i = 0; i < _nShip; i++) {
            let position = new A09_2.Vector(randomFloat(337, 1856), randomFloat(351, 468));
            let velocity = new A09_2.Vector(randomFloat(position.x * -1, position.x), position.y);
            let size = randomFloat(1, 5);
            let ship = new A09_2.Ship(size, position, velocity);
            ships.push(ship);
            console.log(ship);
        }
    }
    function createBirds(_nBirds) {
        for (let i = 0; i < _nBirds; i++) {
            let position = new A09_2.Vector(randomFloat(337, 1856), randomFloat(351, 468));
            let velocity = new A09_2.Vector(randomFloat(position.x * -1, position.x), position.y);
            let size = randomFloat(1, 5);
            let bird = new A09_2.Bird(size, position, velocity);
            birds.push(bird);
            console.log(bird);
        }
    }
    function createFish(_nFish) {
        for (let i = 0; i < _nFish; i++) {
            let position = new A09_2.Vector(randomFloat(1941, 2489), randomFloat(468, 702));
            let velocity = new A09_2.Vector(randomFloat(position.x * -1, position.x), position.y);
            let nemo = new A09_2.Fish(position, velocity);
            fish.push(nemo);
            console.log(nemo);
        }
    }
    function createTourists(_nTourists) {
        for (let i = 0; i < _nTourists; i++) {
            let position = new A09_2.Vector(randomFloat(422, 2200), randomFloat(500, 950));
            let tourist = new A09_2.Human(position);
            humans.push(tourist);
            console.log(tourist);
        }
    }
    function createClouds(_nClouds) {
        for (let i = 0; i < _nClouds; i++) {
            let position = new A09_2.Vector(randomFloat(10, 2000), randomFloat(50, 200));
            let velocity = new A09_2.Vector(randomFloat(position.x * -1, position.x), position.y);
            let cloud = new A09_2.Cloud(position, velocity);
            clouds.push(cloud);
            console.log(cloud);
        }
    }
    function createTrees() {
        let position = new A09_2.Vector(randomFloat(40, 350), randomFloat(850, 1165));
        let tree = new A09_2.Tree(position);
        trees.push(tree);
        console.log(tree);
    }
    function draw() {
        let nShips = randomInt(1, 3);
        let nBirds = randomInt(2, 5);
        let nFish = randomInt(3, 7);
        let nHuman = randomInt(3, 6);
        let nClouds = randomInt(3, 4);
        drawSky();
        drawSea();
        drawBeach();
        createShip(nShips);
        createBirds(nBirds);
        createFish(nFish);
        createTourists(nHuman);
        createClouds(nClouds);
        for (let i = 0; i < 4; i++) {
            createTrees();
        }
        // drawShip({x: 1688, y: 390}, {x: 1856, y: 468});
        // drawShip({x: 337, y: 351}, {x: 506, y: 390});
    }
    function drawSky() {
        A09_2.crc2.save();
        let gradient = A09_2.crc2.createLinearGradient(0, 0, 0, 312);
        gradient.addColorStop(0, "#143c99");
        gradient.addColorStop(1, "#76a4db");
        A09_2.crc2.fillStyle = gradient;
        A09_2.crc2.fillRect(0, 0, A09_2.crc2.canvas.width, 312);
        A09_2.crc2.restore();
    }
    function drawSea() {
        A09_2.crc2.save();
        let gradient = A09_2.crc2.createLinearGradient(0, 312, 0, 468);
        gradient.addColorStop(0, "#036fa8");
        gradient.addColorStop(1, "#42c8e3");
        A09_2.crc2.fillStyle = gradient;
        A09_2.crc2.fillRect(0, 312, A09_2.crc2.canvas.width, 468);
        A09_2.crc2.restore();
    }
    function drawBeach() {
        A09_2.crc2.save();
        let gradient = A09_2.crc2.createLinearGradient(0, 778, 0, 1170);
        gradient.addColorStop(0, "#c9b142");
        gradient.addColorStop(0.3, "#f2e279");
        gradient.addColorStop(1, "#d6c354");
        A09_2.crc2.fillStyle = gradient;
        A09_2.crc2.fillRect(0, 778, A09_2.crc2.canvas.width, 1170);
        A09_2.crc2.restore();
    }
    function update() {
        drawSky();
        drawSea();
        drawBeach();
        for (let nemo of fish) {
            nemo.move(1 / 500);
            nemo.draw();
        }
        for (let ship of ships) {
            ship.move(1 / 50);
            ship.draw();
        }
        for (let bird of birds) {
            bird.move(1 / 20);
            bird.draw();
        }
        for (let tourist of humans) {
            tourist.draw();
        }
        for (let cloud of clouds) {
            cloud.move(1 / 100);
            cloud.draw();
        }
        for (let tree of trees) {
            tree.draw();
        }
    }
})(A09_2 || (A09_2 = {}));
//# sourceMappingURL=Main2.js.map