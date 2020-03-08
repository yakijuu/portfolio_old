var looper;
var degrees = 0;
function rotateAnimation1(el,speed){
	var elem = document.getElementById(el);
	elem.style.transform = "rotate("+degrees+"deg)";
	looper = setTimeout('rotateAnimation1(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
}
function rotateAnimation2(el,speed){
	var elem = document.getElementById(el);
	elem.style.transform = "rotate(-"+degrees+"deg)";
	looper = setTimeout('rotateAnimation2(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
}
function rotateAnimation3(el,speed){
	var elem = document.getElementById(el);
	elem.style.transform = "rotate("+degrees+"deg)";
	looper = setTimeout('rotateAnimation3(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
}