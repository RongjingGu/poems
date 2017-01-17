/**
 * Created by Gurongjing on 2017/1/17.
 */

function le_ajax(){
    var xhr = new XMLHttpRequest();
    xhr.open("get","https://registry.npm.taobao.org/",true);
    xhr.send(null);
    console.log(xhr.responseText);
}

function le_tang(){
    var tli = document.getElementById("tangshi");
    tli.onclick=function(){
        window.location.href="a.html";
    }
}