var PageListView = function () {

    var pages;

    this.initialize = function() {
    };

    this.setPages = function(node, list) {
    	pages = list;
        this.render(node);
    }

    this.render = function(node) {
    	$('#' + node.innerText + ' .table-view.pages').remove();
    	if (pages.title != "No Records"){
        	$('#' + node.innerText).append(this.template(pages))    		
    	}
        return this;
    };

    this.initialize();

}