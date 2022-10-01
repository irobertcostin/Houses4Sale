let adaugaElemente = document.querySelector(".button")

let selectieElemente = document.querySelector(".table-body")
let obiectSelectat = 0;
let interChange ="";

let stergereElemente = document.querySelector(".delete");

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

})


stergereElemente.addEventListener("click", () => {

    houses = deleteElements (houses,obiectSelectat);

    populateTable(houses);
})



populateTable(houses);