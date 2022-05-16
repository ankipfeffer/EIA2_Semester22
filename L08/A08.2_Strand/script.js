var A08_2;
(function (A08_2) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "hsla(273, 79%, 86%, 1)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log("height", crc2.canvas.height);
        console.log("width", crc2.canvas.width);
        drawSky();
        drawSea();
        drawBeach();
        drawClouds({ x: 30, y: 20 }, { x: 25, y: 10 });
        drawClouds({ x: 50, y: 30 }, { x: 20, y: 10 });
        drawClouds({ x: 80, y: 20 }, { x: 20, y: 15 });
        drawClouds({ x: 250, y: 20 }, { x: 20, y: 15 });
        drawClouds({ x: 280, y: 30 }, { x: 25, y: 10 });
        drawBirds({ x: 80, y: 20 }, { x: 100, y: 30 });
        drawBirds({ x: 120, y: 10 }, { x: 150, y: 20 });
        drawShip({ x: 200, y: 50 }, { x: 220, y: 60 });
        drawShip({ x: 40, y: 45 }, { x: 60, y: 50 });
        drawFish({ x: 230, y: 70 }, { x: 260, y: 80 });
        drawFish({ x: 240, y: 70 }, { x: 270, y: 80 });
        drawFish({ x: 260, y: 60 }, { x: 280, y: 70 });
        drawFish({ x: 270, y: 70 }, { x: 290, y: 90 });
        drawFish({ x: 280, y: 80 }, { x: 295, y: 90 });
        combineTouristTowel({ x: 50, y: 110 }, { x: 80, y: 120 });
        combineTouristTowel({ x: 90, y: 110 }, { x: 120, y: 120 });
        combineTouristTowel({ x: 200, y: 110 }, { x: 250, y: 120 });
        combineTouristBoard({ x: 90, y: 60 }, { x: 120, y: 90 });
        combineTrunkLeaf({ x: 5, y: 105 }, { x: 25, y: 120 });
        combineTrunkLeaf({ x: 10, y: 115 }, { x: 30, y: 130 });
        combineTrunkLeaf({ x: 20, y: 120 }, { x: 45, y: 148 });
    }
    function drawSky() {
        let gradient = crc2.createLinearGradient(0, 0, 0, 40);
        gradient.addColorStop(0, "#143c99");
        gradient.addColorStop(1, "#76a4db");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, 40);
    }
    function drawSea() {
        let gradient = crc2.createLinearGradient(0, 40, 0, 60);
        gradient.addColorStop(0, "#036fa8");
        gradient.addColorStop(1, "#42c8e3");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 40, crc2.canvas.width, 60);
    }
    function drawBeach() {
        let gradient = crc2.createLinearGradient(0, 100, 0, 50);
        gradient.addColorStop(0, "#d6c354");
        gradient.addColorStop(0.5, "#e3c066");
        gradient.addColorStop(1, "#d6c354");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 100, crc2.canvas.width, 50);
    }
    function drawClouds(_position, _size) {
        let nCirclesmin = 8;
        let nCirclesmax = 15;
        let nCircles = Math.floor(Math.random() * (nCirclesmax - nCirclesmin) + nCirclesmin);
        let r = 8;
        let circles = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, r);
        circles.arc(0, 0, r, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
        gradient.addColorStop(1, "HSLA(0, 0%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nCircles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(circles);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawBirds(_posmin, _posmax) {
        let x = Math.random() * (_posmax.x - _posmin.x) + _posmin.x;
        let y = Math.random() * (_posmax.y - _posmin.y) + _posmin.y;
        let rotation = [10, 15, 35, 40, 60, 85, 110, 135, 160];
        let rotNum = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
        console.log("birdRotation", rotNum);
        let wing = new Path2D();
        wing.moveTo(0, 0);
        wing.arc(-5, 0, 5, 0, 1 * Math.PI);
        wing.moveTo(10, 0);
        wing.arc(5, 0, 5, 0, 1 * Math.PI);
        crc2.save();
        crc2.translate(x, y);
        crc2.rotate(rotation[rotNum]);
        crc2.stroke(wing);
        crc2.restore();
    }
    function drawShip(_posmin, _posmax) {
        let x = Math.random() * (_posmax.x - _posmin.x) + _posmin.x;
        let y = Math.random() * (_posmax.y - _posmin.y) + _posmin.y;
        let ship = new Path2D();
        ship.arc(0, 0, 10, 0, 1 * Math.PI);
        ship.lineTo(10, 0);
        let flag = new Path2D();
        flag.moveTo(0, 0);
        flag.lineTo(0, -12);
        flag.lineTo(8, -7);
        flag.lineTo(0, -2);
        crc2.save();
        crc2.translate(x, y);
        crc2.stroke(ship);
        crc2.stroke(flag);
        crc2.fillStyle = "#85492c";
        crc2.fill(ship);
        crc2.fillStyle = "#d6463e";
        crc2.fill(flag);
        crc2.restore();
    }
    function drawFish(_posmin, _posmax) {
        let x = Math.random() * (_posmax.x - _posmin.x) + _posmin.x;
        let y = Math.random() * (_posmax.y - _posmin.y) + _posmin.y;
        let rotation = [0, 25, 50, 75, 100, 120, 125, 145];
        let rotNum = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
        console.log("fishRotation", rotNum);
        let fish = new Path2D();
        fish.ellipse(0, 0, 3, 7, Math.PI / 2, 0, 2 * Math.PI);
        fish.moveTo(7, 0);
        fish.lineTo(10, -3);
        fish.lineTo(10, 3);
        fish.closePath();
        crc2.save();
        crc2.translate(x, y);
        crc2.rotate(rotation[rotNum]);
        crc2.stroke(fish);
        crc2.fillStyle = "#e36f39";
        crc2.fill(fish);
        crc2.restore();
    }
    function drawTowel() {
        let towel = new Path2D;
        towel.moveTo(6, 2);
        towel.lineTo(-6, 2);
        towel.lineTo(-6, -24);
        towel.lineTo(6, -24);
        towel.lineTo(6, 2);
        towel.moveTo(-6, 2);
        towel.lineTo(-6, 6);
        towel.moveTo(-3, 2);
        towel.lineTo(-3, 6);
        towel.moveTo(0, 2);
        towel.lineTo(0, 6);
        towel.moveTo(3, 2);
        towel.lineTo(3, 6);
        towel.moveTo(6, 2);
        towel.lineTo(6, 6);
        towel.moveTo(-6, -24);
        towel.lineTo(-6, -28);
        towel.moveTo(-3, -24);
        towel.lineTo(-3, -28);
        towel.moveTo(0, -24);
        towel.lineTo(0, -28);
        towel.moveTo(3, -24);
        towel.lineTo(3, -28);
        towel.moveTo(6, -24);
        towel.lineTo(6, -28);
        crc2.save();
        crc2.stroke(towel);
        crc2.fillStyle = "#9dba7f";
        crc2.fill(towel);
        crc2.restore();
    }
    function drawBoard() {
        let board = new Path2D;
        board.ellipse(0, 0, 4, 15, Math.PI / 2, 0, 2 * Math.PI);
        crc2.save();
        crc2.stroke(board);
        crc2.fillStyle = "#918ef5";
        crc2.fill(board);
        crc2.restore();
    }
    function drawTourist() {
        let tourist = new Path2D;
        tourist.moveTo(3, 0);
        tourist.lineTo(0, -8);
        tourist.moveTo(-3, 0);
        tourist.lineTo(0, -8);
        tourist.lineTo(0, -16);
        tourist.moveTo(0, -14);
        tourist.lineTo(3, -9);
        tourist.moveTo(0, -14);
        tourist.lineTo(-3, -9);
        let head = new Path2D;
        head.arc(0, -19, 3, 0, 2 * Math.PI);
        crc2.save();
        crc2.stroke(tourist);
        crc2.stroke(head);
        crc2.fillStyle = "#cca07a";
        crc2.fill(head);
        crc2.restore();
    }
    function combineTouristTowel(_posmin, _posmax) {
        let x = Math.random() * (_posmax.x - _posmin.x) + _posmin.x;
        let y = Math.random() * (_posmax.y - _posmin.y) + _posmin.y;
        let rotation = [10, 15, 35, 60, 85, 110];
        let rotNum = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
        console.log("TouristTowel", rotNum);
        crc2.save();
        crc2.translate(x, y);
        crc2.rotate(rotation[rotNum]);
        drawTowel();
        drawTourist();
        crc2.restore();
    }
    function combineTouristBoard(_posmin, _posmax) {
        let x = Math.random() * (_posmax.x - _posmin.x) + _posmin.x;
        let y = Math.random() * (_posmax.y - _posmin.y) + _posmin.y;
        let rotation = [0, 25, 50, 75];
        let rotNum = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
        console.log("TouristBoard", rotNum);
        crc2.save();
        crc2.translate(x, y);
        crc2.rotate(rotation[rotNum]);
        drawBoard();
        drawTourist();
        crc2.restore();
    }
    function drawTrunk() {
        let trunk = new Path2D;
        trunk.moveTo(0, 0);
        trunk.lineTo(4, -5);
        trunk.lineTo(-4, -5);
        trunk.lineTo(0, 0);
        crc2.save();
        crc2.fillStyle = "#85492c";
        crc2.fill(trunk);
        crc2.stroke(trunk);
        for (let i = 1; i < 8; i++) {
            crc2.translate(0, -5);
            crc2.fillStyle = "#85492c";
            crc2.fill(trunk);
            crc2.stroke(trunk);
        }
        crc2.restore();
    }
    function drawLeaf(_rotation) {
        let leaf = new Path2D;
        crc2.save();
        crc2.translate(0, -40);
        crc2.rotate(Math.PI / _rotation);
        leaf.moveTo(0, 0);
        leaf.lineTo(0, -10);
        leaf.lineTo(10, -5);
        leaf.lineTo(0, 0);
        crc2.fillStyle = "#228a28";
        crc2.fill(leaf);
        crc2.stroke(leaf);
        crc2.translate(6, 0);
        crc2.fillStyle = "#228a28";
        crc2.fill(leaf);
        crc2.stroke(leaf);
        crc2.translate(6, 0);
        crc2.fillStyle = "#228a28";
        crc2.fill(leaf);
        crc2.stroke(leaf);
        crc2.restore();
    }
    function combineTrunkLeaf(_posmin, _posmax) {
        let x = Math.random() * (_posmax.x - _posmin.x) + _posmin.x;
        let y = Math.random() * (_posmax.y - _posmin.y) + _posmin.y;
        crc2.save();
        crc2.translate(x, y);
        drawTrunk();
        crc2.save();
        crc2.translate(-2, 2);
        drawLeaf(5);
        crc2.restore();
        crc2.save();
        crc2.translate(0, -5);
        drawLeaf(1);
        crc2.restore();
        crc2.save();
        crc2.translate(0, -3);
        drawLeaf(1.3);
        crc2.restore();
        crc2.restore();
    }
})(A08_2 || (A08_2 = {}));
//# sourceMappingURL=script.js.map