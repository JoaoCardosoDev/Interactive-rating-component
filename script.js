window.onload = () => {

    const sel1 = document.getElementById("1");
    const sel2 = document.getElementById("2");
    const sel3 = document.getElementById("3");
    const sel4 = document.getElementById("4");
    const sel5 = document.getElementById("5");
    const submit = document.getElementById("submit");
    let res = 0;
    let list = [sel1, sel2, sel3, sel4, sel5]

sel1.onclick = () => { 
    res = 1;
    resetBtn(list);
    checked(sel1);
}
sel2.onclick = () => {
    res = 2;
    resetBtn(list);
    checked(sel2);
}
sel3.onclick = () => {
    res = 3;
    resetBtn(list);
    checked(sel3);
}
sel4.onclick = () => {
    res = 4;
    resetBtn(list);
    checked(sel4);
}
sel5.onclick = () => {
    res = 5;
    resetBtn(list);
    checked(sel5);
}

submit.onclick = () => {
    switch (true) {
        case res === 1:
            thankYou(res);
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


function resetBtn(list){
    list.forEach(element => {
        if (element.classList.contains('activeBtn'));
            element.classList.remove('activeBtn');
            element.classList.add('secButton'); 
    });

}
function checked(button) {
    button.classList.remove('secButton')
    button.classList.add('activeBtn')
}

function thankYou(res) {
    let img = document.getElementsByTagName("img");
    let text = document.getElementsByClassName("title");
    let title = document.getElementsByTagName("h1")
    img.src = "images/illustration-thank-you";
    text.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    title.innerText = "Thank you!";
    console.log("smth wrong")


}