/*
Aufgabe: A2.1 EventInspector
Name: Ann-Kathrin Pfeffer
Matrikel: 269354
Datum: 02.04.22
Quellen: me
*/

namespace EventInspector {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }

    function setinfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let position: string = _event.target + " ";
        
        let infoBox: HTMLElement = document.querySelector("span");
        infoBox.style.left = (x + 5) + "px";
        infoBox.style.top = (y + 10) + "px";
        infoBox.innerHTML = "x-Position: " + x + "<br>" + "y-Position: " + y + "<br>" + position;
    } 

    function logInfo(_event: Event): void {
        console.log("Event: ", _event);
        console.log("Event-Type: ", _event.type);
        console.log("Event-Target: ", _event.target);
        console.log("Event-CurrentTarget: ", _event.currentTarget);
    }        


    
}