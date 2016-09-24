function iniMapOnPage(strMapSectionId, strMapCenter){
	var map = new BMap.Map(strMapSectionId);
	map.centerAndZoom(strMapCenter,15);
	map.enableScrollWheelZoom(true);
	markPoint(strMapSectionId);
}

function getCoordinate(strAddress, callBackFunc, strMapSectionId){
	var map = new BMap.Map();
	var local = new BMap.LocalSearch(map, 
		{pageCapacity:1,
		 onSearchComplete:function(result){
			  var point = result.wr[0].point;
			  var myGeo1 = new BMap.Geocoder();
			  myGeo1.getLocation(point, function(objAddress){
				  if ($.isFunction(callBackFunc)) {
					  callBackFunc(objAddress, strMapSectionId);
				  }
			  })
		  },
		}
	);
	
    local.search(strAddress);
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

function markPoint(strMapSectionId, mapCenter, address) {
	if (address === undefined) {
		var map = new BMap.Map(strMapSectionId);
		map.enableScrollWheelZoom(true);
		map.centerAndZoom(mapCenter,15);
	} else if (typeof address == 'string') {
		getCoordinate(address, showMapWithPoint, strMapSectionId);
	} else {
		showMapWithPoint(address);
	}
}

function showMapWithPoint(addressComponent, strMapSectionId){
	if (addressComponent !== null) {
		var pt = addressComponent.point;
		var map = new BMap.Map(strMapSectionId);
		map.enableScrollWheelZoom(true);
		map.centerAndZoom(pt, 15);				
		var marker = new BMap.Marker(pt);  // 创建标注
		map.addOverlay(marker);
	} else {
		alert('没有解析到地址');
	}
}