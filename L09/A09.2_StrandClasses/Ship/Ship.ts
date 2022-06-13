// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich

namespace A09_2 {
    export class Ship {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position: Vector, _velocity: Vector) {
            console.log("Ship constructor");
            this.size = _size;
            this.position = _position;
            this.velocity = _velocity;

            this.draw();
        }

        move(_timeslice: number): void {
            console.log("Ship move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addHor(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

        }

        draw(): void {
            console.log("Ship draw");
            let x: number = this.position.x;
            let y: number = this.position.y;

            let ship: Path2D = new Path2D();
            ship.arc(0, 0, 84, 0, 1 * Math.PI);
            ship.lineTo(84, 0);

            let flag: Path2D = new Path2D();
            flag.moveTo(0, 0);
            flag.lineTo(0, -93);
            flag.lineTo(67, -54);
            flag.lineTo(0, -15);

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
    }
}