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
let ctmc = document.querySelector(".tmc-content");
let catr = document.querySelector(".atr-content");
let ccnv = document.querySelector(".cnv-content");

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
	document.getElementById("mlg").value = "";
	document.getElementById("tr").value = 1;
	document.getElementById("marker").value = "TMC";
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
	document.getElementById("mlg").value = "";
	document.getElementById("tr").value = 2;
	document.getElementById("marker").value = "TMC";
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
	document.getElementById("mlg").value = "";
	document.getElementById("tr").value = 3;
	document.getElementById("marker").value = "TMC";
} /*SHOW TIER BUTTON END*/


function showTMC(){
	var x = document.getElementById("tr").value;
	ctmc.style.display = "flex";
	catr.style.display = "none";
	ccnv.style.display = "none";
	if(x == 1){
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
		document.getElementById("marker").value = "TMC";
	} else if (x == 2){
		showTier1.style.display = "none";
		showTier2.style.display = "block";
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
		document.getElementById("marker").value = "TMC";
	} else {
		showTier1.style.display = "none";
		showTier2.style.display = "none";
		showTier3.style.display = "block";
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
		document.getElementById("marker").value = "TMC";
	}
}

function showATR(){
	var x = document.getElementById("tr").value;
	ctmc.style.display = "none";
	catr.style.display = "flex";
	ccnv.style.display = "none";
	if(x == 1){
		showTier1.style.display = "block";
		showTier2.style.display = "none";
		showTier3.style.display = "none";
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
		document.getElementById("marker").value = "ATR";
	} else if (x == 2){
		showTier1.style.display = "none";
		showTier2.style.display = "block";
		showTier3.style.display = "none";
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
		document.getElementById("marker").value = "ATR";
	} else {
		showTier1.style.display = "none";
		showTier2.style.display = "none";
		showTier3.style.display = "block";
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
		document.getElementById("marker").value = "ATR";
	}
}

function showCNV(){
	var x = document.getElementById("tr").value;
	ctmc.style.display = "none";
	catr.style.display = "none";
	ccnv.style.display = "block";
	if(x == 1){
		showTier1.style.display = "block";
		showTier2.style.display = "none";
		showTier3.style.display = "none";
		atr1.style.display = "none";
		atr2.style.display = "none";
		atr3.style.display = "none";
		tmc1.style.display = "none";
		tmc2.style.display = "none";
		tmc3.style.display = "none";
		cni1.style.display = "block";
		cni2.style.display = "none";
		cni3.style.display = "none";
		oth1.style.display = "none";
		oth2.style.display = "none";
		oth3.style.display = "none";
		document.getElementById("marker").value = "CNV";
	} else if (x == 2){
		showTier1.style.display = "none";
		showTier2.style.display = "block";
		showTier3.style.display = "none";
		atr1.style.display = "none";
		atr2.style.display = "none";
		atr3.style.display = "none";
		tmc1.style.display = "none";
		tmc2.style.display = "none";
		tmc3.style.display = "none";
		cni1.style.display = "none";
		cni2.style.display = "block";
		cni3.style.display = "none";
		oth1.style.display = "none";
		oth2.style.display = "none";
		oth3.style.display = "none";
		document.getElementById("marker").value = "CNV";
	} else {
		showTier1.style.display = "none";
		showTier2.style.display = "none";
		showTier3.style.display = "block";
		atr1.style.display = "none";
		atr2.style.display = "none";
		atr3.style.display = "none";
		tmc1.style.display = "none";
		tmc2.style.display = "none";
		tmc3.style.display = "none";
		cni1.style.display = "none";
		cni2.style.display = "none";
		cni3.style.display = "block";
		oth1.style.display = "none";
		oth2.style.display = "none";
		oth3.style.display = "none";
		document.getElementById("marker").value = "CNV";
	}
}

	/*FUELSURCHARGE CALCULATION*/

function ch(){
	var m = Number(document.getElementById("mlg").value);
	var t = Number(document.getElementById("tch").value);
	var tr = Number(document.getElementById("trp").value);
	var mr = document.getElementById("marker").value;
	var lvl = 0;

	if(m < 40){
		lvl = 1;
		document.getElementById("tr").value = "1";
		showTier1.style.display = "block";
		showTier2.style.display = "none";
		showTier3.style.display = "none";
	}else if(m < 70){
		lvl = 2;
		document.getElementById("tr").value = "2";
		showTier1.style.display = "none";
		showTier2.style.display = "block";
		showTier3.style.display = "none";
	}else{
		lvl = 3;
		document.getElementById("tr").value = "3";
		showTier1.style.display = "none";
		showTier2.style.display = "none";
		showTier3.style.display = "block";
	}


	if(lvl == 1 && mr == "TMC"){
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
	}else if(lvl == 1 && mr == "ATR"){
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
	}else if(lvl == 1 && mr == "CNV"){
		atr1.style.display = "none";
		atr2.style.display = "none";
		atr3.style.display = "none";
		tmc1.style.display = "none";
		tmc2.style.display = "none";
		tmc3.style.display = "none";
		cni1.style.display = "block";
		cni2.style.display = "none";
		cni3.style.display = "none";
		oth1.style.display = "none";
		oth2.style.display = "none";
		oth3.style.display = "none";
	}else if(lvl == 2 && mr == "TMC"){
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
	}else if(lvl == 2 && mr == "ATR"){
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
	}else if(lvl == 2 && mr == "CNV"){
		atr1.style.display = "none";
		atr2.style.display = "none";
		atr3.style.display = "none";
		tmc1.style.display = "none";
		tmc2.style.display = "none";
		tmc3.style.display = "none";
		cni1.style.display = "none";
		cni2.style.display = "block";
		cni3.style.display = "none";
		oth1.style.display = "none";
		oth2.style.display = "none";
		oth3.style.display = "none";
	}else if(lvl == 3 && mr == "TMC"){
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
	}else if(lvl == 3 && mr == "ATR"){
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
	}else if(lvl == 3 && mr == "CNV"){
		atr1.style.display = "none";
		atr2.style.display = "none";
		atr3.style.display = "none";
		tmc1.style.display = "none";
		tmc2.style.display = "none";
		tmc3.style.display = "none";
		cni1.style.display = "none";
		cni2.style.display = "none";
		cni3.style.display = "block";
		oth1.style.display = "none";
		oth2.style.display = "none";
		oth3.style.display = "none";
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
}		/*FUELSURCHARGE CALCULATION END*/

function reset(){
	document.getElementById("psn").value = 0;
}

		/*TURNING MOVEMENT COUNTS CALCULATION*/

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
} 			/*TURNING MOVEMENT COUNTS CALCULATION END*/

			/*ATR CALCULATION*/
function calcATR(){
	var atype1 = document.getElementById("atr-type1").value;
	var atype2 = document.getElementById("atr-type2").value;
	var daysn = document.getElementById("ndays").value;
	var nvol = 0;
	var nvold = 0
	var ncos = 0;
	var ncosd = 0;
	var ncas = 0;
	var ncasd = 0;
	var lcos = 0;
	var lcasd = 0;
	var lcas = 0;
	var lcasd = 0;
	var fvol = 0;
	var fvold = 0;
	var fcos = 0;
	var fcosd = 0;
	var fcas = 0;
	var fcasd = 0;

	var trs = document.getElementById("tr").value;

	if(trs == 1){
		nvol = 110;
		nvold = 65;
		ncos = 150;
		ncosd = 80;
		ncas = 165;
		ncasd = 90;
		lcos = 205;
		lcosd = 105;
		lcas = 220;
		lcasd = 115;
		fvol = 220;
		fvold = 130;
		fcos = 300;
		fcosd = 160;
		fcas = 330;
		fcasd = 180;
	} else if(trs == 2){
		nvol = 130;
		nvold = 75;
		ncos = 170;
		ncosd = 90;
		ncas = 185;
		ncasd = 100;
		lcos = 235;
		lcosd = 120;
		lcas = 250;
		lcasd = 130;
		fvol = 260;
		fvold = 150;
		fcos = 340;
		fcosd = 180;
		fcas = 370;
		fcasd = 200;
	} else {
		nvol = 150;
		nvold = 85;
		ncos = 190;
		ncosd = 100;
		ncas = 205;
		ncasd = 110;
		lcos = 265;
		lcosd = 135;
		lcas = 280;
		lcasd = 145;
		fvol = 300;
		fvold = 170;
		fcos = 380;
		fcosd = 200;
		fcas = 410;
		fcasd = 220;		
	}

	if(atype1 == "Volume" && atype2 == "Normal"){
		document.getElementById("atrprc").value = nvol + ((daysn-1)*nvold);
	}else if(atype1 == "Class / Speed" && atype2 == "Normal"){
		document.getElementById("atrprc").value = ncos + ((daysn-1)*ncosd);
	}else if(atype1 == "Class & Speed" && atype2 == "Normal"){
		document.getElementById("atrprc").value = ncas + ((daysn-1)*ncasd);
	}else if(atype1 == "Class / Speed" && atype2 == "Large"){
		document.getElementById("atrprc").value = lcos + ((daysn-1)*lcosd);
	}else if(atype1 == "Class & Speed" && atype2 == "Large"){
		document.getElementById("atrprc").value = lcas + ((daysn-1)*lcasd);
	}else if(atype1 == "Volume" && atype2 == "Fwy"){
		document.getElementById("atrprc").value = fvol + ((daysn-1)*fvold);
	}else if(atype1 == "Class / Speed" && atype2 == "Fwy"){
		document.getElementById("atrprc").value = fcos + ((daysn-1)*fcosd);
	}else if(atype1 == "Class & Speed" && atype2 == "Fwy"){
		document.getElementById("atrprc").value = fcas + ((daysn-1)*fcasd);
	}
	
}			/*ATR CALCULATION END*/

function calcCNV(){
	var trs = document.getElementById("tr").value;
	var rd = document.getElementById("road").value;
	var day = document.getElementById("ndys").value;
	var hr = document.getElementById("nhrs").value;
	var sp = document.getElementById("spd").value;
	var tp = document.getElementById("tlp").value;
	var cnv = 0;
	var cnvd = 0;
	var cnf	= 0;
	var cnfd = 0;
	let x = 0;

	if(trs == 1){
		cnv = 175;
		cnvd = 80;
		cnf = 350;
		cnfd = 160;
	} else if(trs == 2){
		cnv = 205;
		cnvd = 95;
		cnf = 410;
		cnfd = 190;
	} else {
		cnv = 255;
		cnvd = 120;
		cnf = 510;
		cnfd = 240;
	}

	if(rd == "Normal"){
		x = cnv + ((day - 1)*cnvd);
	}else{
		x = cnf + ((day - 1)*cnfd);
	}

	document.getElementById("cip").value = x;
	document.getElementById("vrp").value = (35 * day * hr) / sp;
	document.getElementById("tlp").value = x + ((35 * day * hr) / sp);
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
	ctmc.style.display = "none";
	catr.style.display = "flex";
	ccnv.style.display = "none";
	document.getElementById("marker").value = "ATR";
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
	ctmc.style.display = "none";
	catr.style.display = "flex";
	ccnv.style.display = "none";
	document.getElementById("marker").value = "ATR";
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
	ctmc.style.display = "none";
	catr.style.display = "flex";
	ccnv.style.display = "none";
	document.getElementById("marker").value = "ATR";
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
	ctmc.style.display = "flex";
	catr.style.display = "none";
	ccnv.style.display = "none";
	document.getElementById("marker").value = "TMC";
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
	ctmc.style.display = "flex";
	catr.style.display = "none";
	ccnv.style.display = "none";
	document.getElementById("marker").value = "TMC";
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
	ctmc.style.display = "flex";
	catr.style.display = "none";
	ccnv.style.display = "none";
	document.getElementById("marker").value = "TMC";
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
	ctmc.style.display = "none";
	catr.style.display = "none";
	ccnv.style.display = "block";
	document.getElementById("marker").value = "CNV";
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
	ctmc.style.display = "none";
	catr.style.display = "none";
	ccnv.style.display = "block";
	document.getElementById("marker").value = "CNV";
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
	ctmc.style.display = "none";
	catr.style.display = "none";
	ccnv.style.display = "block";
	document.getElementById("marker").value = "CNV";
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
	ctmc.style.display = "flex";
	catr.style.display = "none";
	ccnv.style.display = "none";
	document.getElementById("marker").value = "OTH";
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
	ctmc.style.display = "flex";
	catr.style.display = "none";
	ccnv.style.display = "none";
	document.getElementById("marker").value = "OTH";
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
	ctmc.style.display = "flex";
	catr.style.display = "none";
	ccnv.style.display = "none";
	document.getElementById("marker").value = "OTH";
}
/*RIGHT SIDE FUNCTIONALITY END*/
