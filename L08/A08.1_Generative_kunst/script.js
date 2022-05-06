var A08_1;
(function (A08_1) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        // crc2.fillStyle = "hsla(273, 79%, 86%, 1)";
        crc2.fillStyle = "hsla(0, 0%, 0%, 1)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        drawCircles({ x: 60, y: 70 }, { x: 150, y: 80 });
        drawLines({ x: 0, y: 920 }, 800, 770);
        drawLines({ x: 0, y: 900 }, 800, 770);
        drawLines({ x: 0, y: 880 }, 800, 770);
        drawLines({ x: 0, y: 860 }, 800, 770);
        drawRectangles(20);
        drawRectangles(40);
        drawRectangles(50);
        drawRectangles(80);
        drawRectangles(70);
    }
    function drawCircles(_position, _size) {
        console.log("circles", _position);
        let nCirclesmin = 5;
        let nCirclesmax = 15;
        let nCircles = Math.floor(Math.random() * (nCirclesmax - nCirclesmin) + nCirclesmin);
        // let r1min: number = 3;
        // let r1max: 8;
        // let r1: number = Math.floor(Math.random() * (r1max - r1min) + r1min);
        // r1 funktioniert mit random nicht, bei r2 funktionierts aber
        let r1 = 5;
        console.log("r1", r1);
        let r2min = 15;
        let r2max = 35;
        let r2 = Math.floor(Math.random() * (r2max - r2min) + r2min);
        console.log("r2", r2);
        let circles = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        console.log("nCircles", nCircles);
        circles.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
        gradient.addColorStop(1, "HSLA(0, 0%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nCircles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(circles);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawLines(_position, _min, _max) {
        let stepMin = 5;
        let stepMax = 15;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() + (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.strokeStyle = "HSLA(0, 0%, 100%, 1)";
        crc2.stroke();
        crc2.restore();
    }
    function drawRectangles(_y) {
        let start = 300;
        let widthmin = 200;
        let widthmax = 300;
        let heightmin = 500;
        let heightmax;
        crc2.save();
        let x = Math.floor(Math.random() * (widthmax - widthmin) + widthmin);
        // let y: number = Math.floor(Math.random() * (heightmax - heightmin) + heightmin);
        // let y: number = heightmin + Math.random() + (heightmax - heightmin);
        // y funktioniert mit random nicht, bei x funktionierts aber
        console.log("x", x);
        console.log("y", _y);
        crc2.beginPath();
        crc2.moveTo(start, 0);
        crc2.lineTo(x, 0);
        crc2.lineTo(x, _y);
        crc2.lineTo(start, _y);
        crc2.closePath();
        crc2.strokeStyle = "HSLA(0, 0%, 100%, 1)";
        crc2.stroke();
    }
})(A08_1 || (A08_1 = {}));
//# sourceMappingURL=script.js.map