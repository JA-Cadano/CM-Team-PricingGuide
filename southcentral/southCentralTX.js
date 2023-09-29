let showTier1 = document.querySelector(".tier1");
let showTier2 = document.querySelector(".tier2");
let showTier3 = document.querySelector(".tier3");
let atr1 = document.querySelector(".atr-t1");
let atr2 = document.querySelector(".atr-t2");
let atr3 = document.querySelector(".atr-t3");
let tmc1 = document.querySelector(".tmc-1");

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
	tmc1.style.display = "none"
}

function showATR2(){
	atr1.style.display = "none";
	atr2.style.display = "block";
	atr3.style.display = "none";
	tmc1.style.display = "none"
}

function showATR3(){
	atr1.style.display = "none";
	atr2.style.display = "none";
	atr3.style.display = "block";
	tmc1.style.display = "none"
}
/*RIGHT SIDE FUNCTIONALITY END*/