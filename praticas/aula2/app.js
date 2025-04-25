let adiciona = () => {
    let cont = document.getElementById("contador");
    cont.innerHTML = +cont.innerHTML + 1;
}

let remove = () => {
    let cont = document.getElementById("contador");
    if(cont.innerHTML > 0){
        cont.innerHTML = parseInt(cont.innerHTML - 1);
    }
}