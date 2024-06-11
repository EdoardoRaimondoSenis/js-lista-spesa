let lista = [
    'Acqua',
    'Pane',
    'Latte',
    'Ammorbidente',
    'Dentifricio',
    'Caramelle balsamiche',
];

const containerlista = document.querySelector(".prisultato");

let i = 0;

while (lista[i]) {
    let puntino = lista[i];
    containerlista.append(puntolista);
    let puntolista = document.createElement("li");
    puntolista.innerHTML = puntino;
    i++
}













