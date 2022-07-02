// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich
var A11;
(function (A11) {
    class Movable {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
            this.draw();
        }
        move(_timeslice) {
            let offset = new A11.Vector(this.velocity.x, this.velocity.y);
            if (A11.direction == true) {
                // console.log("Movable move");           
                offset.scale(_timeslice);
                this.position.addHor(offset);
            }
            else if (A11.direction == false) {
                offset.scale(_timeslice * -1);
                this.position.addHor(offset);
            }
            if (this.position.x < 0)
                this.position.x += A11.crc2.canvas.width;
            if (this.position.x > A11.crc2.canvas.width)
                this.position.x -= A11.crc2.canvas.width;
        }
        draw() {
            // 
        }
    }
    A11.Movable = Movable;
})(A11 || (A11 = {}));
//# sourceMappingURL=Movable.js.map