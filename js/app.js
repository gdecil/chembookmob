// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
//	compiled version of the templates
	
	HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
	EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
	NotebookListView.prototype.template = Handlebars.compile($("#notebook-list-tpl").html());
	PageListView.prototype.template = Handlebars.compile($("#page-list-tpl").html());
	PageView.prototype.template = Handlebars.compile($("#page-tpl").html());

	var slider = new PageSlider($('body'));
	
	var service = new EmployeeService();
    service.initialize().done(function () {
    	router.addRoute('', function() {
    	      slider.slidePage(new HomeView(service).render().$el);
    	  });

	  router.addRoute('page/:id', function(id) {
//    		  alert(id)
	      service.getExperiment(id).done(function(experiment) {
	    	  var nbs =eval('(' + experiment + ')');
	    	  var nbsv = new PageView(nbs);
	    	  slider.slidePage(nbsv.render().$el);
//    	          slider.slidePage(new EmployeeView(eval('(' + experiment + ')')).render().$el);
	    	  var sql = "<a href='#'><img src='http://217.220.17.147:8080/render?idReaction=" + nbs[0].rxn_scheme_key + "'></a>"
	    	  $('.content').append(sql)
	      });
	  });

    	  router.start();
    	  
//    	$('body').html(new HomeView(service).render().$el);
    });
    /* --------------------------------- Event Registration -------------------------------- */

    document.addEventListener('deviceready', function () {
    	StatusBar.overlaysWebView( false );
    	StatusBar.backgroundColorByHexString('#ffffff');
    	StatusBar.styleDefault();
    	FastClick.attach(document.body);
    	  if (navigator.notification) { // Override default HTML alert with native dialog
    	      window.alert = function (message) {
    	          navigator.notification.alert(
    	              message,    // message
    	              null,       // callback
    	              "Workshop", // title
    	              'OK'        // buttonName
    	          );
    	      };
    	  }
    	}, false);   		
    
    /* ---------------------------------- Local Functions ---------------------------------- */

}());