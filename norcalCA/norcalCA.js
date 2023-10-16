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
	var servicetype = document.getElementById("stype").value;
	document.getElementById("tier").value = 1;
	displayHeader();
	displayTier1.style.display = "flex";
	document.getElementById("milage").value = "";
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
	calcTmc();
	calcAtr();
	calcCnv();
}

function setTier2(){
	var servicetype = document.getElementById("stype").value;
	document.getElementById("tier").value = 2;
	displayHeader();
	displayTier2.style.display = "flex";
	
	document.getElementById("milage").value = "";
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
	calcTmc();
	calcAtr();
	calcCnv();
}

function setTier3(){
	var servicetype = document.getElementById("stype").value;
	document.getElementById("tier").value = 3;
	displayHeader();
	displayTier3.style.display = "flex";
	document.getElementById("milage").value = "";
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
	calcTmc();
	calcAtr();
	calcCnv();
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
	} else if(ml < 70){
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
		h2 = 180;
		h2p = 90;
		h3 = 240;
		h3p = 125;
		h4 = 295;
		h4h = 70;
		h4p = 150;
		h4hp = 40;
		ft = 75;

	}else if(tr == 2){
		h2 = 210;
		h2p = 115;
		h3 = 270;
		h3p = 155;
		h4 = 325;
		h4h = 75;
		h4p = 195;
		h4hp = 50; 
		ft = 80;
	}else{
		h2 = 240;
		h2p = 135;
		h3 = 300;
		h3p = 185;
		h4 = 350;
		h4h = 80;
		h4p = 240;
		h4hp = 60;
		ft= 95;
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
	document.getElementById("ftprice").value = fttotal * 10;

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
		vln = 105;
		vlnp = 55;
		cosn = 155;
		cosnp = 70;
		casn = 175;
		casnp = 80;
		cosl = 205;
		coslp = 90;
		casl = 220;
		caslp = 105;
		vlf = 210;
		vlfp = 110;
		cosf = 310;
		cosfp = 140;
		casf = 350;
		casfp = 160;
	}else if(tr == 2){
		vln = 120;
		vlnp = 60;
		cosn = 175;
		cosnp = 80;
		casn = 190;
		casnp = 90;
		cosl = 240;
		coslp = 105;
		casl = 255;
		caslp = 115;
		vlf = 240;
		vlfp = 120;
		cosf = 350;
		cosfp = 160;
		casf = 380;
		casfp = 180;
	}else if(tr == 3){
		vln = 140;
		vlnp = 70;
		cosn = 195;
		cosnp = 90;
		casn = 210;
		casnp = 105;
		cosl = 270;
		coslp = 115;
		casl = 285;
		caslp = 125;
		vlf = 280;
		vlfp = 140;
		cosf = 390;
		cosfp = 180;
		casf = 420;
		casfp = 210;
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
		camins = 215;
		caminsp = 85;
		caminsfw = 430;
		caminsfwp = 170;
	}else if(tr == 2){
		camins = 250;
		caminsp = 105;
		caminsfw = 500;
		caminsfwp = 210;
	}else if(tr == 3){
		camins = 295;
		caminsp = 120;
		caminsfw = 590;
		caminsfwp = 240;
	}

	if(rtype == "NORMAL"){
		caminsprice = camins + (caminsp * (nd - 1));
	}else if(rtype == "FREEWAY"){
		caminsprice = caminsfw + (caminsfwp * (nd - 1));
	}

	vidrev = 35 * nd * nh / ws;

	document.getElementById("ciprice").value = caminsprice;
	document.getElementById("vrprice").value = vidrev;
	document.getElementById("totalprice").value = caminsprice + vidrev;
}
