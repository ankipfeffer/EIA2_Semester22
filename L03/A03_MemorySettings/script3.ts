/*
Aufgabe: A3 Memory Settings
Name: Ann-Kathrin Pfeffer
Matrikel: 269354
Datum: 18.04.22
Quellen: Richard Mukasa, Anja Weber, ich
*/

namespace memorySettings3 {
    window.addEventListener("load", hndLoad);

    let fontColorGlobal: string;
    let valueArray: number[] = [];
    let cardCounter: number = 0;
    let timeStart: number;
    let timeEnd: number;
    let y: number = 1;
    let card1: HTMLDivElement;
    let card2: HTMLDivElement;
    let cardHidden1: HTMLDivElement;
    let cardHidden2: HTMLDivElement;
    let twoCards: boolean = false;


    function hndLoad(): void {
        document.querySelector("button").addEventListener("click", bttnClick);
        document.querySelector("button").addEventListener("touchstart", bttnClick);
    }

    function bttnClick (): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData.entries())
        console.log(entry);

        let cardQuantity: number = parseInt(formData.get("cardQuantity").toString());
        console.log(cardQuantity);

        let cardSize: number = parseInt(formData.get("cardSize").toString());
        console.log(cardSize);

        let bgrColor: string = formData.get("bgrColor").toString();
        console.log(bgrColor);

        let cardColor: string = formData.get("cardColor").toString();
        console.log(cardColor);

        let fontColor: string = formData.get("fontColor").toString();
        console.log(fontColor);
        fontColorGlobal = fontColor;

        let fontSelection: string = formData.get("fontSelection").toString();
        console.log(fontSelection);

        wrapper.removeChild(document.querySelector("form"));
        wrapper.removeChild(document.querySelector("button"));
        wrapper.style.backgroundColor = bgrColor;
        document.body.style.color = fontColor;
        document.body.style.fontFamily = fontSelection;

        createValues(cardQuantity);

        createCards(cardQuantity, cardSize, cardColor);    
    }


    function createValues (_cardQuantity: number): void {
        for (let i: number = 1; i <= _cardQuantity; i++) {
            valueArray.push(i);
            valueArray.push(i);
        }
        shuffle(valueArray);
    }


    // Shuffle-Funktion aus Code vom letzten Semester kopiert
    function shuffle(a: number[]): number[] {
        var j: number, x: number, i: number;
        for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
        }
        return a;
    }


    function createCards(_cardQuantity: number, _cardSize: number, _cardColor: string): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");       

        for (let x: number = 0; x < _cardQuantity * 2; x++) {
            let cardDiv: HTMLDivElement = document.createElement("div");
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
            
            cardDiv.addEventListener("click", function(): void {
                cardClick(cardDiv);
            });  
            cardDiv.addEventListener("touchstart", function(): void {
                cardClick(cardDiv);
            });
        }

        timeStart = Date.now();
        twoCards = true;
    }


    function cardClick(_card: HTMLDivElement): void {
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


    function valueCheck(): void {
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
                let timePast: number = timeEnd - timeStart;
                let minutes: number = Math.floor(timePast / 60000);
                let seconds: number = Math.floor(timePast % 60000 / 1000);
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

}