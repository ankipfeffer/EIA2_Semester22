/*
Aufgabe: A3 Memory Settings
Name: Ann-Kathrin Pfeffer
Matrikel: 269354
Datum: 18.04.22
Quellen: Richard Mukasa, Anja Weber, ich
*/
var memorySettings3;
(function (memorySettings3) {
    window.addEventListener("load", hndLoad);
    let fontColorGlobal;
    let valueArray = [];
    let cardCounter = 0;
    let timeStart;
    let timeEnd;
    let y = 1;
    let card1;
    let card2;
    let cardHidden1;
    let cardHidden2;
    let twoCards = false;
    function hndLoad() {
        document.querySelector("button").addEventListener("click", bttnClick);
        document.querySelector("button").addEventListener("touchstart", bttnClick);
    }
    function bttnClick() {
        let wrapper = document.getElementById("wrapper");
        let formData = new FormData(document.forms[0]);
        for (let entry of formData.entries())
            console.log(entry);
        let cardQuantity = parseInt(formData.get("cardQuantity").toString());
        console.log(cardQuantity);
        let cardSize = parseInt(formData.get("cardSize").toString());
        console.log(cardSize);
        let bgrColor = formData.get("bgrColor").toString();
        console.log(bgrColor);
        let cardColor = formData.get("cardColor").toString();
        console.log(cardColor);
        let fontColor = formData.get("fontColor").toString();
        console.log(fontColor);
        fontColorGlobal = fontColor;
        let fontSelection = formData.get("fontSelection").toString();
        console.log(fontSelection);
        wrapper.removeChild(document.querySelector("form"));
        wrapper.removeChild(document.querySelector("button"));
        wrapper.style.backgroundColor = bgrColor;
        document.body.style.color = fontColor;
        document.body.style.fontFamily = fontSelection;
        createValues(cardQuantity);
        createCards(cardQuantity, cardSize, cardColor);
    }
    function createValues(_cardQuantity) {
        for (let i = 1; i <= _cardQuantity; i++) {
            valueArray.push(i);
            valueArray.push(i);
        }
        shuffle(valueArray);
    }
    // Shuffle-Funktion aus Code vom letzten Semester kopiert
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    function createCards(_cardQuantity, _cardSize, _cardColor) {
        let wrapper = document.getElementById("wrapper");
        for (let x = 0; x < _cardQuantity * 2; x++) {
            let cardDiv = document.createElement("div");
            cardCounter++;
            console.log(cardCounter);
            wrapper.appendChild(cardDiv);
            cardDiv.classList.add("card");
            cardDiv.style.width = _cardSize / 2 + "%";
            cardDiv.style.height = _cardSize / 2 + "vh";
            cardDiv.style.backgroundColor = _cardColor;
            cardDiv.style.color = _cardColor;
            console.log(cardDiv);
            cardDiv.innerHTML = `${valueArray[x]}`;
            console.log(valueArray);
            cardDiv.addEventListener("click", function () {
                cardClick(cardDiv);
            });
            cardDiv.addEventListener("touchstart", function () {
                cardClick(cardDiv);
            });
        }
        timeStart = Date.now();
        twoCards = true;
    }
    function cardClick(_card) {
        console.log(y);
        if (twoCards == true) {
            if (_card.style.color == _card.style.backgroundColor && y == 1) {
                _card.style.color = fontColorGlobal;
                card1 = _card;
                console.log(card1);
                y++;
            }
            else if (_card.style.color == _card.style.backgroundColor && y == 2) {
                _card.style.color = fontColorGlobal;
                card2 = _card;
                console.log(card1);
                twoCards = false;
                this.window.setTimeout(valueCheck, 2000);
            }
            else if (_card.style.color == fontColorGlobal) {
                return;
            }
        }
    }
    function valueCheck() {
        if (card1.innerText == card2.innerText) {
            card1.classList.add("hidden");
            cardHidden1 = card1;
            cardCounter--;
            card2.classList.add("hidden");
            cardHidden2 = card2;
            cardCounter--;
            console.log(cardCounter);
            if (cardCounter == 0) {
                timeEnd = Date.now();
                let timePast = timeEnd - timeStart;
                let minutes = Math.floor(timePast / 60000);
                let seconds = Math.floor(timePast % 60000 / 1000);
                alert("Spiel fertig! Zeit: " + minutes + "min " + seconds + "sek");
            }
        }
        else if (card1 != card2) {
            card1.style.color = card1.style.backgroundColor;
            card2.style.color = card2.style.backgroundColor;
        }
        twoCards = true;
        y = 1;
    }
})(memorySettings3 || (memorySettings3 = {}));
//# sourceMappingURL=script3.js.map