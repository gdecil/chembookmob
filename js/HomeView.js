var HomeView = function (service, server) {
	var employeeListView;

    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
               
        employeeListView = new EmployeeListView(server);
        this.render()
    };

    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(employeeListView.$el);
        return this;
    }
    
    this.findByName = function() {
        service.findByName($('.search-key').val()).done(function(employees) {
            employeeListView.setEmployees(eval('(' + employees + ')'));
        });
    };

    this.initialize();
    
}
