$(document).ready(function(){var e="1000000000000000000000",o=.8;medium_zoom=mediumZoom("[data-zoomable]",{background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"}),medium_zoom.on("open",function(r){try{var n=r.target;n?(n.parentElement.style.zIndex=e,n.style.zIndex=e,n.style.scale=o,console.log("Zoom function is running with z-index:",e,"and scale:",o)):console.error("Error: zoomedElement is undefined.")}catch(t){console.error("Error:",t)}}),medium_zoom.on("close",function(e){try{var o=e.target;o?o.style.scale=1:console.error("Error: zoomedElement is undefined.")}catch(r){console.error("Error:",r)}})});