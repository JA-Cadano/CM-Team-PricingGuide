let displayNote = document.querySelector(".popup");
let btton = document.querySelector(".btn");
let showtmc = document.querySelector(".tmc-input");
let showatr = document.querySelector(".atr-input");
let showcnv = document.querySelector(".cnv-input");
let displayTier1 = document.querySelector(".hdr1");
let displayTier2 = document.querySelector(".hdr2");
let displayTier3 = document.querySelector(".hdr3");
let settmc1 = document.querySelector(".tmc1");
let settmc2 = document.querySelector(".tmc2");
let settmc3 = document.querySelector(".tmc3");
let setatr1 = document.querySelector(".atr1");
let setatr2 = document.querySelector(".atr2");
let setatr3 = document.querySelector(".atr3");
let setcnv1 = document.querySelector(".cnv1");
let setcnv2 = document.querySelector(".cnv2");
let setcnv3 = document.querySelector(".cnv3");
let setoth = document.querySelector(".oth");

function showNote(){
	displayNote.style.display = "block";
	btton.style.display = "none";
}

function closeNote(){
	displayNote.style.display = "none";
	btton.style.display = "block";
}

function showTMC(){
	var tr = document.getElementById("tier").value;
	showtmc.style.display = "flex";
	showatr.style.display = "none";
	showcnv.style.display = "none";
	if(tr == 1){
		settmc1.style.display = "flex";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else if(tr == 2){
		settmc1.style.display = "none";
		settmc2.style.display = "flex";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else{
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "flex";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}
	document.getElementById("stype").value = "TMC";
}

function showATR(){
	var tr = document.getElementById("tier").value;
	showtmc.style.display = "none";
	showatr.style.display = "block";
	showcnv.style.display = "none";
	if(tr == 1){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "flex";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else if(tr == 2){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "flex";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else{
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "flex";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}
	document.getElementById("stype").value = "ATR";
}

function showCNV(){
	var tr = document.getElementById("tier").value;
	showtmc.style.display = "none";
	showatr.style.display = "none";
	showcnv.style.display = "block";
	if(tr == 1){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "flex";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else if(tr == 2){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "flex";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else{
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "flex";
		setoth.style.display = "none";
	}
	document.getElementById("stype").value = "CNV";
}

function setTier1(){
	var servicetype = document.getElementById("stype").value;
	document.getElementById("tier").value = 1;
	displayTier1.style.display = "flex";
	displayTier2.style.display = "none";
	displayTier3.style.display = "none";
	document.getElementById("milage").value = "";
	if(servicetype == "TMC"){
		settmc1.style.display = "flex";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
		showtmc.style.display = "flex";
		showatr.style.display = "none";
		showcnv.style.display = "none";
	}else if(servicetype == "ATR"){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "flex";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
		showtmc.style.display = "none";
		showatr.style.display = "block";
		showcnv.style.display = "none";
	}else if(servicetype == "CNV"){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "flex";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
		showtmc.style.display = "none";
		showatr.style.display = "none";
		showcnv.style.display = "block";
	}
}

function setTier2(){
	var servicetype = document.getElementById("stype").value;
	document.getElementById("tier").value = 2;
	displayTier1.style.display = "none";
	displayTier2.style.display = "flex";
	displayTier3.style.display = "none";
	document.getElementById("milage").value = "";
	if(servicetype == "TMC"){
		settmc1.style.display = "none";
		settmc2.style.display = "flex";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
		showtmc.style.display = "flex";
		showatr.style.display = "none";
		showcnv.style.display = "none";
	}else if(servicetype == "ATR"){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "flex";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
		showtmc.style.display = "none";
		showatr.style.display = "block";
		showcnv.style.display = "none";
	}else if(servicetype == "CNV"){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "flex";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
		showtmc.style.display = "none";
		showatr.style.display = "none";
		showcnv.style.display = "block";
	}
}

function setTier3(){
	var servicetype = document.getElementById("stype").value;
	document.getElementById("tier").value = 3;
	displayTier1.style.display = "none";
	displayTier2.style.display = "none";
	displayTier3.style.display = "flex";
	document.getElementById("milage").value = "";
	if(servicetype == "TMC"){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "flex";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
		showtmc.style.display = "flex";
		showatr.style.display = "none";
		showcnv.style.display = "none";
	}else if(servicetype == "ATR"){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "flex";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
		showtmc.style.display = "none";
		showatr.style.display = "block";
		showcnv.style.display = "none";
	}else if(servicetype == "CNV"){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "flex";
		setoth.style.display = "none";
		showtmc.style.display = "none";
		showatr.style.display = "none";
		showcnv.style.display = "block";
	}
}

function getTier(){
	var ml = document.getElementById("milage").value;
	var servicetype = document.getElementById("stype").value;
	var tc = document.getElementById("tech").value;
	var tr = document.getElementById("trip").value;
	var total1 = 0;
	var total2 = 0;

	total1 = ml * tc * 2 * tr * 0.13;
	document.getElementById("fs1").value = total1.toFixed(2);

	if(total1 <= 25){
		total2 = 25;
	}else if((total1 % 5) == 0 ){
		total2 = total1;
	}else{
		total2 = total1 - (total1 % 5) + 5;
	}

	document.getElementById("fs2").value = total2.toFixed(2);



	if(ml < 40){
		document.getElementById("tier").value = 1;
		displayTier1.style.display = "flex";
		displayTier2.style.display = "none";
		displayTier3.style.display = "none";
		if(servicetype == "TMC"){
			settmc1.style.display = "flex";
			settmc2.style.display = "none";
			settmc3.style.display = "none";
			setatr1.style.display = "none";
			setatr2.style.display = "none";
			setatr3.style.display = "none";
			setcnv1.style.display = "none";
			setcnv2.style.display = "none";
			setcnv3.style.display = "none";
			setoth.style.display = "none";
			showtmc.style.display = "flex";
			showatr.style.display = "none";
			showcnv.style.display = "none";
		}else if(servicetype == "ATR"){
			settmc1.style.display = "none";
			settmc2.style.display = "none";
			settmc3.style.display = "none";
			setatr1.style.display = "flex";
			setatr2.style.display = "none";
			setatr3.style.display = "none";
			setcnv1.style.display = "none";
			setcnv2.style.display = "none";
			setcnv3.style.display = "none";
			setoth.style.display = "none";
			showtmc.style.display = "none";
			showatr.style.display = "block";
			showcnv.style.display = "none";
		}else if(servicetype == "CNV"){
			settmc1.style.display = "none";
			settmc2.style.display = "none";
			settmc3.style.display = "none";
			setatr1.style.display = "none";
			setatr2.style.display = "none";
			setatr3.style.display = "none";
			setcnv1.style.display = "flex";
			setcnv2.style.display = "none";
			setcnv3.style.display = "none";
			setoth.style.display = "none";
			showtmc.style.display = "none";
			showatr.style.display = "none";
			showcnv.style.display = "block";
		}
	} else if(ml < 70){
		document.getElementById("tier").value = 2;
		displayTier1.style.display = "none";
		displayTier2.style.display = "flex";
		displayTier3.style.display = "none";
		if(servicetype == "TMC"){
			settmc1.style.display = "none";
			settmc2.style.display = "flex";
			settmc3.style.display = "none";
			setatr1.style.display = "none";
			setatr2.style.display = "none";
			setatr3.style.display = "none";
			setcnv1.style.display = "none";
			setcnv2.style.display = "none";
			setcnv3.style.display = "none";
			setoth.style.display = "none";
			showtmc.style.display = "flex";
			showatr.style.display = "none";
			showcnv.style.display = "none";
		}else if(servicetype == "ATR"){
			settmc1.style.display = "none";
			settmc2.style.display = "none";
			settmc3.style.display = "none";
			setatr1.style.display = "none";
			setatr2.style.display = "flex";
			setatr3.style.display = "none";
			setcnv1.style.display = "none";
			setcnv2.style.display = "none";
			setcnv3.style.display = "none";
			setoth.style.display = "none";
			showtmc.style.display = "none";
			showatr.style.display = "block";
			showcnv.style.display = "none";
		}else if(servicetype == "CNV"){
			settmc1.style.display = "none";
			settmc2.style.display = "none";
			settmc3.style.display = "none";
			setatr1.style.display = "none";
			setatr2.style.display = "none";
			setatr3.style.display = "none";
			setcnv1.style.display = "none";
			setcnv2.style.display = "flex";
			setcnv3.style.display = "none";
			setoth.style.display = "none";
			showtmc.style.display = "none";
			showatr.style.display = "none";
			showcnv.style.display = "block";
		}
	} else {
		document.getElementById("tier").value = 3;
		displayTier1.style.display = "none";
		displayTier2.style.display = "none";
		displayTier3.style.display = "flex";
		if(servicetype == "TMC"){
			settmc1.style.display = "none";
			settmc2.style.display = "none";
			settmc3.style.display = "flex";
			setatr1.style.display = "none";
			setatr2.style.display = "none";
			setatr3.style.display = "none";
			setcnv1.style.display = "none";
			setcnv2.style.display = "none";
			setcnv3.style.display = "none";
			setoth.style.display = "none";
			showtmc.style.display = "flex";
			showatr.style.display = "none";
			showcnv.style.display = "none";
		}else if(servicetype == "ATR"){
			settmc1.style.display = "none";
			settmc2.style.display = "none";
			settmc3.style.display = "none";
			setatr1.style.display = "none";
			setatr2.style.display = "none";
			setatr3.style.display = "flex";
			setcnv1.style.display = "none";
			setcnv2.style.display = "none";
			setcnv3.style.display = "none";
			setoth.style.display = "none";
			showtmc.style.display = "none";
			showatr.style.display = "block";
			showcnv.style.display = "none";
		}else if(servicetype == "CNV"){
			settmc1.style.display = "none";
			settmc2.style.display = "none";
			settmc3.style.display = "none";
			setatr1.style.display = "none";
			setatr2.style.display = "none";
			setatr3.style.display = "none";
			setcnv1.style.display = "none";
			setcnv2.style.display = "none";
			setcnv3.style.display = "flex";
			setoth.style.display = "none";
			showtmc.style.display = "none";
			showatr.style.display = "none";
			showcnv.style.display = "block";
		}
	}
}

function setTMC(){
	var tr = document.getElementById("tier").value;

	document.getElementById("stype").value = "TMC";

	if(tr == 1){
		settmc1.style.display = "flex";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else if(tr == 2){
		settmc1.style.display = "none";
		settmc2.style.display = "flex";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else{
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "flex";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}
	showtmc.style.display = "flex";
	showatr.style.display = "none";
	showcnv.style.display = "none";
}

function setATR(){
	var tr = document.getElementById("tier").value;
	document.getElementById("stype").value = "ATR";
	if(tr == 1){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "flex";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else if(tr == 2){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "flex";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else{
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "flex";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}
	showtmc.style.display = "none";
	showatr.style.display = "block";
	showcnv.style.display = "none";
}

function setCNV(){
	var tr = document.getElementById("tier").value;
	document.getElementById("stype").value = "CNV";
	if(tr == 1){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "flex";
		setcnv2.style.display = "none";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else if(tr == 2){
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "flex";
		setcnv3.style.display = "none";
		setoth.style.display = "none";
	}else{
		settmc1.style.display = "none";
		settmc2.style.display = "none";
		settmc3.style.display = "none";
		setatr1.style.display = "none";
		setatr2.style.display = "none";
		setatr3.style.display = "none";
		setcnv1.style.display = "none";
		setcnv2.style.display = "none";
		setcnv3.style.display = "flex";
		setoth.style.display = "none";
	}
	showtmc.style.display = "none";
	showatr.style.display = "none";
	showcnv.style.display = "block";
}

function setOTH(){
	document.getElementById("stype").value = "OTH";
	settmc1.style.display = "none";
	settmc2.style.display = "none";
	settmc3.style.display = "none";
	setatr1.style.display = "none";
	setatr2.style.display = "none";
	setatr3.style.display = "none";
	setcnv1.style.display = "none";
	setcnv2.style.display = "none";
	setcnv3.style.display = "none";
	setoth.style.display = "flex";
}
/*calcTMC To Be Finished*/
function calcTmc(){
	var tr = document.getElementById("tier").value;
	var prson = document.getElementById("nperson").value;
	var day = document.getElementById("ndays").value;
	var hour = document.getElementById("nhour").value;
	var total = 0;
	var fttotal = 0;
	var addp = 0;
	var h2;
	var h2p;
	var h3;
	var h3p;
	var h4;
	var h4h; 
	var h4p;
	var h4hp
	var ft;

	if(tr == 1){
		h2 = 150;
		h2p = 95;
		h3 = 215;
		h3p = 135;
		h4 = 275;
		h4h = 65;
		h4p = 170;
		h4hp = 40;
		ft = 80;

	}else if(tr == 2){
		h2 = 170;
		h2p = 110;
		h3 = 235;
		h3p = 145;
		h4 = 295;
		h4h = 70;
		h4p = 190;
		h4hp = 45;
		ft = 85;
	}else{
		h2 = 200;
		h2p = 120;
		h3 = 270;
		h3p = 165;
		h4 = 330;
		h4h = 80;
		h4p = 215;
		h4hp = 50;
		ft= 90;
	}

	if(hour == 2){
		total = h2 + (h2p * (prson - 1));
		fttotal = h2;
	}else if(hour == 3){
		total = h3 + (h3p * (prson - 1));
		fttotal = h3;
	}else if(hour == 4){
		total = h4 + (h4p * (prson - 1));
		fttotal = h4;
	}else if(hour > 4){
		total = h4 + (h4p * (prson - 1)) + (h4hp * (hour - 4) * (prson - 1));
		fttotal = h4 + (ft * (hour - 4))
	}

	document.getElementById("tprice").value = total.toFixed(2);
	document.getElementById("ftprice").value = fttotal.toFixed(2);

}