// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich
var A10_2;
(function (A10_2) {
    class Fish extends A10_2.Movable {
        draw() {
            let x = this.position.x;
            let y = this.position.y;
            let rotation = [0, 25, 50, 75, 100, 120, 125, 145];
            let rotNum = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
            console.log("fishRotation", rotNum);
            let fish = new Path2D();
            fish.ellipse(0, 0, 10, 25, Math.PI / 2, 0, 2 * Math.PI);
            fish.moveTo(23, 0);
            fish.lineTo(33, -10);
            fish.lineTo(33, 10);
            fish.closePath();
            A10_2.crc2.save();
            A10_2.crc2.translate(x, y);
            A10_2.crc2.rotate(rotation[rotNum]);
            A10_2.crc2.stroke(fish);
            A10_2.crc2.fillStyle = "#e36f39";
            A10_2.crc2.fill(fish);
            A10_2.crc2.restore();
        }
    }
    A10_2.Fish = Fish;
})(A10_2 || (A10_2 = {}));
//# sourceMappingURL=Fish.js.map