
// var opts = {
// 	element:'.tab',
// 	cartSelector:'.header',
// 	contentSelector:'.content',
// 	activeClassName:'active',
// 	currentClassName:'current'
// }

var Tab = function(options) {
	var defaultOpts = {
		element:'.tab',
		cartSelector:'.header',
		contentSelector:'.content',
		activeClassName:'active',
		currentClassName:'current'
	};
	var opts = Object.assign({},defaultOpts,options)
	var that = this;
	that.index = 1;
	this.events = {};
	this.init(opts);
	
    this.tab = document.querySelector(this.element)
 	
    this.tabCart = this.tab.querySelectorAll(this.cartSelector+' li')
    
    this.contentCart = this.tab.querySelectorAll(this.contentSelector+' li')

    this.header = this.tab.children[0]
    
   
   this.header.addEventListener('click',function(e){
   		that.clickfn(e)
   })
}
Tab.prototype.init = function(options){
	for (var key in options){
		this[key] = options[key];
		
	}
};

Tab.prototype.clickfn = function(e){

	var that = this
	
    that.index = [].indexOf.apply(that.tabCart, [e.target])

    that.tabCart[that.index].classList.add(that.activeClassName)

    for (var i = 0; i < that.tabCart.length; i++) {
        if (that.tabCart[i] != that.tabCart[that.index]) {
            that.tabCart[i].classList.remove(that.activeClassName)
           
        }
    }

    that.contentCart[that.index].classList.add(that.currentClassName)

    for (var i = 0; i < that.contentCart.length; i++) {
        if (that.contentCart[i] != that.contentCart[that.index]) {
            that.contentCart[i].classList.remove(that.currentClassName)

        }
    }
}

export{Tab}
