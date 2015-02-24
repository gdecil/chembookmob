var EmployeeService = function(server) {
    var url;
    
    this.initialize = function() {
        url = server + "/Reaction.asmx/SearchUsers";
//        url = serviceURL ? serviceURL : "http://217.220.17.147:8080/Reaction.asmx/SearchUsers";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.getExperiment = function(id) {
        url = server + "/Reaction.asmx/GetExperiment";
    	var a = id.split("-");
    	var dataX = '{"notebook":"' + a[0] + '", "page":"' + a[1] + '","enumVal":"undefined"}';
        return $.ajax(
        		{
        			type: "POST",
        			url: url ,
        			data: dataX
        		});
    }

    this.findNotebooks = function(id) {
        url = server + "/Reaction.asmx/GetUserNotebooks";
    	var dataX = '{"id":"' + id + '"}';
        return $.ajax(
        		{
        			type: "POST",
        			url: url ,
        			data: dataX
        		});
    }

    this.findPages = function(id) {
        url = server + "/Reaction.asmx/GetPagesNotebook";
    	var dataX = '{"notebook":"' + id + '"}';
        return $.ajax(
        		{
        			type: "POST",
        			url: url ,
        			data: dataX
        		});
    }

    this.findById = function(id) {
    	url = server + "/Reaction.asmx/SearchUsers";
    	var dataX = '{"id":"' + id + '"}';
        return $.ajax(
        		{
        			type: "POST",
        			url: url ,
        			data: dataX
        		});
    }

    this.findByName = function(searchKey) {
    	url = server + "/Reaction.asmx/SearchUsers";
//    	curl -X POST  -H "Accept: Application/json" -H "Content-Type: application/json" http://localhost:8080/Reaction.asmx/SearchUsers -d '{"name":"a"}'
//    	curl -X POST  -H "Accept: Application/json" -H "Content-Type: application/json" http://localhost:8080/Reaction.asmx/SearchUsers -d "{'name':'a'}"
//    	var dataX = "{'name':'" + searchKey + "'}";
    	var dataX = '{"name":"' + searchKey + '"}';
        return $.ajax(
        		{
        			type: "POST",
        			url: url ,
//        			url: url + "?name=" + searchKey,
        			data: dataX
        		});
    }


}