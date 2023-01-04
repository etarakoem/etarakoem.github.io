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

// Script for tabs
function openTab(evt, tabsection) {
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
    evt.currentTarget.className += " active";
}

document.getElementById("examTab").addEventListener("click",openTab(event, 'examInvite'));
document.getElementById("testTab").addEventListener("click",openTab(event, 'testResult'));
document.getElementById("fillInvite").addEventListener("click",fill_invite());
document.getElementById("fillResult").addEventListener("click",fill_result());