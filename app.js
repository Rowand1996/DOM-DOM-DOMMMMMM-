
document.addEventListener("DOMContentLoaded", function () {
    const div1 = document.createElement("div");
    div1.className = "center";
    const button1 = document.createElement("button");
    button1.className = "button1";
    const button1Text = document.createTextNode("Add Square");
    button1.appendChild(button1Text);
    div1.appendChild(button1)
    document.body.appendChild(div1);
});