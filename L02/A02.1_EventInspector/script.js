var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setinfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let position = _event.target + " ";
        let infoBox = document.querySelector("span");
        infoBox.style.left = (x + 5) + "px";
        infoBox.style.top = (y + 10) + "px";
        infoBox.innerHTML = "x-Position: " + x + "<br>" + "y-Position: " + y + "<br>" + position;
    }
    function logInfo(_event) {
        console.log("Event: ", _event);
        console.log("Event-Type: ", _event.type);
        console.log("Event-Target: ", _event.target);
        console.log("Event-CurrentTarget: ", _event.currentTarget);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=script.js.map