// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich
var A11;
(function (A11) {
    class Ship extends A11.Movable {
        draw() {
            // console.log("Ship draw");
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
            A11.crc2.save();
            A11.crc2.translate(x, y);
            A11.crc2.stroke(ship);
            A11.crc2.stroke(flag);
            A11.crc2.fillStyle = "#85492c";
            A11.crc2.fill(ship);
            A11.crc2.fillStyle = "#d6463e";
            A11.crc2.fill(flag);
            A11.crc2.restore();
        }
        shipisClicked(_hotspot) {
            let hitsize = 120;
            let difference = new A11.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y + 50);
            // console.log(this.position.y, _hotspot.y);
            if ((Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize)) {
                console.log("shipisClicked");
            }
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    A11.Ship = Ship;
})(A11 || (A11 = {}));
//# sourceMappingURL=Ship.js.map