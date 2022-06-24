var A10_2;
(function (A10_2) {
    class Movable {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
            this.draw();
        }
        move(_timeslice) {
            console.log("Movable move");
            let offset = new A10_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addHor(offset);
            if (this.position.x < 0)
                this.position.x += A10_2.crc2.canvas.width;
            if (this.position.x > A10_2.crc2.canvas.width)
                this.position.x -= A10_2.crc2.canvas.width;
        }
        draw() {
            // 
        }
    }
    A10_2.Movable = Movable;
})(A10_2 || (A10_2 = {}));
//# sourceMappingURL=Movable.js.map