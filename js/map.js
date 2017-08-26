var container = document.getElementById('map-container');
var options = {
    center: new daum.maps.LatLng(37.404230, 127.111731),
    level: 5,
    scrollwheel: true,
    disableDoubleClickZoom: true
};

var map = new daum.maps.Map(container, options);

var zoomControl = new daum.maps.ZoomControl();
map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

var marker = new daum.maps.Marker({
    position: map.getCenter()
});
marker.setMap(map);
