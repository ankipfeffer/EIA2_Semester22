var A09_2;
(function (A09_2) {
    class Cloud {
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
            let nCirclesmin = 8;
            let nCirclesmax = 15;
            let nCircles = Math.floor(Math.random() * (nCirclesmax - nCirclesmin) + nCirclesmin);
            let r = 65;
            let circles = new Path2D();
            let gradient = A09_2.crc2.createRadialGradient(0, 0, 0, 0, 0, r);
            circles.arc(0, 0, r, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            gradient.addColorStop(1, "HSLA(0, 0%, 50%, 0)");
            A09_2.crc2.save();
            A09_2.crc2.translate(x, y);
            A09_2.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nCircles; drawn++) {
                A09_2.crc2.save();
                // let x: number = (Math.random() - 0.5) * _size.x;
                // let y: number = - (Math.random() * _size.y);
                let x = (Math.random() - 0.5) * 200;
                let y = -(Math.random() * 10);
                A09_2.crc2.translate(x, y);
                A09_2.crc2.fill(circles);
                A09_2.crc2.restore();
            }
            A09_2.crc2.restore();
        }
        move(_timeslice) {
            console.log("Cloud move");
            let offset = new A09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addHor(offset);
            if (this.position.x < 0)
                this.position.x += A09_2.crc2.canvas.width;
            if (this.position.x > A09_2.crc2.canvas.width)
                this.position.x -= A09_2.crc2.canvas.width;
        }
    }
    A09_2.Cloud = Cloud;
})(A09_2 || (A09_2 = {}));
//# sourceMappingURL=Cloud.js.map