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

submit.onclick = () => {thankYou(res);};

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
    let img = document.querySelector("img");
    let text = document.querySelector("p");
    let title = document.querySelector("h1");
    let resultTY = document.getElementsByTagName("span")[0];
    let imgDiv = document.getElementsByClassName("star")[0];
    let numbers = document.getElementsByClassName("numbers")[0];
    let submit = document.getElementsByClassName("submit")[0];
    numbers.style.display = "none"
    submit.style.display = "none"

    resultTY.classList.add("resultTY")
    imgDiv.classList.replace("star", "thankYouImg");
    img.classList.replace("imgStar", "imgTY");
    text.style.textAlign = "center"
    text.style.margin = "4px"
    title.style.display = "flex"
    title.style.justifyContent = "center"
    resultTY.innerText = `You selected ${res} out of 5`
    img.src = "images/illustration-thank-you.svg";
    text.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    title.innerText = "Thank you!";
}
