var createHTML = function () {

	this.initialize = function() {}
	
    this.Page = function(server) {
    	var html;
    	html = html + "<header class='bar bar-nav'> "
    	html = html + "<a class='btn btn-link btn-nav pull-left' href='#'>"
    	html = html + "<span class='icon icon-left-nav'></span>"
    	html = html + "</a>"
    	html = html + "<h1 class='title'>Experiment</h1>"
    	html = html + "</header>"
    	html = html + "<div class='content'>"
        
    	html = html + "<div class='card' id = '{{ rxn_scheme_key }}'>"
    	html = html + "<ul class='table-view'>"
        
    	html = html + "<li class='table-view-cell media'>"
    	html = html + "<a href='sms:{{ cellPhone }}' class='push-right'>"
    	html = html + "<span class='media-object pull-left icon icon-sms'></span>"
    	html = html + " <div class='media-body'>"
    	html = html + "     Title"
    	html = html + "     <p>{{ subject }}</p>"
    	html = html + " </div>"
    	html = html + "</a>"
    	html = html + "</li>"

    	html = html + "<li class='table-view-cell media'>"
    	html = html + "<img class='media-object pull-left emp-pic' src='assets/pics/{{id}}.jpg'>"
    	html = html + "<div class='media-body'>"
    	html = html + " Owner"
    	html = html + " <p> {{ batch_owner }}</p>"
    	html = html + "</div>"
    	html = html + "</li>"
        
    	html = html + "<li class='table-view-cell media'>"
    	html = html + "<a href='tel:{{ officePhone }}' class='push-right'>"
    	html = html + " <span class='media-object pull-left icon icon-call'></span>"
    	html = html + " <div class='media-body'>"
    	html = html + "     Experiment"
    	html = html + "     <p>{{ notebook }} {{ experiment }}</p>"
    	html = html + " </div>"
    	html = html + "</a>"
    	html = html + "</li>"
        
    	html = html + "<li class='table-view-cell media'>"
    	html = html + "<a href='tel:{{ cellPhone }}' class='push-right'>"
    	html = html + " <span class='media-object pull-left icon icon-call'></span>"
    	html = html + " <div class='media-body'>"
    	html = html + "     Creation Date"
    	html = html + "     <p>{{ creation_date }}</p>"
    	html = html + " </div>"
    	html = html + "</a>"
    	html = html + "</li>"
        
    	html = html + "<li class='table-view-cell media'>"
    	html = html + "<a href='mailto:{{ email }}' class='push-right'>"
    	html = html + " <span class='media-object pull-left icon icon-mail'></span>"
    	html = html + " <div class='media-body'>"
    	html = html + "     Yield"
    	html = html + "     <p>{{ yield }}</p>"
    	html = html + " </div>"
    	html = html + "</a>"
    	html = html + "</li>"
        
    	html = html + "<li class='table-view-cell media'>"
    	html = html + "<a href='" + server + "/render?idReaction={{ rxn_scheme_key }}' class='push-right'>"
    	html = html + " <span class='media-object pull-left icon icon-mail'></span>"
    	html = html + " <div class='media-body'>"
    	html = html + "     Reaction"
    	html = html + "     <p>{{ rxn_scheme_key }}</p>"
    	html = html + " </div>"
    	html = html + "</a>"
    	html = html + "</li>"
        
    	html = html + "</ul>"
    	html = html + "</div>"
        
    	html = html + "	<div id = 'imgcont' class='ui-widget-content' style='display:inline-block'>"
    	html = html + "		<h3 class='ui-widget-header'>Reaction Schema</h3>"
    	html = html + "	</div>"
    	html = html + "	<div id = 'procedure' class='ui-widget-content' style='display:inline-block'>"
    	html = html + "		<h3 class='ui-widget-header'>Procedure</h3>"
    	html = html + "	</div>"
    	html = html + "</div>    	"
        ;
    	return html; 
    }
    
    this.initialize();
}