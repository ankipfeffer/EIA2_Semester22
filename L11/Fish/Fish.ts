// Aufgabe: A11 Strand Interaktion
// Name: Ann-Kathrin Pfeffer
// Matrikel: 269354
// Datum: 02.07.22
// Quellen: Richard Mukasa, Silvan Woschny, ich

namespace A11 {
    export class Fish extends Movable {

        draw(): void {
            let x: number = this.position.x;
            let y: number = this.position.y;
    
            let rotation: number[] = [0, 25, 50, 75, 100, 120, 125, 145];
            let rotNum: number = Math.floor(Math.random() * (rotation.length - 1) + 1) - 1;
    
            // console.log("fishRotation", rotNum);
    
            let fish: Path2D = new Path2D();
            fish.ellipse(0, 0, 10, 25, Math.PI / 2, 0, 2 * Math.PI);
            fish.moveTo(23, 0);
            fish.lineTo(33, -10);
            fish.lineTo(33, 10);
            fish.closePath();
    
            crc2.save();
            crc2.translate(x, y);
            crc2.rotate(rotation[rotNum]);
    
            crc2.stroke(fish);
    
            crc2.fillStyle = "#e36f39";
            crc2.fill(fish);
    
            crc2.restore();
        }
    }
}