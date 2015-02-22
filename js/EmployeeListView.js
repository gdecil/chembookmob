var EmployeeListView = function () {

    var employees;
    var node;
    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.setEmployees = function(list) {
        employees = list;
        this.render();
        $(".media-body p").click(function(){
        	var service = new EmployeeService();
        	node = this.parentElement
            service.findNotebooks(this.innerHTML).done(function(notebooks) {
            	var notelist = new NotebookListView();
            	notelist.setNotebooks(node, eval('(' + notebooks + ')'));
            });

	    });        
    }

    this.render = function() {
        this.$el.html(this.template(employees));
        return this;
    };

    this.initialize();

}
