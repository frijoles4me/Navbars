function displayHome() {
    var text = document.getElementById("textField");
    // text.style.display = "block"; add to div[style="display:none;"] to work
    text.innerHTML="<div class='container text-center'><div class='row'><div class='col col1'>Column</div><div class='col col2'>Column</div><div class='col col3'>Column</div></div></div>";
}
function displayService() {
    var text = document.getElementById("textField");
    // text.style.display = "block"; add to div[style="display:none;"] to work
    text.innerHTML="<div>this in innerHTML Service Page</div>"

}

function displayContacts() {
    var text = document.getElementById("textField");
    // text.style.display = "block"; add to div[style="display:none;"] to work
    text.innerHTML="<div>this in innerHTML Contacts Page</div>"

}

function displayAbout() {
    var text = document.getElementById("textField");
    // text.style.display = "block"; add to div[style="display:none;"] to work
    text.innerHTML="<div>this in innerHTML About Page</div>"

}