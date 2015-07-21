(function() {
	var root = this

	function checkMouseTouch(){
		var ret = {}
		if(		('ontouchstart' in window)
				||(navigator.maxTouchPoints > 0)
				||(navigator.msMaxTouchPoints > 0)
		){
			ret.hasTouch = true

			var docEle = document.documentElement
			function onMouseOver(){
				ret.hasMouse = true
				docEle.removeEventListener('mouseover', onMouseOver)
			}
			docEle.addEventListener('mouseover', onMouseOver)
		} else {
			ret.hasTouch = false
			ret.hasMouse = true
		}
		return ret
	}

	// exports
	if (typeof exports != null) {
		if (typeof module != null && module.exports) {
			exports = module.exports = checkMouseTouch
		}
		exports.checkMouseTouch = checkMouseTouch
	} else {
		root.checkMouseTouch = checkMouseTouch
	}
}.call(this))