// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich
var A11;
(function (A11) {
    class Bird extends A11.Movable {
        draw() {
            let x = this.position.x;
            let y = this.position.y;
            let rotation = [10, 15, 35, 40, 60, 85, 110, 135, 160];
            let rotNum = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
            // console.log("birdRotation", rotNum);
            let wing = new Path2D();
            wing.moveTo(0, 0);
            wing.arc(-40, 0, 40, 0, 1 * Math.PI);
            wing.moveTo(80, 0);
            wing.arc(40, 0, 40, 0, 1 * Math.PI);
            A11.crc2.save();
            A11.crc2.translate(x, y);
            A11.crc2.rotate(rotation[rotNum]);
            A11.crc2.stroke(wing);
            A11.crc2.restore();
        }
    }
    A11.Bird = Bird;
})(A11 || (A11 = {}));
//# sourceMappingURL=Bird.js.map