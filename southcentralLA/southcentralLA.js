let displayNote = document.querySelector(".popup");
let btton = document.querySelector(".btn");
let showtmc = document.querySelector(".tmc-input");
let showatr = document.querySelector(".atr-input");
let showcnv = document.querySelector(".cnv-input");
let displayTier1 = document.querySelector(".hdr1");
let displayTier2 = document.querySelector(".hdr2");
let displayTier3 = document.querySelector(".hdr3");


function showNote(){
	displayNote.style.display = "block";
	btton.style.display = "none";
}

function closeNote(){
	displayNote.style.display = "none";
	btton.style.display = "block";
}

function showTMC(){
	showtmc.style.display = "flex";
	showatr.style.display = "none";
	showcnv.style.display = "none";
}

function showATR(){
	showtmc.style.display = "none";
	showatr.style.display = "block";
	showcnv.style.display = "none";
}

function showCNV(){
	showtmc.style.display = "none";
	showatr.style.display = "none";
	showcnv.style.display = "block";
}

function setTier1(){
	document.getElementById("tier").value = 1;
	displayTier1.style.display = "flex";
	displayTier2.style.display = "none";
	displayTier3.style.display = "none";
	document.getElementById("milage").value = "";
}

function setTier2(){
	document.getElementById("tier").value = 2;
	displayTier1.style.display = "none";
	displayTier2.style.display = "flex";
	displayTier3.style.display = "none";
	document.getElementById("milage").value = "";
}

function setTier3(){
	document.getElementById("tier").value = 3;
	displayTier1.style.display = "none";
	displayTier2.style.display = "none";
	displayTier3.style.display = "flex";
	document.getElementById("milage").value = "";
}

function getTier(){
	var ml = document.getElementById("milage").value;

	if(ml < 40){
		document.getElementById("tier").value = 1;
		displayTier1.style.display = "flex";
		displayTier2.style.display = "none";
		displayTier3.style.display = "none";
	} else if(ml < 70){
		document.getElementById("tier").value = 2;
		displayTier1.style.display = "none";
		displayTier2.style.display = "flex";
		displayTier3.style.display = "none";
	} else {
		document.getElementById("tier").value = 3;
		displayTier1.style.display = "none";
		displayTier2.style.display = "none";
		displayTier3.style.display = "flex";
	}
}
