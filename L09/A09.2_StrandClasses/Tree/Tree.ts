// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich

namespace A09_2 {
    export class Tree {
        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
            this.draw();
        }

        draw(): void {
            let x: number = this.position.x;
            let y: number = this.position.y;
            // let x: number = positionx;

            crc2.save();
            crc2.translate(x, y);

            let trunk: Path2D = new Path2D;
            trunk.moveTo(0, 0);
            trunk.lineTo(33, -39);
            trunk.lineTo(-33, -39);
            trunk.lineTo(0, 0);

            crc2.save();

            crc2.fillStyle = "#85492c";
            crc2.fill(trunk);
            crc2.stroke(trunk);

            for (let i: number = 1; i < 8; i++) {
                crc2.translate(0, -39);
                crc2.fillStyle = "#85492c";
                crc2.fill(trunk);
                crc2.stroke(trunk);
            }
            crc2.restore();


            console.log("leaf1");
            let leaf1: Path2D = new Path2D;
            crc2.save();
            crc2.translate(-16, -297);
            crc2.rotate(Math.PI / 5);
            leaf1.moveTo(0, 0);
            leaf1.lineTo(0, -78);
            leaf1.lineTo(84, -39);
            leaf1.lineTo(0, 0);

            crc2.fillStyle = "#228a28";
            crc2.fill(leaf1);
            crc2.stroke(leaf1);

            crc2.translate(50, 0);

            crc2.fillStyle = "#228a28";
            crc2.fill(leaf1);
            crc2.stroke(leaf1);

            crc2.translate(50, 0);
            crc2.fillStyle = "#228a28";
            crc2.fill(leaf1);
            crc2.stroke(leaf1);

            crc2.restore();


            console.log("leaf2");
            let leaf2: Path2D = new Path2D;
            crc2.save();
            crc2.translate(0, -351);
            crc2.rotate(Math.PI / 1);
            leaf2.moveTo(0, 0);
            leaf2.lineTo(0, -78);
            leaf2.lineTo(84, -39);
            leaf2.lineTo(0, 0);

            crc2.fillStyle = "#228a28";
            crc2.fill(leaf2);
            crc2.stroke(leaf2);

            crc2.translate(50, 0);

            crc2.fillStyle = "#228a28";
            crc2.fill(leaf2);
            crc2.stroke(leaf2);

            crc2.translate(50, 0);
            crc2.fillStyle = "#228a28";
            crc2.fill(leaf2);
            crc2.stroke(leaf2);

            crc2.restore();


            console.log("leaf3");
            let leaf3: Path2D = new Path2D;
            crc2.save();
            crc2.translate(0, -335);
            crc2.rotate(Math.PI / 1.3);
            leaf3.moveTo(0, 0);
            leaf3.lineTo(0, -78);
            leaf3.lineTo(84, -39);
            leaf3.lineTo(0, 0);

            crc2.fillStyle = "#228a28";
            crc2.fill(leaf3);
            crc2.stroke(leaf3);

            crc2.translate(50, 0);

            crc2.fillStyle = "#228a28";
            crc2.fill(leaf3);
            crc2.stroke(leaf3);

            crc2.translate(50, 0);
            crc2.fillStyle = "#228a28";
            crc2.fill(leaf3);
            crc2.stroke(leaf3);

            crc2.restore();

            

            crc2.restore();
        }

    }
}
