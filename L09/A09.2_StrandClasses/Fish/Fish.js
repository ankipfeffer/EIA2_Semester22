var A09_2;
(function (A09_2) {
    class Fish {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
            this.draw();
        }
        draw() {
            let x = this.position.x;
            let y = this.position.y;
            let rotation = [0, 25, 50, 75, 100, 120, 125, 145];
            let rotNum = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
            console.log("fishRotation", rotNum);
            let fish = new Path2D();
            fish.ellipse(0, 0, 10, 25, Math.PI / 2, 0, 2 * Math.PI);
            fish.moveTo(23, 0);
            fish.lineTo(33, -10);
            fish.lineTo(33, 10);
            fish.closePath();
            A09_2.crc2.save();
            A09_2.crc2.translate(x, y);
            A09_2.crc2.rotate(rotation[rotNum]);
            A09_2.crc2.stroke(fish);
            A09_2.crc2.fillStyle = "#e36f39";
            A09_2.crc2.fill(fish);
            A09_2.crc2.restore();
        }
        move(_timeslice) {
            console.log("Fish move");
            let offset = new A09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addHor(offset);
            if (this.position.x < 0)
                this.position.x += A09_2.crc2.canvas.width;
            if (this.position.x > A09_2.crc2.canvas.width)
                this.position.x -= A09_2.crc2.canvas.width;
        }
    }
    A09_2.Fish = Fish;
})(A09_2 || (A09_2 = {}));
//# sourceMappingURL=Fish.js.map