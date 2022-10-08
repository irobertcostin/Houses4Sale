function createRow(obj) {

    let text = `
    <tr>
        <td>${obj.type}</td>
        <td class="mark">${obj.meter}</td>
        <td>${obj.rooms}</td>
        <td>${obj.year}</td>
        <td>${obj.price}</td>
    </tr>
    `

    return text;
}


function populateTable (arr) {

    let text = "";

    for (i=0;i<arr.length;i++){

        text += createRow(arr[i]);

    }

    let newRow = document.querySelector(".table-body");
    newRow.innerHTML = text;

}


function getElement () {




    let locuinta = {
        type:tip.value,
        meter:metri.value,
        rooms:camere.value,
        year:an.value,
        price:pret.value
    }

    if (locuinta.type !== "" && locuinta.meter !== "" && locuinta.rooms !== "" && 
    locuinta.year !== "" && locuinta.price !== "" ) {
        return locuinta;
    } else {

        let erori = [];

        if(locuinta.type === "") {
            erori.push("Invalid input");
        }

        if(locuinta.meter === "") {
            erori.push("Invalid meter");
        }

        if(locuinta.rooms === "") {
            erori.push("Invalid rooms");
        }

        if(locuinta.year === "") {
            erori.push("Invalid year");
        }

        if(locuinta.price === "") {
            erori.push("Invalid price");
        }

        return erori;
    }

}


function deleteElements (arr,parametru) {

    let nou = [];
    
    for (i=0;i<arr.length;i++) {

        if(arr[i].meter!=parametru) {
            nou.push(arr[i]);
        }
    }
    return nou;

}


function getHouseByMeters (arr, metri) {

    let x = "";

    for (i=0;i<arr.length;i++){

        if(arr[i].meter == metri) {
            x = arr[i];
        }

    }
    return x;

}

function resetRows () {
    tip.value="";
    metri.value="";
    camere.value="";
    an.value="";
    pret.value="";
}

function updateHouse (arr,metri) {

    arr = deleteElements(arr,metri.meter);
    arr.push(metri);
    return arr;


}