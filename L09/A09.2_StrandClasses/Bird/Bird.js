var A09_2;
(function (A09_2) {
    class Bird {
        position;
        velocity;
        size;
        constructor(_size, _position, _velocity) {
            this.size = _size;
            this.position = _position;
            this.velocity = _velocity;
            this.draw();
        }
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
            A09_2.crc2.save();
            A09_2.crc2.translate(x, y);
            A09_2.crc2.rotate(rotation[rotNum]);
            A09_2.crc2.stroke(wing);
            A09_2.crc2.restore();
        }
        move(_timeslice) {
            console.log("Bird move");
            let offset = new A09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addAll(offset);
            if (this.position.x < 0)
                this.position.x += A09_2.crc2.canvas.width;
            if (this.position.x > A09_2.crc2.canvas.width)
                this.position.x -= A09_2.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A09_2.crc2.canvas.height;
            if (this.position.y > A09_2.crc2.canvas.height)
                this.position.y -= A09_2.crc2.canvas.height;
        }
    }
    A09_2.Bird = Bird;
})(A09_2 || (A09_2 = {}));
//# sourceMappingURL=Bird.js.map