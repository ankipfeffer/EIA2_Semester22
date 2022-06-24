// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich
var A10_2;
(function (A10_2) {
    class Ship extends A10_2.Movable {
        draw() {
            console.log("Ship draw");
            let x = this.position.x;
            let y = this.position.y;
            let ship = new Path2D();
            ship.arc(0, 0, 84, 0, 1 * Math.PI);
            ship.lineTo(84, 0);
            let flag = new Path2D();
            flag.moveTo(0, 0);
            flag.lineTo(0, -93);
            flag.lineTo(67, -54);
            flag.lineTo(0, -15);
            A10_2.crc2.save();
            A10_2.crc2.translate(x, y);
            A10_2.crc2.stroke(ship);
            A10_2.crc2.stroke(flag);
            A10_2.crc2.fillStyle = "#85492c";
            A10_2.crc2.fill(ship);
            A10_2.crc2.fillStyle = "#d6463e";
            A10_2.crc2.fill(flag);
            A10_2.crc2.restore();
        }
    }
    A10_2.Ship = Ship;
})(A10_2 || (A10_2 = {}));
//# sourceMappingURL=Ship.js.map