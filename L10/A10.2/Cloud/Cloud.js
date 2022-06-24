// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich
var A10_2;
(function (A10_2) {
    class Cloud extends A10_2.Movable {
        draw() {
            let x = this.position.x;
            let y = this.position.y;
            let nCirclesmin = 8;
            let nCirclesmax = 15;
            let nCircles = Math.floor(Math.random() * (nCirclesmax - nCirclesmin) + nCirclesmin);
            let r = 65;
            let circles = new Path2D();
            let gradient = A10_2.crc2.createRadialGradient(0, 0, 0, 0, 0, r);
            circles.arc(0, 0, r, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            gradient.addColorStop(1, "HSLA(0, 0%, 50%, 0)");
            A10_2.crc2.save();
            A10_2.crc2.translate(x, y);
            A10_2.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nCircles; drawn++) {
                A10_2.crc2.save();
                // let x: number = (Math.random() - 0.5) * _size.x;
                // let y: number = - (Math.random() * _size.y);
                let x = (Math.random() - 0.5) * 200;
                let y = -(Math.random() * 10);
                A10_2.crc2.translate(x, y);
                A10_2.crc2.fill(circles);
                A10_2.crc2.restore();
            }
            A10_2.crc2.restore();
        }
    }
    A10_2.Cloud = Cloud;
})(A10_2 || (A10_2 = {}));
//# sourceMappingURL=Cloud.js.map