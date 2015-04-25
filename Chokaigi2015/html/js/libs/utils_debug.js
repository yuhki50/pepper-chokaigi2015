/**********************************************************************
 * A few debug utility functions, that mostly add a debug log on tablet.
 *********************************************************************/

function log(line) {
	if (console) {
		console.log(line);
	}
	$("#debuglog").append("<div>" + line + "</div>");
}

window.DEBUG_LOG_ALLOWED = false;
window.OPEN_DEBUG_ON_ERROR = true;

$(function () {
	// Set this to true if you want debug

	function log_red(line) {
		var div = $("<div>").css("color", "red").html(line);
		$("#debuglog").append(div);
	}

	var lastErrorUrl = null;
    window.onerror = function (message, url, ln) {
		if (($("#debuglog").length == 0) && window.OPEN_DEBUG_ON_ERROR) {
			toggleDebugBox();
		}
		if ($("#debuglog").length) {
			if (url !== lastErrorUrl) {
				log_red("Errors in " + url);
				lastErrorUrl = url;
			}
			log_red("[ERR] " + ln + ": " + message);
		}
        return false;
    }
	
	function toggleDebugBox() {
		if ($("#debugbox").length == 0) {
			var div = $("<div>").attr("id", "debugbox");
			var style = {	"left": "0px",
							"bottom": "0px",
							"width": "500px",
							"position": "fixed",
							"background-color": "white",
							}
			div.css(style).html('<div id="debuglog"></div><button id="cleardebuglog">Clear log</button>');
			div.appendTo("body");
			$("#cleardebuglog").mousedown(function(){
				$("#debuglog").html("");
				lastErrorUrl = null;
			});
		} else {
			$("#debugbox").toggle();
		}
		
	}

	// Special: magic corner click.
	$("body").mousedown(function(event) {
		var portionX = (1.0 * event.clientX) / window.innerWidth;
		var portionY = (1.0 * event.clientY) / window.innerHeight;
		if ((portionX > 0.8) && (portionY > 0.6) && window.DEBUG_LOG_ALLOWED) {
			toggleDebugBox();
		}
	});
});
