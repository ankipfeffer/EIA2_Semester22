// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich
var A11;
(function (A11) {
    class Towel {
        position;
        rotation;
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            let x = this.position.x;
            let y = this.position.y;
            A11.crc2.save();
            A11.crc2.translate(x, y);
            let towel = new Path2D;
            towel.moveTo(50, 15);
            towel.lineTo(-50, 15);
            towel.lineTo(-50, -187);
            towel.lineTo(50, -187);
            towel.lineTo(50, 15);
            towel.moveTo(-50, 15);
            towel.lineTo(-50, 46);
            towel.moveTo(-25, 15);
            towel.lineTo(-25, 46);
            towel.moveTo(0, 15);
            towel.lineTo(0, 46);
            towel.moveTo(25, 15);
            towel.lineTo(25, 46);
            towel.moveTo(50, 15);
            towel.lineTo(50, 46);
            towel.moveTo(-50, -187);
            towel.lineTo(-50, -218);
            towel.moveTo(-25, -187);
            towel.lineTo(-25, -218);
            towel.moveTo(0, -187);
            towel.lineTo(0, -218);
            towel.moveTo(25, -187);
            towel.lineTo(25, -218);
            towel.moveTo(50, -187);
            towel.lineTo(50, -218);
            A11.crc2.save();
            A11.crc2.stroke(towel);
            A11.crc2.fillStyle = "#9dba7f";
            A11.crc2.fill(towel);
            A11.crc2.restore();
            A11.crc2.restore();
        }
    }
    A11.Towel = Towel;
})(A11 || (A11 = {}));
//# sourceMappingURL=Towel.js.map