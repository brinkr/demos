$(document).ready(function(e) {	
	/*初始化*/
	var SwitchTime=2000;
	var ScrollNewsTimer;
	displayFirstScrollNews();
	$('#chinese').css('opacity','0.5');
	var ListNewsHtml='';
	for(var i=0;i<listnews.length;i++){
		ListNewsHtml+='<li><a href='+'\"'+listnews[i].source+'\"'+'>'+listnews[i].title+'</a></li>';	
	}
	$('#news-list ol').html(ListNewsHtml);
	/*初始化完*/
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
	
	/***若是刷新过页面，且滚动条预先有滚动，亦置顶导航栏***/
	if ($(document).scrollTop()>$("#intro-area").offset().top-20){
			$("#navigator").css('position','fixed');	
				$("#navigator").addClass("navi-fix");/*不要加点*/	
				//$("#cover-bg").css({'top':'+=$(document).scrollTop()'});	
				//$("#cover-bg").css({'top':'40'});	
			}
	$(window).scroll(function(){
		var v_top=$(document).scrollTop()+y;
		$('#back-to-top').css('top',v_top);	
		if($(document).scrollTop()>200) $('#back-to-top').fadeIn('slow');
		else $('#back-to-top').fadeOut('slow');
		//alert($(window).scrollTop());
			if ($(document).scrollTop()>$("#intro-area").offset().top-20){
				$("#navigator").addClass("navi-fix");/*不要加点*/	
				//$("#cover-bg").css({'top':'+=$(document).scrollTop()'});	
				//$("#cover-bg").css('margin-top','0');		
			}else{
				//$("#navigator").css('opacity','0.5');
				
				//$("#navigator").animate({opacity:'+=0.1'},100);
				$("#navigator").removeClass("navi-fix");
				//$("#cover-bg").css({'top':'-=$(document).scrollTop()-40'});	
				//$("#cover-bg").css({'margin-top':'-40'});
				/***fixed会干扰后续绝对定位层的位置控制，故先设置为absolute，等后续层位置确定后，再设置其为fixed，以保持位置***/
				/*以上描述可能有误*/
				//$("#navigator").css({'position':'fixed'});			
			}
	});  	
	var scrpic=['img/scr1.jpg','img/scr2.jpg','img/scr3.jpg','img/scr4.jpg'];
	var ScrPreOrder=0,ScrCurOrder=1,ScrNextOrder=2;var ScrTimer;	
	function nextPic(){
		$("#pre-scroll-bg").attr('src',scrpic[ScrPreOrder]);
		$("#cur-scroll-bg").attr('src',scrpic[ScrCurOrder]);
		$("#next-scroll-bg").attr('src',scrpic[ScrNextOrder]);
		ScrPreOrder--;ScrCurOrder--;ScrNextOrder--;
		if(ScrPreOrder<0) ScrPreOrder=4;
		if(ScrCurOrder<0) ScrCurOrder=4;
		if(ScrNextOrder<0) ScrNextOrder=4;
		$('#pre-scroll-bg').animate({'left':'0%'},2000,function(){//前图顶替当前图位置
			$('#next-scroll-bg').css('left','-100%');//左右俩图交换位置
			$('#next-scroll-bg').attr('src',scrpic[ScrPreOrder]);
			//$('#pre-scroll-bg').css({'right':'100%'}).attr('src',scrpic[ScrPreOrder]);
			//$('#cur-scroll-bg').css({'right':'100%'}).attr('src',$('#pre-scroll-bg').attr('src'));				
		});
		$('#cur-scroll-bg').animate({'left':'100%'},2000,function(){//当前图移动到右边不可见位置
			$('#cur-scroll-bg').css('left','-100%');
			/*当前图滑动到右边不可见位置后*/
			//$('#cur-scroll-bg').css({'left':'0%'}).attr('src',$('#pre-scroll-bg').attr('src'));
			//$('#pre-scroll-bg').attr('src',scrpic[ScrPreOrder]);
			//$('#cur-scroll-bg').css({'right':'100%'}).attr('src',srcpic[ScrPreOrder]);//预先载入前前图，并置入左边不可见位置等待切换			
		});	
		
		
		
		
		
		//$('#next-scroll-bg').animate({'left':'-100%'},2000,function(){
				
			
		//});
		
			
		//$('#pre-scroll-bg');
		//$('#cur-scroll-bg').css({'left':'0%'});
		//$('#pre-scroll-bg').css({'right':'100%'}).attr('src',scrpic[ScrPreOrder]);
		//$('#cur-scroll-bg').css({'left':'0%'}).attr('src',scrpic[ScrCurOrder]);	
	}
	//nextPic();
	//ScrTimer=setInterval(nextPic,2500);
	//时间有限，晕过去了，先不写了，用插件吧。

	
	

/*
	$('#prePic').mouseover(function(){clearInterval(ScrTimer);});
	$('#prePic').mouseout(function(){ScrTimer=setInterval(nextPic,500);});
	$('#nextPic').mouseover(function(){clearInterval(ScrTimer);});
	$('#nextPic').mouseout(function(){ScrTimer=setInterval(nextPic,500);});
*/
});
