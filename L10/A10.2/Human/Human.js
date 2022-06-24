// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich
var A10_2;
(function (A10_2) {
    class Human {
        position;
        rotation;
        constructor(_position) {
            this.position = _position;
            this.rotation = A10_2.randomFloat(Math.PI * 0.75, Math.PI * 1.25);
        }
        draw() {
            if (this.position.y >= 850)
                this.chiller();
            else if (this.position.y <= 775)
                this.surfer();
        }
        tourist() {
            let tourist = new Path2D;
            tourist.moveTo(25, 0);
            tourist.lineTo(0, -62);
            tourist.moveTo(-25, 0);
            tourist.lineTo(0, -62);
            tourist.lineTo(0, -124);
            tourist.moveTo(0, -109);
            tourist.lineTo(25, -70);
            tourist.moveTo(0, -109);
            tourist.lineTo(-25, -70);
            let head = new Path2D;
            head.arc(0, -148, 25, 0, 2 * Math.PI);
            A10_2.crc2.save();
            A10_2.crc2.stroke(tourist);
            A10_2.crc2.stroke(head);
            A10_2.crc2.fillStyle = "#cca07a";
            A10_2.crc2.fill(head);
            A10_2.crc2.restore();
        }
        towel() {
            let towel = new Path2D;
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
            A10_2.crc2.save();
            A10_2.crc2.stroke(towel);
            A10_2.crc2.fillStyle = "#9dba7f";
            A10_2.crc2.fill(towel);
            A10_2.crc2.restore();
        }
        surfboard() {
            let board = new Path2D;
            board.ellipse(0, 0, 33, 117, Math.PI / 2, 0, 2 * Math.PI);
            A10_2.crc2.save();
            A10_2.crc2.stroke(board);
            A10_2.crc2.fillStyle = "#918ef5";
            A10_2.crc2.fill(board);
            A10_2.crc2.restore();
        }
        surfer() {
            let x = this.position.x;
            let y = this.position.y;
            let rotation = [0, 25, 50, 75];
            let rotNum = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
            console.log("TouristBoard", rotNum);
            A10_2.crc2.save();
            A10_2.crc2.translate(x, y);
            A10_2.crc2.rotate(rotation[rotNum]);
            this.surfboard();
            this.tourist();
            A10_2.crc2.restore();
        }
        chiller() {
            let x = this.position.x;
            let y = this.position.y;
            // let rotation: number[] = [10, 15, 35, 60, 85, 110];
            let rotNum = this.rotation;
            console.log("TouristTowel", rotNum);
            A10_2.crc2.save();
            A10_2.crc2.translate(x, y);
            A10_2.crc2.rotate(rotNum);
            this.towel();
            this.tourist();
            A10_2.crc2.restore();
        }
    }
    A10_2.Human = Human;
})(A10_2 || (A10_2 = {}));
//# sourceMappingURL=Human.js.map