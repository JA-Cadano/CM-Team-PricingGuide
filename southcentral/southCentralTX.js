let showTier1 = document.querySelector(".tier1");
let showTier2 = document.querySelector(".tier2");
let showTier3 = document.querySelector(".tier3");
let atr1 = document.querySelector(".atr-t1");
let atr2 = document.querySelector(".atr-t2");
let atr3 = document.querySelector(".atr-t3");
let tmc1 = document.querySelector(".tmc-t1");
let tmc2 = document.querySelector(".tmc-t2");
let tmc3 = document.querySelector(".tmc-t3");
let cni1 = document.querySelector(".cni-t1");
let cni2 = document.querySelector(".cni-t2");
let cni3 = document.querySelector(".cni-t3");
let oth1 = document.querySelector(".oth-t1");
let oth2 = document.querySelector(".oth-t2");
let oth3 = document.querySelector(".oth-t3");




/* SHOW TIER BUTTON*/
function showHide1(){
	showTier1.style.display = "block";
	showTier2.style.display = "none";
	showTier3.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc1.style.display = "block";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showHide2(){
	showTier2.style.display = "block";
	showTier1.style.display = "none";
	showTier3.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc1.style.display = "none";
	tmc2.style.display = "block";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showHide3(){
	showTier3.style.display = "block";
	showTier2.style.display = "none";
	showTier1.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc1.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "block";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
} /*SHOW TIER BUTTON END*/

function ch(){
	var m = Number(document.getElementById("mlg").value);
	var t = Number(document.getElementById("tch").value);
	var tr = Number(document.getElementById("trp").value);

	if(m < 40){
		document.getElementById("tr").value = "1";
	}else if(m < 70){
		document.getElementById("tr").value = "2";
	}else{
		document.getElementById("tr").value = "3";
	}

	var n1 = m * t * 2 * tr * 0.13;
	var x = n1 % 5;

	document.getElementById("fs").value = n1.toFixed(2);

	if(n1 < 25){
		document.getElementById("finalresult").value = 25;
	}else if(n1 > 25 && x == 0){
		document.getElementById("finalresult").value = n1;
	}else{
		document.getElementById("finalresult").value = (n1 - x) + 5;
	}
}

function reset(){
	document.getElementById("psn").value = 0;
}

function tmc(){
	var trs = document.getElementById("tr").value;
	
	var h2 = 0;
	var p2 = 0;
	var h3 = 0;
	var p3 = 0;
	var h4 = 0;
	var h4h = 0;
	var p4 = 0;
	var hph = 0;

	if(trs == 1){
		h2 = 140;
		p2 = 85;
		h3 = 190;
		p3 = 125;
		h4 = 230;
		h4h = 55;
		p4 = 160;
		hph = 40;
	}else if(trs == 2){
		h2 = 160;
		p2 = 95;
		h3 = 210;
		p3 = 135;
		h4 = 260;
		h4h = 60;
		p4 = 180;
		hph = 45;
	}else{
		h2 = 190;
		p2 = 110;
		h3 = 245;
		p3 = 150;
		h4 = 290;
		h4h = 65;
		p4 = 200;
		hph = 50;
	}

	var nperson = document.getElementById("psn").value;
	var	tmchr = document.getElementById("tmc").value;
	if(tmchr == 2){
		document.getElementById("prc").value = h2 + ((nperson-1)*p2);
	} else if(tmchr == 3){
		document.getElementById("prc").value = h3 + ((nperson-1)*p3);
	} else if(tmchr == 4){
		document.getElementById("prc").value = h4 + ((nperson-1)*p4);
	}else if(tmchr > 4){
		document.getElementById("prc").value = h4 + ((nperson-1)*p4) + ((tmchr -4)*h4h) + ((tmchr - 4)* hph * (nperson-1))
	}
} 

/*RIGHT SIDE FUNCTIONALITY*/
function showATR1(){
	atr1.style.display = "block";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc1.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showATR2(){
	atr1.style.display = "none";
	atr2.style.display = "block";
	atr3.style.display = "none";
	tmc1.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showATR3(){
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "block";
	tmc1.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showTMC1(){
	tmc1.style.display = "block";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showTMC2(){
	tmc1.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc2.style.display = "block";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showTMC3(){
	tmc1.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "block";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showCNI1(){
	tmc1.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "block";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showCNI2(){
	tmc1.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "block";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showCNI3(){
	tmc1.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "block";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showOTH1(){
	tmc1.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "block";
	oth2.style.display = "none";
	oth3.style.display = "none";
}

function showOTH2(){
	tmc1.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "block";
	oth3.style.display = "none";
}

function showOTH3(){
	tmc1.style.display = "none";
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "none";
	tmc2.style.display = "none";
	tmc3.style.display = "none";
	cni1.style.display = "none";
	cni2.style.display = "none";
	cni3.style.display = "none";
	oth1.style.display = "none";
	oth2.style.display = "none";
	oth3.style.display = "block";
}
/*RIGHT SIDE FUNCTIONALITY END*/