/*
Aufgabe: A1.1 Random Poem
Name: Ann-Kathrin Pfeffer
Matrikel: 269354
Datum: 24.03.22
Quellen: me
*/
var RandomPoem;
(function (RandomPoem) {
    window.addEventListener("load", function () {
        let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
        let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
        let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
        // console.log(subjects);
        // console.log(predicates);
        // console.log(objects);
        for (let i = subjects.length; i > 0; i--) {
            // console.log(i);  
            console.log(getVerse(subjects, predicates, objects));
        }
        function getVerse(_subject, _predicat, _object) {
            let verse = "";
            let numsub = Math.floor(Math.random() * _subject.length);
            let numpre = Math.floor(Math.random() * _predicat.length);
            let numobj = Math.floor(Math.random() * _object.length);
            verse = _subject.splice(numsub, 1) + " " + _predicat.splice(numpre, 1) + " " + _object.splice(numobj, 1);
            return verse;
        }
        ;
    });
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=script.js.map