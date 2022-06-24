// Aufgabe: A9.2 Strand Classes
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 13.06.22
// Quellen: Richard Mukasa, ich
var A10_2;
(function (A10_2) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        addHor(_addend) {
            this.x += _addend.x;
        }
        addAll(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    A10_2.Vector = Vector;
})(A10_2 || (A10_2 = {}));
//# sourceMappingURL=Vector.js.map