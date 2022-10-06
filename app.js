let adaugaElemente = document.querySelector(".button")

let selectieElemente = document.querySelector(".table-body")
let obiectSelectat = 0;
let interChange ="";

let stergereElemente = document.querySelector(".delete");

let tip = document.querySelector(".tip")
let metri = document.querySelector(".metri")
let camere = document.querySelector(".camere")
let an = document.querySelector(".an")
let pret = document.querySelector(".pret")



adaugaElemente.addEventListener("click", () => {


    let raspuns = getElement();

    if (raspuns.type != undefined) {
        houses.push(raspuns);
    } else {
        for (i=0;i<raspuns.length;i++){
            alert(raspuns[i]);
        }
    }

    populateTable(houses);

    resetRows();
})


selectieElemente.addEventListener("click", (e) => {

let obj = e.target;

    if(obj.classList.contains("mark")) {

        if(interChange !== ""){
            interChange.classList.remove("selected");
        }

        obj.classList.add("selected");
        interChange = obj;
        obiectSelectat= obj.textContent;
    }

    let newPlace = getHouseByMeters(houses,obiectSelectat);

    tip.value = newPlace.type;
    metri.value = newPlace.meter;
    camere.value = newPlace.rooms;
    an.value=newPlace.year;
    pret.value=newPlace.price;

})


stergereElemente.addEventListener("click", () => {

    houses = deleteElements (houses,obiectSelectat);

    populateTable(houses);

    resetRows();
})

populateTable(houses);