let lista = [
    { nev: "András", tul1: "halrudi", tul2: "Leage of Legends" },
    { nev: "Cartmen", tul1: "kövér", tul2: "ideges" },
    { nev: "Kyle", tul1: "Zsidó", tul2: "vörös hajú" },
  ];
  
  $(function () {
    const ARTICLEELEMHEAD = $("article table thead tr");
    const ARTICLEELEMBODY = $("article table tbody tr");
    for (let index = 0; index < lista.length; index++) {
      ARTICLEELEMHEAD[0].innerHTML += "<th>"+lista[index].nev+"</th>";
      ARTICLEELEMBODY[0].innerHTML += "<td>" + lista[index].tul1 + "</td>";
      ARTICLEELEMBODY[0].innerHTML += "<td>" + lista[index].tul2 + "</td>";
    }
  });
  
