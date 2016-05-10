(function(root) {

	var count = 0;


	function Entity_Walker() {
		
		Entity.call(this);
		count++;

		this.direction = randomElement(Object.keys(Grid.Directions));
	}
	

	Entity_Walker.getCount = function getCount() {

		return count;
	};


	Entity_Walker.prototype = Object.create(Entity.prototype);
	Entity_Walker.prototype.constructor = Entity;
	Entity_Walker.prototype.name = "Walker";


	Entity_Walker.prototype.act = function act(view) {

		return this.move(view)
;	};


	Entity_Walker.prototype.move = function move(view) {
		
		if (! isMovable(view.look(this.direction))) {

			var ranDir = randomElement(Object.keys(Grid.Directions));
			this.direction = view.find(Entity_Empty) || ranDir;
		}

		return {'type': 'move', 'direction': this.direction};


		function isMovable(space) {

			return space instanceof Entity_Empty;
		}
	};


	root.Entity_Walker = Entity_Walker;
})(window);