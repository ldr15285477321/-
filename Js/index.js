(function(){

    var a = [1,2,3,4,5]
    console.log(a)

    var d = {
        name:"Verning Aulence",
        gender:"男",
        e_mail:"1908620@qq.com",
        age:22,
        describe:"Java开发工程师"
    }
    console.log(d)

    var loginCount = '47' + '53';
    console.log(loginCount)

    var userName = "liangDarong";
    console.log(userName)

    var hobby = ["运动","电脑","看书","旅游"];
    console.log(hobby)
    console.log(hobby[3])

    var isStr = "apple"
    console.log(typeof(isStr))

    var skill = {
        HTML:{
            doctype:"文件类型",
            html:"HTML根标签",
            head:"HTML信息标签",
            body:"HTML内容标签",
        },
        CSS:{
            charset:"编码类型",
            selector:"选择器",
            attribute:"属性名",
            value:"属性名",
        }
    }
    console.log(skill)
    console.log(skill.HTML.head)
    var t = 9;
    var y = 10;
    console.log(t>y)

    var testFUN = true;
    testFUN ? alert("颜值已通过") : alert("未登录");

    var fun = function(){
        console.log("交电话费拉斯科")
    }
    fun()


    if(testFUN){
        console.log("成功登陆")
    }
    
    var a1 = 1,a2 = 2;
    if(a1>a2 && a1<a2){
        console.log("成功登陆")
    }
    else if(a1>a2 || a1<a2){
        console.log("登录失败")
    }else{
        console.log("未登录")
    }

var header = document.getElementById("header");
console.log(header)

var _content = document.querySelector(".right");
console.log(_content)
_content.style.cssText = "width:100%;height:80px;background-color:blue;";

var right = document.getElementsByClassName("right");
console.log(right)

var left = document.querySelector(".left");
console.log(left)





})()
function altertInfo(){
    console.log("程序设计")
    alert("你好，静静，welcome！")
}
altertInfo()
var box = document.querySelector(".box")
function clickFun(){
    box.classList.add("show");
}
function clickFunHidden(){
    box.classList.remove("show");
}
function showkFunHidden(){
    box.classList.toggle("show");
}
