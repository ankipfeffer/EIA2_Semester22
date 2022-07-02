// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich
var A11;
(function (A11) {
    class Cloud extends A11.Movable {
        draw() {
            let x = this.position.x;
            let y = this.position.y;
            let nCirclesmin = 8;
            let nCirclesmax = 15;
            let nCircles = Math.floor(Math.random() * (nCirclesmax - nCirclesmin) + nCirclesmin);
            let r = 65;
            let circles = new Path2D();
            let gradient = A11.crc2.createRadialGradient(0, 0, 0, 0, 0, r);
            circles.arc(0, 0, r, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            gradient.addColorStop(1, "HSLA(0, 0%, 50%, 0)");
            A11.crc2.save();
            A11.crc2.translate(x, y);
            A11.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nCircles; drawn++) {
                A11.crc2.save();
                // let x: number = (Math.random() - 0.5) * _size.x;
                // let y: number = - (Math.random() * _size.y);
                let x = (Math.random() - 0.5) * 200;
                let y = -(Math.random() * 10);
                A11.crc2.translate(x, y);
                A11.crc2.fill(circles);
                A11.crc2.restore();
            }
            A11.crc2.restore();
        }
    }
    A11.Cloud = Cloud;
})(A11 || (A11 = {}));
//# sourceMappingURL=Cloud.js.map