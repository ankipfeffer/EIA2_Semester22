// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich

namespace A11 {
    export class Bird extends Movable {

        draw(): void {
            let x: number = this.position.x;
            let y: number = this.position.y;

            let rotation: number[] = [10, 15, 35, 40, 60, 85, 110, 135, 160];
            let rotNum: number = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;

            // console.log("birdRotation", rotNum);

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
    }
}