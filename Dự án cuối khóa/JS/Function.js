function luotDi(){
	var Temp = document.getElementById("iCoDen").src;
	document.getElementById("iCoDen").src = document.getElementById("iCoTrang").src;
	document.getElementById("iCoTrang").src = Temp;
}

function getDiem(Name){
	switch(Name){
		case 'Xe':
			return 5;
		break;
		
		case 'Ma':
			return 3;
		break;
		
		case 'Tuong':
			return 3;
		break;
		
		case 'Hau':
			return 9;
		break;
		
		case 'Vua':
			return 100;
		break;
		
		case 'Tot':
			return 1;
		break;
		
		default:
			return 0;
		break;
	}
}

function doiMau(X, Y){
	document.getElementById(X.toString() + Y.toString()).style.backgroundColor = "#F6CD61";
}

function GetColor(id){
	var rgb = document.getElementById(id).style.backgroundColor;
	var Temp = rgb.substring(rgb.indexOf('(') + 1, rgb.length - 1);
	while(Temp.indexOf(' ') != -1){
		Temp = Temp.replace(" ", "");
	}
	return Temp; //rgb
}

function getName(id){
	try{
		var src = document.getElementById("i" + id).src;
		var Ten = src.substring(src.lastIndexOf('/') + 1, src.length - 4);
		return Ten;
	}catch(err){
		return err;
	}
}

function isChieuVua(Name){
	return Name.localeCompare("Vua") == 0 ? true : false;
}

function isCoTrang(X, Y){
	var Temp = getName(X.toString() + Y);
	Temp = Temp.substring(Temp.indexOf('_') + 1 , Temp.length);
	return Temp.localeCompare("Trang") == 0 ? true : false;
}

function isCoDen(X, Y){
	var Temp = getName(X.toString() + Y);
	Temp = Temp.substring(Temp.indexOf('_') + 1 , Temp.length);
	return Temp.localeCompare("Den") == 0 ? true : false;
}

function isRong(X, Y){
	var Temp = getName(X.toString() + Y);
	Temp = Temp.substring(Temp.indexOf('_') + 1 , Temp.length);
	return Temp.localeCompare("Rong") == 0 ? true : false;
}

function isBien(X, Y){
	if(X < 1 || X > 8)
		return true;
	else if(Y < 1 || Y > 8)
		return true;
	else
		return false;
}

function diChuyen(id, idMoi) {
    if (id.localeCompare(idMoi) === 0 || GetColor(idMoi).localeCompare(Mau.NuocDi) !== 0)
        return false;

    var hinhCo = document.getElementById("i" + id).src;
    document.getElementById("i" + idMoi).src = hinhCo;
    document.getElementById("i" + id).src = CoDen.Rong;
    return true;

}

