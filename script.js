window.onload = () => {

    const sel1 = document.getElementById("1");
    const sel2 = document.getElementById("2");
    const sel3 = document.getElementById("3");
    const sel4 = document.getElementById("4");
    const sel5 = document.getElementById("5");
    const submit = document.getElementById("submit");
    let res = 0;

sel1.onclick = () => { 
    res = 1;
}
sel2.onclick = () => {
    res = 2;
}
sel3.onclick = () => {
    res = 3;
}
sel4.onclick = () => {
    res = 4;
}
sel5.onclick = () => {
    res = 5;
}

submit.onclick = () => {
    switch (true) {
        case res === 1:
            console.log("1")
            break;
        case res === 2:
            console.log("2")
            break;
        case res === 3:
            console.log("3")
            break;
        case res === 4:
            console.log("4")
            break;
        case res === 5:
            console.log("5")
            break;
            
        default:
            break;
    }
}
}