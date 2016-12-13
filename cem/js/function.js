
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
	/*
	if ($(document).scrollTop()>$("#intro-area").offset().top-20){
			$("#navigator").css('position','fixed');	
				$("#navigator").addClass("navi-fix");//不要加点	
			}
			*/
	$(window).scroll(function(){
		//console.log($('#getYourFuckingPosition'));
		
		var v_top=$(document).scrollTop()+y;
		$('#back-to-top').css('top',v_top);	
		if($(document).scrollTop()>200) $('#back-to-top').fadeIn('slow');
		else $('#back-to-top').fadeOut('slow');
			if ($(document).scrollTop()>$("#intro-area").offset().top-20){
				$("#navigator").addClass("navi-fix");//不要加点
			}else{
				$("#navigator").removeClass("navi-fix");
			}
		
	}); 
	
	$('#navigator li:visible').mousemove(function(){
		$(this).children("ul").css('display','block').css('opacity','0').animate({opacity:1},'slow');
	});
	$('#navigator li:visible').mouseout(function(){
		$(this).children("ul").css('opacity','0').css({display:'none'});
	});
	
	var preOrder=1;var scrpic=['img/scr1.jpg','img/scr2.jpg','img/scr3.jpg','img/scr4.jpg'];
function prePic(){
	
	if(preOrder==0) preOrder=4;
	preOrder--;
	//var preHtml='<img id="pre-scroll-bg" style="width:100%;position:absolute;left:-100%;top:0px;" src="'+scrpic[preOrder]+'">';
	var preHtml='<li><img id="pre-scroll-bg" style="position:absolute;left:-100%;top:0px;" src="'+scrpic[preOrder]+'"></li>';
	//$('preHtml').insertBefore('#cur-list');
	$("#intro-area li:first").before(preHtml);
	//$(preHtml).insertBefore("#intro-area li>:first");
	$('#cur-scroll-bg').stop(false,true).animate({left:'100%'},1500,function(){$(this).parent().remove();});
	$('#pre-scroll-bg').stop(false,true).animate({left:'0%'},1500,function(){$(this).attr('id','cur-scroll-bg');});
	//console.log($('#pre-scroll-bg').attr('src'),preOrder);

}

function nextPic(){
	if(preOrder==3) preOrder=-1;
	preOrder++;
	var preHtml='<li><img id="next-scroll-bg" style="position:absolute;left:100%;top:0px;" src="'+scrpic[preOrder]+'"></li>';
	$("#intro-area li:last").after(preHtml);
	$('#cur-scroll-bg').stop(false,true).animate({left:'-100%'},1500,function(){$(this).parent().remove();});
	$('#next-scroll-bg').stop(false,true).animate({left:'0%'},1500,function(){$(this).attr('id','cur-scroll-bg');});

}
//setInterval("nextPic()",3500);
	
	
	//var ScrPreOrder=0,ScrCurOrder=1,ScrNextOrder=2;var ScrTimer;	
	$('.intro-bar').mouseover(function(){
		//$('#pre-scroll-bg').attr('src',scrpic[$(this).index()]).fadeIn('slow');		
		$('#intro-area-text').html(introtext[$(this).index()].text).fadeIn('slow');	
		//$('#cur-scroll-bg').fadeOut('slow');
		$('#cur-scroll-bg').attr('src',scrpic[$(this).index()]).fadeIn("slow");
		preOrder=$(this).index();
		//$(this).css('opacity','0.3');
		$(this).children("span").css('visibility','hidden');
		//$('.more-info-button').css('opacity','1').css('background-color','rgba(0,0,0,1)');
		//nextPic();
	});
	$('.intro-bar').mouseout(function(){
		//$(this).css('opacity','1');
		$(this).children("span").css('visibility','visible');
	});
	
	$('#nextPic').click(function(){nextPic();});
	$('#prePic').click(function(){prePic();});
	
});

