// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich

namespace A11 {
    let walking: boolean;

    export class Human {
        position: Vector;
        rotation: number;
        velocity: Vector;
        task: TASK;
  
        constructor(_position: Vector, _velocity: Vector, _task: TASK) {
            this.position = _position;
            this.velocity = _velocity;
            this.task = _task;
        }

        draw(): void {
            // console.log("human");
            let x: number = this.position.x;
            let y: number = this.position.y;
            crc2.save();
            crc2.translate(x, y);

            if (walking == true) {
                crc2.save();
                crc2.rotate((Math.sin(frame / 10)) / 8);
            }

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
            crc2.restore();

            crc2.restore(); 
        }

        humanisClicked(_hotspot: Vector): boolean {
            let hitsize: number = 150;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y + 270);
            if ((Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize)) {
                console.log("humanisClicked");
                
            }
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);

            switch (this.task) {
                case TASK.TOWEL:
                    walking = false;
                    console.log("towel");
                    break;
                case TASK.TOBOARD:
                    console.log("to board");
                    walking = true;                 
                    offset.scale(_timeslice);
                    if (this.position.x < 1600) {
                        this.position.addHor(offset);
                        // console.log(this.position.x, this.position.y);
                    }
                    if (this.position.x > 1590  && this.position.y > 600) { 
                        this.position.addVert(offset);
                        // console.log("geh hoch");   
                    }
                    if (this.position.y < 600) {
                        this.task = TASK.BOARD;
                    }                    
                    break;
                case TASK.BOARD:
                    console.log("board");
                    walking = false;
                    break;
                case TASK.TOTOWEL:
                    console.log("to towel");
                    walking = true;
                    offset.scale(_timeslice * (-1));
                    if (this.position.y < 1050) {
                        this.position.addVert(offset);
                        // console.log("geh runter");                        
                    }                    
                    if (this.position.y > 1040 && this.position.x > 1000 ) {
                        this.position.addHor(offset);
                        // console.log("geh links");                      
                    }
                    if (this.position.x < 1010) {
                        // console.log("change task to towel");                        
                        this.task = TASK.TOWEL;
                    }
                    break;
            }   
        }
    }
}