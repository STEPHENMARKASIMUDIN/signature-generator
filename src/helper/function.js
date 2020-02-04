export function copySignature(el) {
    var aux = document.createElement("div");
    aux.setAttribute("contentEditable", true);
    aux.innerHTML = document.getElementById("hiddenPreview").innerHTML;
    aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)");
    document.body.appendChild(aux);
    aux.focus();
    document.execCommand("copy");
    document.body.removeChild(aux);

    document.getElementById("hiddenMsg").style.display = 'block';

    fadeout();

}
//fadeout hidden message

function fadeout() {
    setTimeout(() => {
        document.getElementById("hiddenMsg").style.display = 'none';
    }, 2000)
    window.scrollBy(0, -3000);;
}

export function isBranchUser(event) {
    if (event.target.name === 'hoRadio') {
        document.getElementById("divisionNameID").style.display = 'block';
        document.getElementById("divisionAddressID").style.display = 'block';
        document.getElementById("branchAddressID").style.display = 'none';
        document.getElementById("branchNameID").style.display = 'none';
        document.getElementById("us-phone").style.display = 'none';
        document.getElementById("phone").style.display = 'block';
    } else {
        if (event.target.name === 'usbranchRadio') {
            document.getElementById("us-phone").style.display = 'block';
            document.getElementById("phone").style.display = 'none';
        } else {
            document.getElementById("phone").style.display = 'block';
            document.getElementById("us-phone").style.display = 'none';
        }
        document.getElementById("branchAddressID").style.display = 'block';
        document.getElementById("branchNameID").style.display = 'block';

        document.getElementById("divisionNameID").style.display = 'none';
        document.getElementById("divisionAddressID").style.display = 'none';
    }
}
export function ScrollTop() {

    window.scrollBy(0, -3000);
}
// var body = document.body, range, sel;
// if (document.createRange && window.getSelection) {
//     range = document.createRange();
//     sel = window.getSelection();
//     sel.removeAllRanges();
//     try {
//         range.selectNodeContents(el);
//         sel.addRange(range);
//     } catch (e) {
//         range.selectNode(el);
//         sel.addRange(range);
//     }
// } else if (body.createTextRange) {
//     range = body.createTextRange();
//     range.moveToElementText(el);
//     range.select();
//     range.execCommand("Copy");
// }