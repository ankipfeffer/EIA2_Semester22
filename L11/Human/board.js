// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich
var A11;
(function (A11) {
    class Board {
        position;
        rotation;
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            let x = this.position.x;
            let y = this.position.y;
            A11.crc2.save();
            A11.crc2.translate(x, y);
            let board = new Path2D;
            board.ellipse(0, 0, 33, 117, Math.PI / 2, 0, 2 * Math.PI);
            A11.crc2.save();
            A11.crc2.stroke(board);
            A11.crc2.fillStyle = "#918ef5";
            A11.crc2.fill(board);
            A11.crc2.restore();
            A11.crc2.restore();
            console.log("hallo");
        }
    }
    A11.Board = Board;
})(A11 || (A11 = {}));
//# sourceMappingURL=Board.js.map