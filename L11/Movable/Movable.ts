// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich

namespace A11 {

    export class Movable {
        position: Vector;
        velocity: Vector;

        constructor (_position: Vector, _velocity: Vector) {
            this.position = _position;
            this.velocity = _velocity;

            this.draw();
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            if (direction == true) {
                // console.log("Movable move");           
                offset.scale(_timeslice);
                this.position.addHor(offset);
            } else if (direction == false) {
                offset.scale(_timeslice * -1);
                this.position.addHor(offset);
            }
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        }

        draw (): void {
            // 
        }
    }
}