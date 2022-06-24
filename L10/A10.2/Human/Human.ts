// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich

namespace A10_2 {
    export class Human {
        position: Vector;
        rotation: number;

        constructor(_position: Vector) {
            this.position = _position;
            this.rotation = randomFloat(Math.PI * 0.75, Math.PI * 1.25);

        }

        draw(): void {
            if (this.position.y >= 850)
            this.chiller();
        else if (this.position.y <= 775)
            this.surfer();
        }
        tourist(): void {
            let tourist: Path2D = new Path2D;
            tourist.moveTo(25, 0);
            tourist.lineTo(0, -62);
            tourist.moveTo(-25, 0);
            tourist.lineTo(0, -62);
            tourist.lineTo(0, -124);
            tourist.moveTo(0, -109);
            tourist.lineTo(25, -70);
            tourist.moveTo(0, -109);
            tourist.lineTo(-25, -70);

            let head: Path2D = new Path2D;
            head.arc(0, -148, 25, 0, 2 * Math.PI);

            crc2.save();

            crc2.stroke(tourist);
            crc2.stroke(head);
            crc2.fillStyle = "#cca07a";
            crc2.fill(head);
            crc2.restore();
        }

        towel(): void {
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
        }

        surfboard(): void {
            let board: Path2D = new Path2D;
            board.ellipse(0, 0, 33, 117, Math.PI / 2, 0, 2 * Math.PI);

            crc2.save();
            crc2.stroke(board);
            crc2.fillStyle = "#918ef5";
            crc2.fill(board);
            crc2.restore();
        }

        surfer(): void {
            let x: number = this.position.x;
            let y: number = this.position.y;

            let rotation: number[] = [0, 25, 50, 75];
            let rotNum: number = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;

            console.log("TouristBoard", rotNum);

            crc2.save();
            crc2.translate(x, y);
            crc2.rotate(rotation[rotNum]);

            this.surfboard();
            this.tourist();

            crc2.restore();
        }

        chiller(): void {
            let x: number = this.position.x;
            let y: number = this.position.y;

            // let rotation: number[] = [10, 15, 35, 60, 85, 110];
            let rotNum: number = this.rotation;

            console.log("TouristTowel", rotNum);

            crc2.save();
            crc2.translate(x, y);
            crc2.rotate(rotNum);

            this.towel();
            this.tourist();

            crc2.restore();
        }


    }
}