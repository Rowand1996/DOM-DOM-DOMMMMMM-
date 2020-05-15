
document.addEventListener("DOMContentLoaded", function () {
    let divNum = 0;
    const div1 = document.createElement("div");
    div1.className = "center";
    const button1 = document.createElement("button");
    button1.className = "button1";
    const button1Text = document.createTextNode("Add Square");
    button1.appendChild(button1Text);
    div1.appendChild(button1)
    document.body.appendChild(div1);
    let div3 = document.createElement("div")

    const colors = ["green", "blue", "orange", "purple", "pink"];
    button1.addEventListener("click", function () {
        addSquare();
    });
    function addSquare() {
        ++divNum;
        const div2 = document.createElement("div");
        div2.className = "squares";
        div2.id = divNum;
        div3.appendChild(div2);
        div2.addEventListener("click", function () {
            let randomListNum = getRandomInt(7);
            div2.style.backgroundColor = colors[randomListNum];
        });
        div2.addEventListener("dblclick", function () {
            if (div2.id % 2 === 0) {
                let nextSibling = document.getElementById(div2.id).nextSibling;
                if(nextSibling === null){
                    alert("no square after clicked square to delete!");
                } else{
                    nextSibling.parentNode.removeChild(nextSibling);
                }
            }
            if (div2.id % 2 != 0) {
                let previousSibling = document.getElementById(div2.id).previousSibling;
                if(previousSibling === null){
                    alert("no square before clicked square to delete!");
                } else{
                    previousSibling.parentNode.removeChild(previousSibling);
                }
            }
        });
        document.body.appendChild(div3);
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
});