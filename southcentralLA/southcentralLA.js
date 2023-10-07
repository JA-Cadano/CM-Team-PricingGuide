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
