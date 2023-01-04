function copy(id){
    var range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
function fill_invite(id){
    document.getElementById("email").innerHTML = document.getElementById("mail").value;
    document.getElementById("name").innerHTML = document.getElementById("fname").value;
    document.getElementById("subject").innerHTML = "Studying English at Atlantic Canada Language Academy";
    copy("inv");
}
function fill_result(){
    document.getElementById("email2").innerHTML = document.getElementById("mail2").value;
    document.getElementById("name2").innerHTML = document.getElementById("fname2").value;
    document.getElementById("grade").innerHTML = document.getElementById("fgrade").value;
    document.getElementById("subject2").innerHTML = "RE: ACLA Free Enlish Language Test Result";
    copy("result");
}

//Open Page

function openPage(tabsection) {
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    var newElement = document.getElementById(tabsection);
    newElement.style.display = "block";
    newElement.classList.add("active");
}

// London is active by defult
// var defaultElement = document.getElementById("examInvite");
// defaultElement.style.display = "block";
// defaultElement.classList.add("active");

document.getElementById("examTab").addEventListener("click",openPage('examInvite'));
document.getElementById("testTab").addEventListener("click",openPage('testResult'));


// Script for tabs
function openTab(tabsection) {
    // Declare all variables
    var i, tabcontent, tablinks;
    

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabsection).style.display = "block";
    event.currentTarget.className += " active";
}
// window.onload(openTab('examInvite'));
// document.getElementById("examTab").addEventListener("click",openTab('examInvite'));
// document.getElementById("testTab").addEventListener("click",openTab('testResult'));


// Stay Unchanged
document.getElementById("fillInvite").addEventListener("click",fill_invite());
document.getElementById("fillResult").addEventListener("click",fill_result());