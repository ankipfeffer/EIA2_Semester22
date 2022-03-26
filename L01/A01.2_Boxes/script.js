/*
Aufgabe: A1.2 Boxes
Name: Ann-Kathrin Pfeffer
Matrikel: 269354
Datum: 26.03.22
Quellen: me
*/
var Boxes;
(function (Boxes) {
    /* Eventlistener lässt die html Seite laden bevor das Skript geladen wird,
     sonst würde das Skript auf eine nicht geladene html Seite zuzugreifen wollen */
    window.addEventListener("load", function () {
        let n = 5;
        let color;
        let x = 0;
        let y = 0;
        for (let i = 0; i < n; i++) {
            y += (i == 2) ? 20 : 50;
            x = (x + 170) % 400;
            switch (i) {
                case 0:
                    color = "#ff0000";
                    break;
                case 1:
                case 4:
                    color = "#00ff00";
                    break;
                case 3:
                    continue;
                default:
                    color = "#0000ff";
            }
            for (let size of ["big", "medium", "small"]) {
                createBox(color, x, y, size);
                if (i == 4)
                    break;
            }
        }
        function createBox(_color, _x, _y, _size) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.classList.add(_size);
            div.style.backgroundColor = _color;
            div.style.left = _x + "px";
            div.style.top = _y + "px";
        }
    });
})(Boxes || (Boxes = {}));
//# sourceMappingURL=script.js.map