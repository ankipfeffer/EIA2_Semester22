var A09_2;
(function (A09_2) {
    class Ship {
        position;
        velocity;
        size;
        constructor(_size, _position, _velocity) {
            console.log("Ship constructor");
            this.size = _size;
            this.position = _position;
            this.velocity = _velocity;
            this.draw();
        }
        move(_timeslice) {
            console.log("Ship move");
            let offset = new A09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addHor(offset);
            if (this.position.x < 0)
                this.position.x += A09_2.crc2.canvas.width;
            if (this.position.x > A09_2.crc2.canvas.width)
                this.position.x -= A09_2.crc2.canvas.width;
        }
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
            A09_2.crc2.save();
            A09_2.crc2.translate(x, y);
            A09_2.crc2.stroke(ship);
            A09_2.crc2.stroke(flag);
            A09_2.crc2.fillStyle = "#85492c";
            A09_2.crc2.fill(ship);
            A09_2.crc2.fillStyle = "#d6463e";
            A09_2.crc2.fill(flag);
            A09_2.crc2.restore();
        }
    }
    A09_2.Ship = Ship;
})(A09_2 || (A09_2 = {}));
//# sourceMappingURL=Ship.js.map