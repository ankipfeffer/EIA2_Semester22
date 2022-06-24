// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich
var A10_2;
(function (A10_2) {
    class Tree {
        position;
        constructor(_position) {
            this.position = _position;
            this.draw();
        }
        draw() {
            let x = this.position.x;
            let y = this.position.y;
            // let x: number = positionx;
            A10_2.crc2.save();
            A10_2.crc2.translate(x, y);
            let trunk = new Path2D;
            trunk.moveTo(0, 0);
            trunk.lineTo(33, -39);
            trunk.lineTo(-33, -39);
            trunk.lineTo(0, 0);
            A10_2.crc2.save();
            A10_2.crc2.fillStyle = "#85492c";
            A10_2.crc2.fill(trunk);
            A10_2.crc2.stroke(trunk);
            for (let i = 1; i < 8; i++) {
                A10_2.crc2.translate(0, -39);
                A10_2.crc2.fillStyle = "#85492c";
                A10_2.crc2.fill(trunk);
                A10_2.crc2.stroke(trunk);
            }
            A10_2.crc2.restore();
            console.log("leaf1");
            let leaf1 = new Path2D;
            A10_2.crc2.save();
            A10_2.crc2.translate(-16, -297);
            A10_2.crc2.rotate(Math.PI / 5);
            leaf1.moveTo(0, 0);
            leaf1.lineTo(0, -78);
            leaf1.lineTo(84, -39);
            leaf1.lineTo(0, 0);
            A10_2.crc2.fillStyle = "#228a28";
            A10_2.crc2.fill(leaf1);
            A10_2.crc2.stroke(leaf1);
            A10_2.crc2.translate(50, 0);
            A10_2.crc2.fillStyle = "#228a28";
            A10_2.crc2.fill(leaf1);
            A10_2.crc2.stroke(leaf1);
            A10_2.crc2.translate(50, 0);
            A10_2.crc2.fillStyle = "#228a28";
            A10_2.crc2.fill(leaf1);
            A10_2.crc2.stroke(leaf1);
            A10_2.crc2.restore();
            console.log("leaf2");
            let leaf2 = new Path2D;
            A10_2.crc2.save();
            A10_2.crc2.translate(0, -351);
            A10_2.crc2.rotate(Math.PI / 1);
            leaf2.moveTo(0, 0);
            leaf2.lineTo(0, -78);
            leaf2.lineTo(84, -39);
            leaf2.lineTo(0, 0);
            A10_2.crc2.fillStyle = "#228a28";
            A10_2.crc2.fill(leaf2);
            A10_2.crc2.stroke(leaf2);
            A10_2.crc2.translate(50, 0);
            A10_2.crc2.fillStyle = "#228a28";
            A10_2.crc2.fill(leaf2);
            A10_2.crc2.stroke(leaf2);
            A10_2.crc2.translate(50, 0);
            A10_2.crc2.fillStyle = "#228a28";
            A10_2.crc2.fill(leaf2);
            A10_2.crc2.stroke(leaf2);
            A10_2.crc2.restore();
            console.log("leaf3");
            let leaf3 = new Path2D;
            A10_2.crc2.save();
            A10_2.crc2.translate(0, -335);
            A10_2.crc2.rotate(Math.PI / 1.3);
            leaf3.moveTo(0, 0);
            leaf3.lineTo(0, -78);
            leaf3.lineTo(84, -39);
            leaf3.lineTo(0, 0);
            A10_2.crc2.fillStyle = "#228a28";
            A10_2.crc2.fill(leaf3);
            A10_2.crc2.stroke(leaf3);
            A10_2.crc2.translate(50, 0);
            A10_2.crc2.fillStyle = "#228a28";
            A10_2.crc2.fill(leaf3);
            A10_2.crc2.stroke(leaf3);
            A10_2.crc2.translate(50, 0);
            A10_2.crc2.fillStyle = "#228a28";
            A10_2.crc2.fill(leaf3);
            A10_2.crc2.stroke(leaf3);
            A10_2.crc2.restore();
            A10_2.crc2.restore();
        }
    }
    A10_2.Tree = Tree;
})(A10_2 || (A10_2 = {}));
//# sourceMappingURL=Tree.js.map