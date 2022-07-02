// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich

namespace A11 {
    export class Towel {
        position: Vector;
        rotation: number;

        constructor(_position: Vector) {
            this.position = _position;
        }

    draw(): void {
        let x: number = this.position.x;
        let y: number = this.position.y;
        crc2.save();
        crc2.translate(x, y);
        
        let towel: Path2D = new Path2D;
        towel.moveTo(50, 15);
        towel.lineTo(-50, 15);
        towel.lineTo(-50, -187);
        towel.lineTo(50, -187);
        towel.lineTo(50, 15);

        towel.moveTo(-50, 15);
        towel.lineTo(-50, 46);
        towel.moveTo(-25, 15);
        towel.lineTo(-25, 46);
        towel.moveTo(0, 15);
        towel.lineTo(0, 46);
        towel.moveTo(25, 15);
        towel.lineTo(25, 46);
        towel.moveTo(50, 15);
        towel.lineTo(50, 46);

        towel.moveTo(-50, -187);
        towel.lineTo(-50, -218);
        towel.moveTo(-25, -187);
        towel.lineTo(-25, -218);
        towel.moveTo(0, -187);
        towel.lineTo(0, -218);
        towel.moveTo(25, -187);
        towel.lineTo(25, -218);
        towel.moveTo(50, -187);
        towel.lineTo(50, -218);

        crc2.save();
        crc2.stroke(towel);
        crc2.fillStyle = "#9dba7f";
        crc2.fill(towel);
        crc2.restore();
        crc2.restore();
    }

   

    }
}