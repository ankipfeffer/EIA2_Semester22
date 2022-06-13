// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich

namespace A09_2 {
    window.addEventListener("load", hndLoad);

    export let crc2: CanvasRenderingContext2D;
    let ships: Ship[] = [];
    let birds: Bird[] = [];
    let fish: Fish[] = [];
    let humans: Human[] = [];
    let clouds: Cloud[] = [];
    let trees: Tree[] = [];

    function hndLoad(_event: Event): void {
        console.log("hndLoad");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        draw();

        
        window.setInterval(update, 20);
    }

    export function randomFloat(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }

    function randomInt(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }

    function createShip(_nShip: number): void {
        for (let i: number = 0; i < _nShip; i++) {
            let position: Vector = new Vector(randomFloat(337, 1856), randomFloat(351, 468));
            let velocity: Vector = new Vector(randomFloat(position.x * -1, position.x), position.y);
            let size: number = randomFloat(1, 5);
            let ship: Ship = new Ship(size, position, velocity);
            ships.push(ship);
            console.log(ship);
        }
    }

    function createBirds(_nBirds: number): void {
        for (let i: number = 0; i < _nBirds; i++) {
            let position: Vector = new Vector(randomFloat(337, 1856), randomFloat(351, 468));
            let velocity: Vector = new Vector(randomFloat(position.x * -1, position.x), position.y);
            let size: number = randomFloat(1, 5);
            let bird: Bird = new Bird(size, position, velocity);
            birds.push(bird);
            console.log(bird);
        }
    }

    function createFish(_nFish: number): void {
        for (let i: number = 0; i < _nFish; i++) {
            let position: Vector = new Vector(randomFloat(1941, 2489), randomFloat(468, 702));
            let velocity: Vector = new Vector(randomFloat(position.x * -1, position.x), position.y);
            let nemo: Fish = new Fish(position, velocity);
            fish.push(nemo);
            console.log(nemo);
        }
    }

    function createTourists(_nTourists: number): void {
        for (let i: number = 0; i < _nTourists; i++) {
            let position: Vector = new Vector(randomFloat(422, 2200), randomFloat(500, 950));
            let tourist: Human = new Human(position);
            humans.push(tourist);
            console.log(tourist);
        }
    }

    function createClouds(_nClouds: number): void {
        for (let i: number = 0; i < _nClouds; i++) {
            let position: Vector = new Vector(randomFloat(10, 2000), randomFloat(50, 200));
            let velocity: Vector = new Vector(randomFloat(position.x * -1, position.x), position.y);
            let cloud: Cloud = new Cloud(position, velocity);
            clouds.push(cloud);
            console.log(cloud);
        }
    }

    function createTrees(): void {
        let position: Vector = new Vector(randomFloat(40, 350), randomFloat(850, 1165));
        let tree: Tree = new Tree(position);
        trees.push(tree);
        console.log(tree);
    }

    function draw(): void {
        let nShips: number = randomInt(1, 3);
        let nBirds: number = randomInt(2, 5);
        let nFish: number = randomInt(3, 7);
        let nHuman: number = randomInt(3, 6);
        let nClouds: number = randomInt(3, 4);

        drawSky();
        drawSea();
        drawBeach();

        createShip(nShips);
        createBirds(nBirds);
        createFish(nFish);
        createTourists(nHuman);
        createClouds(nClouds);

        for (let i: number = 0; i < 4; i++) {
            createTrees();
        }

        // drawShip({x: 1688, y: 390}, {x: 1856, y: 468});
        // drawShip({x: 337, y: 351}, {x: 506, y: 390});
    }

    function drawSky(): void {
        crc2.save();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 312);

        gradient.addColorStop(0, "#143c99");
        gradient.addColorStop(1, "#76a4db");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, 312);
        crc2.restore();
    }

    function drawSea(): void {
        crc2.save();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 312, 0, 468);

        gradient.addColorStop(0, "#036fa8");
        gradient.addColorStop(1, "#42c8e3");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 312, crc2.canvas.width, 468);
        crc2.restore();
    }

    function drawBeach(): void {
        crc2.save();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 778, 0, 1170);

        gradient.addColorStop(0, "#c9b142");
        gradient.addColorStop(0.3, "#f2e279");
        gradient.addColorStop(1, "#d6c354");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 778, crc2.canvas.width, 1170);
        crc2.restore();
    }

    function update(): void {
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
}