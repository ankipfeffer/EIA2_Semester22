namespace A10_2 {

    export class Movable {
        position: Vector;
        velocity: Vector;

        constructor (_position: Vector, _velocity: Vector) {
            this.position = _position;
            this.velocity = _velocity;

            this.draw();
        }

        move(_timeslice: number): void {
            console.log("Movable move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addHor(offset);

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