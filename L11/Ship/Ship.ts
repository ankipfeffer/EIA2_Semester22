// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich

namespace A11 {
    export class Ship extends Movable {

        draw(): void {
            // console.log("Ship draw");
            let x: number = this.position.x;
            let y: number = this.position.y;

            let ship: Path2D = new Path2D();
            ship.arc(0, 0, 84, 0, 1 * Math.PI);
            ship.lineTo(84, 0);

            let flag: Path2D = new Path2D();
            flag.moveTo(0, 0);
            flag.lineTo(0, -93);
            flag.lineTo(67, -54);
            flag.lineTo(0, -15);

            crc2.save();
            crc2.translate(x, y);

            crc2.stroke(ship);
            crc2.stroke(flag);

            crc2.fillStyle = "#85492c";
            crc2.fill(ship);

            crc2.fillStyle = "#d6463e";
            crc2.fill(flag);

            crc2.restore();
        }

        shipisClicked(_hotspot: Vector): boolean { 
            let hitsize: number = 120;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y + 50);
            // console.log(this.position.y, _hotspot.y);
            
            if ((Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize)) {
                console.log("shipisClicked");
            }
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
}