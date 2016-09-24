function iniMapOnPage(strMapSectionId, strMapCenter){
	var map = new BMap.Map(strMapSectionId);
	map.centerAndZoom(strMapCenter,15);
	map.enableScrollWheelZoom(true);	
}

function getCoordinate(strAddress, callBackFunc){
	var map = new BMap.Map();
	var myGeo = new BMap.Geocoder();
	myGeo.getPoint(strAddress,function(point, a){
		var map1 = new BMap.Map();
		var myGeo1 = new BMap.Geocoder();
		myGeo1.getLocation(point, function(objAddress){
			if ($.isFunction(callBackFunc)) {
				callBackFunc(objAddress);
			}
		})
	},"");
}

function getDistance(coodPoint1, coodPoint2, callBackFunc){
	var map = new BMap.Map();
	var myGeo = new BMap.Geocoder();
	myGeo.getPoint(strAddress,function(point){
		if ($.isFunction(callBackFunc)) {
			callBackFunc(point);
		}
	},"");
}