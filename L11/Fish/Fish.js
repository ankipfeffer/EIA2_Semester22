// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich
var A11;
(function (A11) {
    class Fish extends A11.Movable {
        draw() {
            let x = this.position.x;
            let y = this.position.y;
            let rotation = [0, 25, 50, 75, 100, 120, 125, 145];
            let rotNum = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
            // console.log("fishRotation", rotNum);
            let fish = new Path2D();
            fish.ellipse(0, 0, 10, 25, Math.PI / 2, 0, 2 * Math.PI);
            fish.moveTo(23, 0);
            fish.lineTo(33, -10);
            fish.lineTo(33, 10);
            fish.closePath();
            A11.crc2.save();
            A11.crc2.translate(x, y);
            A11.crc2.rotate(rotation[rotNum]);
            A11.crc2.stroke(fish);
            A11.crc2.fillStyle = "#e36f39";
            A11.crc2.fill(fish);
            A11.crc2.restore();
        }
    }
    A11.Fish = Fish;
})(A11 || (A11 = {}));
//# sourceMappingURL=Fish.js.map