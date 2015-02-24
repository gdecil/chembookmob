// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

	var server1 = window.location.protocol + "//" + window.location.host;
	var server = window.location.protocol + "//" + window.location.host;
	var serverWeb = window.location.protocol + "//" + window.location.host;
	var agent =navigator.userAgent;
//	var ip = IpAddress.get;
//	alert(ip)
//	var ip1 =networkinterface.getIPAddress;
//	alert(ip1)
//	networkinterface.getIPAddress(function (ip) { alert(ip); });

	
	if (server == "http://10.16.1.1"){				//produzione da interno
		server = "http://10.16.1.1:8080"
	}
	else if (server == "http://10.206.84.170"){		//sviluppo da nms
		server = "http://10.206.84.170:8080"
	}
	else if (server == "http://localhost"){			//sviluppo da casa
		server = "http://localhost:8080"
	}
	else if (server == "file://"){
		if (agent.indexOf("Android SDK") >=0 ){
			server = "http://192.168.122.1:8080"		//sviluppo da casa con simulatore			
			server = "http://10.206.84.170:8080"		//sviluppo da nms con simulatore
		}
		else	{
			server = "http://217.220.17.147:8080"		//produzione da esterno			
		}
	}
	else if (server == "http://192.168.122.1"){		//sviluppo da casa
		server = "http://192.168.122.1:8080"
	}
	else if (server == "http://217.220.17.147"){	//produzione da esterno
		server = "http://217.220.17.147:8080"
	}
	else if (server == "http://127.0.0.1"){			//sviluppo da casa
		server = "http://10.0.2.15:8080"
	}
	else {
		server = "http://indigo-gdecil.rhcloud.com"
	}
	
    /* ---------------------------------- Local Variables ---------------------------------- */
//	compiled version of the templates
	var createHtml = new createHTML();
	
	HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
	EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
	NotebookListView.prototype.template = Handlebars.compile($("#notebook-list-tpl").html());
	PageListView.prototype.template = Handlebars.compile($("#page-list-tpl").html());
	PageView.prototype.template = Handlebars.compile(createHtml.Page(server));

	var slider = new PageSlider($('body'));
	
	var service = new EmployeeService(server);
    service.initialize().done(function () {
    	router.addRoute('', function() {
    	      slider.slidePage(new HomeView(service, server).render().$el);
    	      
    	      $('.content').append("Server: " + server)
//    	      $('.content').append("Server: " + agent)
    	  });

	  router.addRoute('page/:id', function(id) {
//    		  alert(id)
	      service.getExperiment(id).done(function(experiment) {
	    	  var nbs =eval('(' + experiment + ')');
	    	  var nbsv = new PageView(nbs);
	    	  slider.slidePage(nbsv.render().$el);
//    	          slider.slidePage(new EmployeeView(eval('(' + experiment + ')')).render().$el);
	    	  var sql = "<img id='noresizable' width='100%' height: '100%' src='" + server  + "/render?idReaction=" + nbs[0].rxn_scheme_key + "'>"
	    	  $('#imgcont').html(sql)
	    	  $('#imgcont').append("Server: " + server)
    	      $( "#resizable" ).resizable();
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