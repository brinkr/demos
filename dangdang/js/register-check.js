var u=function(){return document.getElementById;}
function checkEmail(){
	var email=u("email").value;
	var emailtip=u("email-tip");
	emailtip.innerHTML="";
	var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
}