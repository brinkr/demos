function u(elem){return document.getElementById(elem);}
/***任务一.树形菜单***/
/*定义事件绑定函数*/
/*
function addEvent(obj,type,handle){
    try{  // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type,handle,false);
    }catch(e){
        try{  // IE8.0及其以下版本
            obj.attachEvent('on' + type,handle);
        }catch(e){  // 早期浏览器
            obj['on' + type] = handle;
        }
    }
}

//document.getElementById('tree-menu').style.display='none';
//document.getElementById('book_focus').style.display=
addEvent(u('mydangdang'),'mouseover',function(){u('tree-menu').style.display='block';});
addEvent(u('mydangdang'),'mouseout',function(){u('tree-menu').style.display='none';});
//alert(u('tree-menu'));
*/
/***任务一.树形菜单***/
/**见header.html**/
/*
function showMenu(){document.header.document.getElementById('tree-menu').style.display='block';}
function hideMenu(){document.header.document.getElementById('tree-menu').style.display='none';}
*/
/***任务二.浮动广告***/
var oAD,adTop,adLeft;
function fetchPosition(){
	oAD=document.getElementById("flowing-ad");
	if(oAD.currentStyle){//for IE
		adTop=parseInt(oAD.currentStyle.top);
		adLeft=parseInt(oAD.currnentStyle.left);	
	}else{//not IE
		adTop=parseInt(document.defaultView.getComputedStyle(oAD,null).top);
		adLeft=parseInt(document.defaultView.getComputedStyle(oAD,null).left);
	}
		//window.open("winAdv.html","_blank","width=750px,height=490px,left=100px");s
		
}
function moving(){
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
	oAD.style.top=adTop+parseInt(scrollTop)+"px";
	oAD.style.left=adLeft+parseInt(scrollLeft)+"px";
}
window.onload=fetchPosition;
window.onscroll=moving;
function closeAd(){u("flowing-ad").style.display='none';}
/***任务三.广告轮播***/
var i=-1;
var imgsrc=['images/dd_scroll_1.jpg','images/dd_scroll_2.jpg','images/dd_scroll_3.jpg','images/dd_scroll_4.jpg','images/dd_scroll_5.jpg','images/dd_scroll_6.jpg'];
var numbar=u('scroll-slider').childNodes;var scrollTimer,delayTimer;
function scrollImg(){
	if(i<5) i++;else i=0;
	u("dd_scroll").src=imgsrc[i];	
	//console.log(numbar);
	for(var j=0;j<6;j++){numbar[j].style.backgroundColor='#F2F2F3';numbar[j].style.color="#000"}
	numbar[i].style.backgroundColor='#FF9469';
	numbar[i].style.color='#FFF';
	//document.getElementById("scrollingimg").src=
	scrollTimer=setTimeout(scrollImg,2000);	
	clearTimeout(delayTimer);
}scrollImg();
function pauseScrolling(){clearTimeout(scrollTimer);}
function continueScrolling(){/*clearTimeout(scrollTimer);*/delayTimer=setTimeout(scrollImg,2000);}
function scrollToPic(obj){
	var n=parseInt(obj.innerHTML)-1;i=n;
	u("dd_scroll").src=imgsrc[n];
	for(var j=0;j<6;j++){numbar[j].style.backgroundColor='#F2F2F3';numbar[j].style.color="#000"}
	numbar[n].style.backgroundColor='#FF9469';
	numbar[n].style.color='#FFF';
}


/***任务四.弹出窗口***/
window.open("winAdv.html","_blank","width=750px,height=490px,left=100px");
/***任务五.切换选项卡***/
//var history=u('book_history');
var v_history=document.getElementById('v_book_history');
var health=document.getElementById('v_book_health');
var youth=document.getElementById('v_book_youth');
var novel=document.getElementById('v_book_novel');
//var health=u('book_health');
//var youth=u('book_youth');
//var novel=u('book_novel');
console.log(v_history);//变量名不能用history
function showHistory(){
	//alert('history');
	
	health.style.display='none';
	youth.style.display='none';
	novel.style.display='none';	
	v_history.style.display='block';
}
function showHealth(){
	v_history.style.display='none';
	
	youth.style.display='none';
	novel.style.display='none';	
	health.style.display='block';
}
function showYouth(){
	v_history.style.display='none';
	health.style.display='none';
	
	novel.style.display='none';	
	youth.style.display='block';
}
function showNovel(){
	v_history.style.display='none';
	health.style.display='none';
	youth.style.display='none';
	novel.style.display='block';	
}
/***任务六.滚动新闻条***/
var speed=40
var demo=document.getElementById("demo");
var demo2=document.getElementById("demo2");
var demo1=document.getElementById("demo1");
demo2.innerHTML=demo1.innerHTML
function Marquee(){
if(demo2.offsetTop-demo.scrollTop<=0)
demo.scrollTop-=demo1.offsetHeight
else{
demo.scrollTop++
}
}
var MyMar=setInterval(Marquee,speed)
demo.onmouseover=function() {clearInterval(MyMar)}
demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
/***任务七.展示图书分类目录***/
	var bookSort=['中国当代小说(13880)','中国近现代小说(640)','中国古典小说(1547)','四大名著(696)','港澳台小说(838)','外国小说(5119)','侦探/悬疑/推理(2519)','惊悚/恐怖(798)','魔幻(369)','科幻(513)','武侠(574)','军事(726)'];
     bookList=document.getElementById("product_catList_class");
	 var bookTitle="";
     for(var i=0;i<bookSort.length;i++){
         bookTitle+="<li> ·<a href='#' class='blue'>"+bookSort[i]+"</a></li>";
         
        }   
  bookList.innerHTML="<ul>"+bookTitle+"</ul>";



/***任务八.商品列表的显示和隐藏***/
function swtichVisibility(){
	if(u('shopping_commend_sort').style.display=='block'){
		u('shopping_commend_sort').style.display='none';
		u('shopping_commend_arrow').src='images/shopping_arrow_down.gif';
	}else{
		u('shopping_commend_sort').style.display='block';
		u('shopping_commend_arrow').src='images/shopping_arrow_up.gif';
	}
}
/***任务九.计算商品金额***/
/***见shopping.html***/

/***任务十.改变商品数量***/
/***见shopping.html***/

/***任务十一.删除商品***/
/***见shopping.html***/
var delbtns=document.getElementsByClassName("shopping_product_list_6");

function addEvent(obj,type,handle){
    try{  
        obj.addEventListener(type,handle,false);
    }catch(e){
        try{  
            obj.attachEvent('on' + type,handle);
        }catch(e){  
            obj['on' + type] = handle;
        }
    }
}
console.log(delbtns);
for(var i=0;i<delbtns.length;i++){
	addEvent(delbtns[i].firstChild,'click',delRow(this));
}


function delRow(obj){
	var row=obj.parentNode;
	row=row.parentNode;
	row.parentNode.removeChild(row);
	//getPrice();		
}
/***任务十二.改变文本框样式***/
function actBGColor(obj){
		obj.style.backgroundColor='#F1FFDE';		
	}
	function unactBGColor(obj){
		obj.style.backgroundColor='#FFF';		
	}

/***任务十三.表单验证***/
function checkRegisterEmail(){
	var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
	var mail=document.getElementById("email").value;
	var mailtips=document.getElementById("emailtip");
	if(reg.test(mail)==false) {mailtips.innerHTML='<span style="border:#999 solid 1px; background-color:#FEF4D0;color:#D03B2B;padding:3px;">wrong email address!</span>';return false;}
	else {mailtips.innerHTML='<img src="images/register_write_ok.gif">';return true;}
}
function checkRegisterName(){
	var reg=/^[a-zA-Z][a-zA-Z_]{4,9}$/;
	var name=document.getElementById("nickName").value;
	var nametip=document.getElementById("nametip");
	if(reg.test(name)==false) {nametip.innerHTML='<span style="border:#999 solid 1px; background-color:#FEF4D0;color:#D03B2B;padding:3px;">wrong user name!</span>';return false;}
	else {nametip.innerHTML='<img src="images/register_write_ok.gif">';return true;}
}
function checkRegisterPsd(){
	var reg=/^((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,16}$/;
	var pwd=document.getElementById("pwd").value;
	var pwdtip=document.getElementById("pwdtip");
	if(reg.test(pwd)==false) {pwdtip.innerHTML='<span style="border:#999 solid 1px; background-color:#FEF4D0;color:#D03B2B;padding:3px;">wrong password!</span>';return false;}
	else {pwdtip.innerHTML='<img src="images/register_write_ok.gif">';return true;}
}

function confirmPsd(){
	//alert('aaa');
	var password=document.getElementById("pwd").value;
	var repassword=document.getElementById("repassword").value;
	var repasswordtip=document.getElementById("repasswordtip");
	if(password!=repassword) {repasswordtip.innerHTML='<span style="border:#999 solid 1px; background-color:#FEF4D0;color:#D03B2B;padding:3px;">not matches above</span>';return false;}
	else if(repassword==''){repasswordtip.innerHTML='<span style="border:#999 solid 1px; background-color:#FEF4D0;color:#D03B2B;padding:3px;">it is empty!</span>';return false;}
	else {repasswordtip.innerHTML='<img src="images/register_write_ok.gif">';return true;}
	//alert(pwd==repwd);
}
/***任务十四.下拉地区菜单***/
/**见register.html script部分**/
/***任务十五.验证登录***/
	function checkEmail(){
		var reg=/^[a-zA-Z]+[a-zA-Z0-9-_]+@[a-zA-Z0-9-]+\.(com|cn)$/;
		var mail=document.getElementById("email").value;
		if(reg.test(mail)==false)return false;
		else return true;
	}
	function checkPass(){
		var reg=/^((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$/;
		var psd=document.getElementById("pwd").value;
		if(reg.test(psd)==false) return false;
		else return true;
	}
	function checkAll(){
		if(!checkEmail()) alert('Error Mail Address!');
		else if(!checkPass()) alert('Wrong Password!');
		else alert('now you can log in'); 	
	}
	