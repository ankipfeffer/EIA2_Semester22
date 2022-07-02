// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich

namespace A11 {
    export class Board {
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
            let board: Path2D = new Path2D;
            board.ellipse(0, 0, 33, 117, Math.PI / 2, 0, 2 * Math.PI);

            crc2.save();
            crc2.stroke(board);
            crc2.fillStyle = "#918ef5";
            crc2.fill(board);
            crc2.restore();
            crc2.restore();
            console.log("hallo");
        }
        
        
    }
}