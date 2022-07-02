// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich

namespace A11 {
    window.addEventListener("load", hndLoad);

    export let crc2: CanvasRenderingContext2D;
    let movables: Movable[] = [];
    let humans: Human[] = [];
    let trees: Tree[] = [];
    let towels: Towel[] = [];
    let boards: Board[] = [];

    export enum TASK {
        TOWEL,
        TOBOARD,
        BOARD,
        TOTOWEL
    }

    export let frame: number = 0;

    export let direction: boolean = true;

    function hndLoad(_event: Event): void {
        console.log("hndLoad");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        draw();
       
        window.setInterval(update, 20);

        canvas.addEventListener("mousedown", screenClicked);
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
            let ship: Ship = new Ship(position, velocity);
            movables.push(ship);
            console.log(ship);
        }
    }

    function createBirds(_nBirds: number): void {
        for (let i: number = 0; i < _nBirds; i++) {
            let position: Vector = new Vector(randomFloat(100, 1856), randomFloat(100, 400));
            let velocity: Vector = new Vector(randomFloat(position.x * -1, position.x), position.y);
            let bird: Bird = new Bird(position, velocity);
            movables.push(bird);
            console.log(bird);
        }
    }

    function createFish(_nFish: number): void {
        for (let i: number = 0; i < _nFish; i++) {
            let position: Vector = new Vector(randomFloat(1941, 2489), randomFloat(468, 702));
            let velocity: Vector = new Vector(randomFloat(position.x * -1, position.x), position.y);
            let nemo: Fish = new Fish(position, velocity);
            movables.push(nemo);
            console.log(nemo);
        }
    }

    function createTourists(_nTourists: number): void {
        for (let i: number = 0; i < _nTourists; i++) {
            let position: Vector = new Vector(1000, 1050);
            let velocity: Vector = new Vector(position.x, position.y);
            let task: TASK = TASK.TOWEL;
            let tourist: Human = new Human(position, velocity, task);
            humans.push(tourist);
            console.log("state1: " + task);
            // console.log(tourist);
        }
    }

    function createTowel(_nTowels: number): void {
        for (let i: number = 0; i < _nTowels; i++) {
            let position: Vector = new Vector(1000, 1050);
            let towel: Towel = new Towel(position);
            towels.push(towel);     
        }
    }

    function createBoard(_boards: number): void {
        for (let i: number = 0; i < _boards; i++) {
            let position: Vector = new Vector(1600, 600);
            let board: Board = new Board(position);
            boards.push(board);
        }
    }

    function createClouds(_nClouds: number): void {
        for (let i: number = 0; i < _nClouds; i++) {
            let position: Vector = new Vector(randomFloat(10, 2000), randomFloat(50, 200));
            let velocity: Vector = new Vector(randomFloat(position.x * -1, position.x), position.y);
            let cloud: Cloud = new Cloud(position, velocity);
            movables.push(cloud);
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
        let nBirds: number = randomInt(2, 4);
        let nFish: number = randomInt(3, 7);
        let nHuman: number = 1;
        let nClouds: number = randomInt(3, 4);

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

        for (let i: number = 0; i < 4; i++) {
            createTrees();
        }
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
        frame++;
    }


    function screenClicked(_event: MouseEvent): void {
        console.log("Screen was clicked");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        console.log(hotspot);
        let shipHit: Ship | null = getShipHit(hotspot);
        let humanHit: Human | null = getHumanHit(hotspot);
        
        if (shipHit) {
            console.log(shipHit);
            shipDirection(shipHit); }
        if (humanHit) {
            console.log(humanHit);
            humanToBoard(humanHit); }
    }

    function getShipHit(_hotspot: Vector): Ship | null { 
        for (let movable of movables) {
            if (movable instanceof Ship && movable.shipisClicked(_hotspot)) {
                console.log("getShipHit");
                return movable;
            }
        }
        return null;
    }

    function getHumanHit(_hotspot: Vector): Human | null {
        for (let human of humans) {
            if (human instanceof Human && human.humanisClicked(_hotspot)) {
                console.log("getHumanHit");
                return human;
            }
        }
        return null;
    }

    function shipDirection(_ship: Ship): void {
        if (direction == true) {
            direction = false;
            console.log("changes direction to false");
        } else if (direction == false) {
            direction = true;
            console.log("changes direction to true");
        }
    }

    export function humanToBoard(_human: Human): void {
        console.log("Human changes Task to");
        if (_human.task == TASK.TOWEL) {
            _human.task = TASK.TOBOARD;
        } else if (_human.task == TASK.BOARD) {
            _human.task = TASK.TOTOWEL;
            console.log("human to towel");     
        } else if (_human.task == TASK.TOBOARD || _human.task == TASK.TOTOWEL) {
            console.log("state2: " + _human.task);
            return;
        }
        console.log("state2: " + _human.task);
    }
}