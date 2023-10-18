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
let bt = document.querySelector(".boxt");

function showNote(){
	displayNote.style.display = "block";
	btton.style.display = "none";
}

function closeNote(){
	displayNote.style.display = "none";
	btton.style.display = "block";
}

function setTierItems(){
	settmc1.style.display = "none";
	settmc2.style.display = "none";
	settmc3.style.display = "none";
	setatr1.style.display = "none";
	setatr2.style.display = "none";
	setatr3.style.display = "none";
	setcnv1.style.display = "none";
	setcnv2.style.display = "none";
	setcnv3.style.display = "none";
	setoth.style.display = "none";
}

function showSvcType(){
	showtmc.style.display = "none";
	showatr.style.display = "none";
	showcnv.style.display = "none";
}

function displayHeader(){
	displayTier1.style.display = "none";
	displayTier2.style.display = "none";
	displayTier3.style.display = "none";
}

function showTMC(){
	var tr = document.getElementById("tier").value;

	showSvcType();
	showtmc.style.display = "flex";
	
	if(tr == 1){
		setTierItems();
		settmc1.style.display = "flex";
	}else if(tr == 2){
		setTierItems();
		settmc2.style.display = "flex";
	}else{
		setTierItems();
		settmc3.style.display = "flex";
	}
	document.getElementById("stype").value = "TMC";
}

function showATR(){
	var tr = document.getElementById("tier").value;

	showSvcType();
	showatr.style.display = "block";
	
	if(tr == 1){
		setTierItems();
		setatr1.style.display = "flex";
	}else if(tr == 2){
		setTierItems();
		setatr2.style.display = "flex";
	}else{
		setTierItems();
		setatr3.style.display = "flex";
	}
	document.getElementById("stype").value = "ATR";
}

function showCNV(){
	var tr = document.getElementById("tier").value;

	showSvcType();
	showcnv.style.display = "block";

	if(tr == 1){
		setTierItems();
		setcnv1.style.display = "flex";
	}else if(tr == 2){
		setTierItems();
		setcnv2.style.display = "flex";
	}else{
		setTierItems();
		setcnv3.style.display = "flex";
	}
	document.getElementById("stype").value = "CNV";
}

function setTier1(){
	var nloc = document.getElementById("numloc").value;
	var servicetype = document.getElementById("stype").value;
	document.getElementById("tier").value = 1;
	bt.style.backgroundColor = "green";
	document.getElementById("tier-color").value = "Green";
	var total = 0;
	displayHeader();
	displayTier1.style.display = "flex";
	if(servicetype == "TMC"){
		setTierItems();
		settmc1.style.display = "flex";
		showSvcType();
		showtmc.style.display = "flex";
	}else if(servicetype == "ATR"){
		setTierItems();
		setatr1.style.display = "flex";
		showSvcType();
		showatr.style.display = "block";
	}else if(servicetype == "CNV"){
		setTierItems();
		setcnv1.style.display = "flex";
		showSvcType();
		showcnv.style.display = "block";
	}

	if(nloc <= 10){
		total = 30;
	}else if(nloc <= 19){
		total = 50;
	}else if(nloc >= 20){
		total = 70;
	}

	document.getElementById("fs2").value = total;

	calcTmc();
	calcAtr();
	calcCnv();
}

function setTier2(){
	var nloc = document.getElementById("numloc").value;
	var servicetype = document.getElementById("stype").value;
	document.getElementById("tier").value = 2;
	bt.style.backgroundColor = "orange";
	document.getElementById("tier-color").value = "Orange";
	var total = 0;
	displayHeader();
	displayTier2.style.display = "flex";
	if(servicetype == "TMC"){
		setTierItems();
		settmc2.style.display = "flex";
		showSvcType();
		showtmc.style.display = "flex";
	}else if(servicetype == "ATR"){
		setTierItems();
		setatr2.style.display = "flex";
		showSvcType();
		showatr.style.display = "block";
	}else if(servicetype == "CNV"){
		setTierItems();
		setcnv2.style.display = "flex";
		showSvcType();
		showcnv.style.display = "block";
	}

	if(nloc <=10){
		total = 40;
	}else if(nloc <= 19){
		total = 60;
	}else if(nloc >= 20){
		total = 80;
	}

	document.getElementById("fs2").value = total;

	calcTmc();
	calcAtr();
	calcCnv();
}

function setTier3(){
	var nloc	= document.getElementById("numloc").value;
	var servicetype = document.getElementById("stype").value;
	document.getElementById("tier").value = 3;
	bt.style.backgroundColor = "red";
	document.getElementById("tier-color").value = "Red";
	var total = 0;
	displayHeader();
	displayTier3.style.display = "flex";
	if(servicetype == "TMC"){
		setTierItems();
		settmc3.style.display = "flex";
		showSvcType();
		showtmc.style.display = "flex";
	}else if(servicetype == "ATR"){
		setTierItems();
		setatr3.style.display = "flex";
		showSvcType();
		showatr.style.display = "block";
		alert("atr");
	}else if(servicetype == "CNV"){
		setTierItems();
		setcnv3.style.display = "flex";
		showSvcType();
		showcnv.style.display = "block";
	}

	if(nloc <= 10){
		total = 50;
	}else if(nloc <= 19){
		total = 70;
	}else if(nloc >= 20){
		total = 80;
	}

	document.getElementById("fs2").value = total;

	calcTmc();
	calcAtr();
	calcCnv();
}

function getTier(){
	var tc = document.getElementById("tier-color").value;
	var servicetype = document.getElementById("stype").value;
	var nloc = document.getElementById("numloc").value;
	var total = 0;

	if(tc == "Green" && nloc <= 10){
		total = 30;
	}else if(tc == "Green" && nloc <= 19){
		total = 50;
	}else if(tc == "Green" && nloc >= 20){
		total = 70;
	}else if(tc == "Orange" && nloc <= 10){
		total = 40;
	}else if(tc == "Orange" && nloc <= 19){
		total = 60;
	}else if(tc == "Orange" && nloc >= 20){
		total = 80;
	}else if(tc == "Red" && nloc <= 10){
		total = 50;
	}else if(tc == "Red" && nloc <= 19){
		total = 70;
	}else if(tc == "Red" && nloc >= 20){
		total = 80;
	}

	document.getElementById("fs2").value = total;


	if(tc == "Green"){
		document.getElementById("tier").value = 1;
		displayHeader();
		displayTier1.style.display = "flex";
		if(servicetype == "TMC"){
			setTierItems();
			settmc1.style.display = "flex";
			showSvcType();
			showtmc.style.display = "flex";
		}else if(servicetype == "ATR"){
			setTierItems();
			setatr1.style.display = "flex";
			showSvcType();
			showatr.style.display = "block";
		}else if(servicetype == "CNV"){
			setTierItems();
			setcnv1.style.display = "flex";
			showSvcType();
			showcnv.style.display = "block";
		}
		bt.style.backgroundColor = "green";
	} else if(tc == "Orange"){
		document.getElementById("tier").value = 2;
		displayHeader();
		displayTier2.style.display = "flex";

		if(servicetype == "TMC"){
			setTierItems();
			settmc2.style.display = "flex";
			showSvcType();
			showtmc.style.display = "flex";
		}else if(servicetype == "ATR"){
			setTierItems();
			setatr2.style.display = "flex";
			showSvcType();
			showatr.style.display = "block";
		}else if(servicetype == "CNV"){
			setTierItems();
			setcnv2.style.display = "flex";
			showSvcType();
			showcnv.style.display = "block";
		}
		bt.style.backgroundColor = "orange";
	} else {
		document.getElementById("tier").value = 3;
		displayHeader();
		displayTier3.style.display = "flex";
		if(servicetype == "TMC"){
			setTierItems();
			settmc3.style.display = "flex";
			showSvcType();
			showtmc.style.display = "flex";
		}else if(servicetype == "ATR"){
			setTierItems();
			setatr3.style.display = "flex";
			showSvcType();
			showatr.style.display = "block";
		}else if(servicetype == "CNV"){
			setTierItems();
			setcnv3.style.display = "flex";
			showSvcType();
			showcnv.style.display = "block";
		}
		bt.style.backgroundColor = "red";
	}
	calcTmc();
	calcAtr();
	calcCnv();
}

function setTMC(){
	var tr = document.getElementById("tier").value;

	document.getElementById("stype").value = "TMC";

	if(tr == 1){
		setTierItems();
		settmc1.style.display = "flex";
	}else if(tr == 2){
		setTierItems();
		settmc2.style.display = "flex";
	}else{
		setTierItems();
		settmc3.style.display = "flex";
	}
	showSvcType();
	showtmc.style.display = "flex";
}

function setATR(){
	var tr = document.getElementById("tier").value;
	document.getElementById("stype").value = "ATR";
	if(tr == 1){
		setTierItems();
		setatr1.style.display = "flex";
	}else if(tr == 2){
		setTierItems();
		setatr2.style.display = "flex";
	}else{
		setTierItems();
		setatr3.style.display = "flex";
	}
	showSvcType();
	showatr.style.display = "block";
}

function setCNV(){
	var tr = document.getElementById("tier").value;
	document.getElementById("stype").value = "CNV";
	if(tr == 1){
		setTierItems();
		setcnv1.style.display = "flex";
	}else if(tr == 2){
		setTierItems();
		setcnv2.style.display = "flex";
	}else{
		setTierItems();
		setcnv3.style.display = "flex";
	}
	showSvcType();
	showcnv.style.display = "block";
}

function setOTH(){
	document.getElementById("stype").value = "OTH";
	setTierItems();
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
		h2 = 130;
		h2p = 70;
		h3 = 160;
		h3p = 105;
		h4 = 195;
		h4h = 45;
		h4p = 140;
		h4hp = 35;
		ft = 60;

	}else if(tr == 2){
		h2 = 175;
		h2p = 105;
		h3 = 210;
		h3p = 135;
		h4 = 260;
		h4h = 60;
		h4p = 180;
		h4hp = 45; 
		ft = 65;
	}else{
		h2 = 200;
		h2p = 120;
		h3 = 245;
		h3p = 150;
		h4 = 290;
		h4h = 65;
		h4p = 200;
		h4hp = 50;
		ft= 75;
	}

	if(hour == 2){
		total = (h2 + (h2p * (prson - 1))) * day;
		fttotal = h2;
	}else if(hour == 3){
		total = (h3 + (h3p * (prson - 1))) * day;
		fttotal = h3;
	}else if(hour == 4){
		total = (h4 + (h4p * (prson - 1))) * day;
		fttotal = h4;
	}else if(hour > 4){
		total = (h4 + (h4p * (prson - 1)) + (h4hp * (hour - 4) * (prson - 1)) + (h4h * (hour - 4))) * day;
		fttotal = h4 + (ft * (hour - 4));
	}

	document.getElementById("tprice").value = total;
	document.getElementById("ftprice").value = fttotal * day;

}

function calcAtr(){

	var tr = document.getElementById("tier").value;
	var ctype = document.getElementById("c-type").value;
	var rtype = document.getElementById("r-type").value;
	var nd = document.getElementById("atrNdays").value;
	var price =  0;
	
	var vln = 0;   
	var vlnp = 0;
	var cosn = 0;
	var cosnp = 0;
	var casn = 0;
	var casnp = 0;
	var cosl = 0;
	var coslp = 0;
	var casl = 0;
	var caslp = 0;
	var vlf = 0;
	var vlfp = 0;
	var cosf = 0;
	var cosfp = 0;
	var casf = 0;
	var casfp = 0;

	if(tr == 1){
		vln = 90;
		vlnp = 45;
		cosn = 115;
		cosnp = 55;
		casn = 145;
		casnp = 85;
		cosl = 165;
		coslp = 65;
		casl = 195;
		caslp = 95;
		vlf = 180;
		vlfp = 90;
		cosf = 230;
		cosfp = 110;
		casf = 290;
		casfp = 170;
	}else if(tr == 2){
		vln = 110;
		vlnp = 55;
		cosn = 130;
		cosnp = 65;
		casn = 160;
		casnp = 95;
		cosl = 190;
		coslp = 75;
		casl = 210;
		caslp = 105;
		vlf = 220;
		vlfp = 110;
		cosf = 260;
		cosfp = 130;
		casf = 320;
		casfp = 190;
	}else if(tr == 3){
		vln = 135;
		vlnp = 65;
		cosn = 145;
		cosnp = 70;
		casn = 175;
		casnp = 100;
		cosl = 215;
		coslp = 90;
		casl = 245;
		caslp = 120;
		vlf = 270;
		vlfp = 130;
		cosf = 290;
		cosfp = 140;
		casf = 350;
		casfp = 200;
	}

	if(ctype == "Volume" && rtype == "Normal"){
		price = vln + (vlnp * (nd - 1));
	}else if(ctype == "Class / Speed" && rtype == "Normal"){
		price = cosn + (cosnp * (nd - 1));
	}else if(ctype == "Class & Speed" && rtype == "Normal"){
		price = casn + (casnp * (nd - 1));
	}else if(ctype == "Class / Speed" && rtype == "Large"){
		price = cosl + (coslp * (nd - 1));
	}else if (ctype == "Class & Speed" && rtype == "Large"){
		price = casl + (caslp * (nd - 1));
	}else if(ctype == "Volume" && rtype == "Freeway"){
		price = vlf + (vlfp * (nd - 1));
	}else if(ctype == "Class / Speed" && rtype == "Freeway"){
		price = cosf + (cosfp * (nd - 1));
	}else if(ctype == "Class & Speed" && rtype == "Freeway"){
		price = casf + (casfp * (nd - 1));
	}

	document.getElementById("atrprice").value = price;
}

function calcCnv(){
	var tr = document.getElementById("tier").value;
	var rtype = document.getElementById("roadtype").value;
	var nd = document.getElementById("numdays").value;
	var nh = document.getElementById("numhours").value;
	var ws = document.getElementById("wspeed").value;
	var camins = 0;
	var caminsp = 0;
	var caminsfw = 0;
	var caminsfwp = 0;
	var caminsprice = 0;
	var vidrev = 0;

	if (tr == 1){
		camins = 175;
		caminsp = 65;
		caminsfw = 350;
		caminsfwp = 130;
	}else if(tr == 2){
		camins = 235;
		caminsp = 100;
		caminsfw = 470;
		caminsfwp = 200;
	}else if(tr == 3){
		camins = 295;
		caminsp = 150;
		caminsfw = 590;
		caminsfwp = 300;
	}

	if(rtype == "NORMAL"){
		caminsprice = camins + (caminsp * (nd - 1));
	}else if(rtype == "FREEWAY"){
		caminsprice = caminsfw + (caminsfwp * (nd - 1));
	}

	vidrev = 30 * nd * nh / ws;

	document.getElementById("ciprice").value = caminsprice;
	document.getElementById("vrprice").value = vidrev;
	document.getElementById("totalprice").value = caminsprice + vidrev;
}