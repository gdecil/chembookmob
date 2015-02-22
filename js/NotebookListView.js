var NotebookListView = function () {

    var notebooks;

    this.initialize = function() {
    };

    this.setNotebooks = function(node, list) {
    	notebooks = list;
        this.render(node);
        $("div.media-body.notebook").click(function(){
        	var service = new EmployeeService();
        	node = this
            service.findPages(this.innerText).done(function(pages) {
            	var pagelist = new PageListView();
            	pagelist.setPages(node, eval('(' + pages + ')'));
            });

	    });        

    }

    this.render = function(node) {
    	$('#' + node.id + ' .notebook').remove();
    	if (notebooks.title != "No Records"){
        	$('#' + node.id).append(this.template(notebooks))    		
    	}
//        this.$el.html(this.template(notebooks));
        return this;
    };

    this.initialize();

}