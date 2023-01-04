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

function change_tab(id)
 {
    document.getElementById("page_content").innerHTML=document.getElementById(id+"_desc").innerHTML;
    document.getElementById("page1").className="notselected";
    document.getElementById("page2").className="notselected";
    document.getElementById(id).className="selected";
 }

 window.onload= change_tab("page1");