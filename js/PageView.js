var PageView = function(experiment) {
		
	this.initialize = function() {
      this.$el = $('<div/>');
  };

  this.render = function() {
      this.$el.html(this.template(experiment[0]));
      return this;
  };

  this.initialize();

}