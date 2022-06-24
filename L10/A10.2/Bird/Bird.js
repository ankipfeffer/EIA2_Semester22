// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich
var A10_2;
(function (A10_2) {
    class Bird extends A10_2.Movable {
        draw() {
            let x = this.position.x;
            let y = this.position.y;
            let rotation = [10, 15, 35, 40, 60, 85, 110, 135, 160];
            let rotNum = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
            console.log("birdRotation", rotNum);
            let wing = new Path2D();
            wing.moveTo(0, 0);
            wing.arc(-40, 0, 40, 0, 1 * Math.PI);
            wing.moveTo(80, 0);
            wing.arc(40, 0, 40, 0, 1 * Math.PI);
            A10_2.crc2.save();
            A10_2.crc2.translate(x, y);
            A10_2.crc2.rotate(rotation[rotNum]);
            A10_2.crc2.stroke(wing);
            A10_2.crc2.restore();
        }
    }
    A10_2.Bird = Bird;
})(A10_2 || (A10_2 = {}));
//# sourceMappingURL=Bird.js.map