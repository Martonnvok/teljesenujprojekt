const List = [{ nev: "Somogyi András ", tul1: "Szereti a halrudit ", tul2: "Magyar " }
];

$(function () {
    const ARTICLE = $("article table");
    for (let i = 0; i < List.length; i++) {
        ARTICLE[i].innerHTML += "<tr>" + List[i].nev + "</tr";
        ARTICLE[i].innerHTML += "<td>" + + List[i].tul1 +" "+ List[i].tul2 +"</td";

    }

    


});