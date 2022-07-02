// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich
var A11;
(function (A11) {
    let walking;
    class Human {
        position;
        rotation;
        velocity;
        task;
        constructor(_position, _velocity, _task) {
            this.position = _position;
            this.velocity = _velocity;
            this.task = _task;
        }
        draw() {
            // console.log("human");
            let x = this.position.x;
            let y = this.position.y;
            A11.crc2.save();
            A11.crc2.translate(x, y);
            if (walking == true) {
                A11.crc2.save();
                A11.crc2.rotate((Math.sin(A11.frame / 10)) / 8);
            }
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
            A11.crc2.save();
            A11.crc2.stroke(tourist);
            A11.crc2.stroke(head);
            A11.crc2.fillStyle = "#cca07a";
            A11.crc2.fill(head);
            A11.crc2.restore();
            A11.crc2.restore();
            A11.crc2.restore();
        }
        humanisClicked(_hotspot) {
            let hitsize = 150;
            let difference = new A11.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y + 270);
            if ((Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize)) {
                console.log("humanisClicked");
            }
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
        move(_timeslice) {
            let offset = new A11.Vector(this.velocity.x, this.velocity.y);
            switch (this.task) {
                case A11.TASK.TOWEL:
                    walking = false;
                    console.log("towel");
                    break;
                case A11.TASK.TOBOARD:
                    console.log("to board");
                    walking = true;
                    offset.scale(_timeslice);
                    if (this.position.x < 1600) {
                        this.position.addHor(offset);
                        // console.log(this.position.x, this.position.y);
                    }
                    if (this.position.x > 1590 && this.position.y > 600) {
                        this.position.addVert(offset);
                        // console.log("geh hoch");   
                    }
                    if (this.position.y < 600) {
                        this.task = A11.TASK.BOARD;
                    }
                    break;
                case A11.TASK.BOARD:
                    console.log("board");
                    walking = false;
                    break;
                case A11.TASK.TOTOWEL:
                    console.log("to towel");
                    walking = true;
                    offset.scale(_timeslice * (-1));
                    if (this.position.y < 1050) {
                        this.position.addVert(offset);
                        // console.log("geh runter");                        
                    }
                    if (this.position.y > 1040 && this.position.x > 1000) {
                        this.position.addHor(offset);
                        // console.log("geh links");                      
                    }
                    if (this.position.x < 1010) {
                        // console.log("change task to towel");                        
                        this.task = A11.TASK.TOWEL;
                    }
                    break;
            }
        }
    }
    A11.Human = Human;
})(A11 || (A11 = {}));
//# sourceMappingURL=Human.js.map