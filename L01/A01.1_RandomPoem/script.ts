/*
Aufgabe: A1.1 Random Poem
Name: Ann-Kathrin Pfeffer
Matrikel: 269354
Datum: 24.03.22
Quellen: me
*/

namespace RandomPoem {
    window.addEventListener("load", function (): void {

        let subjects: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];

        let predicates: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];

        let objects: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

        // console.log(subjects);
        // console.log(predicates);
        // console.log(objects);

        for (let i: number = subjects.length; i > 0; i--) {
            // console.log(i);  
            console.log(getVerse(subjects, predicates, objects));
        }

        function getVerse (_subject: string [], _predicat: string [], _object: string []): string {
            let verse: string = "";
            let numsub: number = Math.floor(Math.random() * _subject.length);
            let numpre: number = Math.floor(Math.random() * _predicat.length);
            let numobj: number = Math.floor(Math.random() * _object.length);
            verse = _subject.splice(numsub, 1) + " " + _predicat.splice(numpre, 1) + " " + _object.splice(numobj, 1);
            return verse;
        };


       

    });
}



