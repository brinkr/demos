$(document).ready(function(e) {	
	/*初始化*/
	var SwitchTime=2000;
	var ScrollNewsTimer;
	displayFirstScrollNews();
	$('#chinese').css('opacity','0.5');

	var ListNewsHtml='';
	//var a='<li><a href='+'\"'+listnews[0].source+'\"'+'>'+listnews[0].title+'</a></li>';
	//alert(a);
	for(var i=0;i<listnews.length;i++){
		ListNewsHtml+='<li><a href='+'\"'+listnews[i].source+'\"'+'>'+listnews[i].title+'</a></li>';	
	}
	$('#news-list ol').html(ListNewsHtml);
	
	
	//alert(
	//$('#second-scroll-news,#third-scroll-news').css('opacity','0');
	/*初始化完*/
//$('#circle1').css('visibility','visible');
	/*修复浏览器兼容性*/
	/*如果是IE6、7、8增加一个float:left以免产生错位*/
	if($.browser.msie&&($.browser.version=="6.0"||$.browser.version=="7.0"||$.browser.version=="8.0")&&!$.support.style){ 
		//$('#navigator li ul').css('float','left');
	} 
	if($.browser.msie&&($.browser.version=="9.0"||$.browser.version=="10.0"||$.browser.version=="11.0")){ 
		$('#navigator ul li ul').css('top','41px');
		$('#navigator ul ul ul li').css('top','-40px');
	} 
	/*浏览器兼容性修复完成*/
	/*搜索框动态效果*/
	$('#search-bar input').focus(function(){if($(this).val()=='SEARCH')$(this).attr('value','');$(this).addClass('input-focus')});
	$('#search-bar input').blur(function(){if($(this).val()=='')$(this).attr('value','SEARCH');$(this).removeClass('input-focus');});
	/*搜索框动态效果完*/
	/*banner动态效果*/
	function showMotto(){
		$('#school-motto').css('background-color','#31475c');
		$('#m1,#m2,#m3,#m4').fadeOut('slow',m1);		
		function m1(){$('#m1').fadeIn(2000,m2);};
		function m2(){$('#m2').fadeIn(2000,m3);};
		function m3(){$('#m3').fadeIn(2000,m4);};
		function m4(){$('#m4').fadeIn(2000,show_m_bg);};
		function show_m_bg(){$('#school-motto').css({'background-color':'#c91812'});
		setTimeout(showMotto,2000);};		
	}showMotto();
	/*banner动态效果完*/
	/*功能区动态效果*/
	$('#function-area div').mouseover(function(){$(this).css('opacity','0.5');});
	$('#function-area div').mouseleave(function(){$(this).css('opacity','1');});
	/*功能区动态效果完*/	
	/*滚动新闻动态效果*/
	function displayFirstScrollNews(){
		clearTimeout(ScrollNewsTimer);
		$('#circle2,#circle3').css('opacity','0.5');		
		$('#third-scroll-news,#second-scroll-news').fadeOut(2000);//这两句同时执行
		$('#first-scroll-news').fadeIn(2000);
		$('#circle1').css('opacity','1');
		ScrollNewsTimer=setTimeout(displaySecondScrollNews,5000);//这两句同时执行
	}
	function displaySecondScrollNews(){
		clearTimeout(ScrollNewsTimer);
		$('#circle1,#circle3').css('opacity','0.5');
		$('#first-scroll-news,#third-scroll-news').fadeOut(2000);
		$('#second-scroll-news').fadeIn(2000);
		$('#circle2').css('opacity','1');
		ScrollNewsTimer=setTimeout(displayThirdScrollNews,5000);
	}
	function displayThirdScrollNews(){
		clearTimeout(ScrollNewsTimer);
		$('#circle1,#circle2').css('opacity','0.5');
		$('#first-scroll-news,#second-scroll-news').fadeOut(2000);
		$('#third-scroll-news').fadeIn(2000);
		$('#circle3').css('opacity','1');
		ScrollNewsTimer=setTimeout(displayFirstScrollNews,5000);
	}
	/*滚动新闻动态效果完*/	
	/*为圆形滑块添加手动控制效果*/
	$('#circle1,#circle2,#circle3').mouseover(function(){clearTimeout(ScrollNewsTimer);});
	$('#circle1,#circle2,#circle3').mouseleave(function(){displayThirdScrollNews();});
	$('#circle1').mousedown(displayFirstScrollNews);
	$('#circle2').mousedown(displaySecondScrollNews);
	$('#circle3').mousedown(displayThirdScrollNews);
	/*手动控制效果添加完毕*/
	//$(document).scroll(function(){$('#back-to-top').css({'top':'+=parseInt($(document).scrollTop())+"px"'});});
	//不支持IE6	更新：支持IE6，注意是$(window).scroll()不是document
	//if($(document).scrollTop()>200) $('#back-to-top').css('opacity','0'); else $('#back-to-top').css('opacity','1');
	//$('#back-to-top').fadeOut('fast');
	$('#back-to-top').css({'top':$(window).height()+$(document).scrollTop()-$('#back-to-top').height()-50});
	var y=parseInt($('#back-to-top').css('top'));
	$('#back-to-top').mousedown(function(){$(document).scrollTop(0);});
	$(window).scroll(function(){
		var v_top=$(document).scrollTop()+y;
		$('#back-to-top').css('top',v_top);	
		if($(document).scrollTop()>200) $('#back-to-top').fadeIn('slow');
		else $('#back-to-top').fadeOut('slow');		
	});  
	
	/*
 
var Y,h,scrollTop; 
	
	
	var backToTop=document.getElementById("back-to-top");
	if(backToTop.currentStyle){		
		Y=parseInt(backToTop.currentStyle.top);
	}else{		
		Y=parseInt(document.defaultView.getComputedStyle(backToTop,null).top);			
	}	
	
	
	
function move(){
	scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	backToTop.style.top=Y+parseInt(scrollTop)+"px";
	
	//console.log($(window).height()+$(document).scrollTop()-$('#back-to-top').height());
}
//window.onload=getPosition;
//window.onscroll=move;
//alert(listnews[1].title);
	$(window).scroll()
	*/	
});
