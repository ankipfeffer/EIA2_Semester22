// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich

namespace A11 {
    export class Cloud extends Movable {

        draw(): void {
            let x: number = this.position.x;
            let y: number = this.position.y;

            let nCirclesmin: number = 8;
            let nCirclesmax: number = 15;
            let nCircles: number = Math.floor(Math.random() * (nCirclesmax - nCirclesmin) + nCirclesmin);
            let r: number = 65;

            let circles: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, r);

            circles.arc(0, 0, r, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");        
            gradient.addColorStop(1, "HSLA(0, 0%, 50%, 0)");

            crc2.save();
            crc2.translate(x, y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nCircles; drawn++) {
            crc2.save();
            // let x: number = (Math.random() - 0.5) * _size.x;
            // let y: number = - (Math.random() * _size.y);
            let x: number = (Math.random() - 0.5) * 200;
            let y: number = - (Math.random() * 10);
            crc2.translate(x, y);
            crc2.fill(circles);
            crc2.restore();
            }
            
            crc2.restore();
        }
    }
}