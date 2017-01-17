/**
 * Created by Gurongjing on 2017/1/17.
 */

function first(name){
    alert(name);
}

function le_ajax(){
    var xhr = new XMLHttpRequest();
    xhr.open("get","https://registry.npm.taobao.org/",true);
    xhr.send(null);
    console.log(xhr.responseText);
}