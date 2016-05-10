(function(root) {
	
	var count = 0;


	function Entity_Empty() {
		
		Entity.call(this);
		count++;
	}
	

	Entity_Empty.getCount = function getCount() {

		return count;
	}


	Entity_Empty.prototype = Object.create(Entity.prototype);
	Entity_Empty.prototype.constructor = Entity;
	Entity_Empty.prototype.name = "Empty";


	Entity_Empty.prototype.inspect = function inspect() {

		return "It's a pretty " + this.color + "!";
	}


	root.Entity_Empty = Entity_Empty;
})(window);