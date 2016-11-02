/**
 * Created by chenjiaqi on 16/11/2.
 */
var pictures = document.getElementsByClassName("picture");
var btns = document.getElementsByClassName("btn");
var index = 0;
timer = null;
function show(a) {/*控制显示的函数,参数为显示的内容索引值*/
    /*设置所有的图片透明度为零,再把当前索引对应的图片显示出来*/
    for (var i=0,l=pictures.length;i<l;i++){
        pictures[i].className = "picture"
    }
    pictures[a].className = "picture currentPicture"
    /*同时,同理设置按钮的样式*/
    for (var i=0,l=btns.length;i<l;i++){
        btns[i].className = "btn";
    }
    btns[a].className = "btn currentBtn";
}
function start(){
    clearInterval(timer);
    timer = setInterval(function () {
        show(index);
        if(index == pictures.length-1){
            index = 0;
        }else{
            index++;
        }
    },1200);
}
function stop() {
    clearInterval(timer);
}

//接下来给每个按钮添加事件
window.onload = function () {
    start();
    var box = document.getElementById("box");
    box.onmouseover = stop;
    box.onmouseout = start;
    for(var i=0,l=btns.length;i<l;i++){
        btns[i].index = i;
        btns[i].onmouseover = function () {
            show(this.index);
        }
    }

}



