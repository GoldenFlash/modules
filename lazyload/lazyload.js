function Lazyload(fn, height) {
	this.templete =
		`
            <div id= "lazyload" style="height:2px;width:2px"></div>
             `
	that = this;
	this.initEl()
	var el = document.querySelector('#lazyload')
	that.check(el, fn);
	window.addEventListener('scroll', function() {
		that.check(el, fn)
	})
};

Lazyload.prototype = {
	check: function(el, fn) {
		if (that.isIn(el)) {
			fn()
		}
	},
	isIn: function(el) {
		var windowHeight = document.documentElement.clientHeight;
		var elTop = el.offsetTop;
		// var elHeight = el.outerHeight();
		var scrollTop = document.documentElement.scrollTop;
		var total = windowHeight + scrollTop;
		// console.log(total)
		console.log(elTop)

		if (total - elTop >= 2) {
			return true;
		} else {
			return false;
		}
	},
	initEl: function() {
		var content = document.createElement('div');
		content.innerHTML = this.templete;
		document.body.appendChild(content);
	}
}
new Lazyload(function() {
	console.log(1)
}, )