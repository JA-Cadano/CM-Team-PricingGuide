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

/* SHOW TIER BUTTON*/
function showHide1(){
	showTier1.style.display = "block";
	showTier2.style.display = "none";
	showTier3.style.display = "none";
}

function showHide2(){
	showTier2.style.display = "block";
	showTier1.style.display = "none";
	showTier3.style.display = "none";
}

function showHide3(){
	showTier3.style.display = "block";
	showTier2.style.display = "none";
	showTier1.style.display = "none";
} /*SHOW TIER BUTTON END*/

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
}
/*RIGHT SIDE FUNCTIONALITY END*/