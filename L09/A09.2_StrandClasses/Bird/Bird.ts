// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich

namespace A09_2 {
    export class Bird {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position: Vector, _velocity: Vector) {
            this.size = _size;
            this.position = _position;
            this.velocity = _velocity;

            this.draw();
        }

        draw(): void {
            let x: number = this.position.x;
            let y: number = this.position.y;

            let rotation: number[] = [10, 15, 35, 40, 60, 85, 110, 135, 160];
            let rotNum: number = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;

            console.log("birdRotation", rotNum);

            let wing: Path2D = new Path2D();
            wing.moveTo(0, 0);
            wing.arc(-40, 0, 40, 0, 1 * Math.PI);
            wing.moveTo(80, 0);
            wing.arc(40, 0, 40, 0, 1 * Math.PI);

            crc2.save();
            crc2.translate(x, y);
            crc2.rotate(rotation[rotNum]);

            crc2.stroke(wing);

            crc2.restore();
        }

        move(_timeslice: number): void {
            console.log("Bird move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addAll(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }
    }
}