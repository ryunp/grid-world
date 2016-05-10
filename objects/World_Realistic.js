(function(root) {


	function World_Realistic(map, legend) {
		
		World.call(this, map, legend);

		this.actionTypes = Object.create(null);

		this.actionTypes.grow = function(entity) {

			entity.increaseEnergy(1);

			return true;
		};

		this.actionTypes.move = function move(entity, vector, action) {

			var dest = this.checkDestination(action, vector);

			if (!dest || entity.getEnergy() <= 1 ||
				!(this.grid.get(dest) instanceof Entity_Empty))
					return false;

			entity.decreaseEnergy(1);
			this.grid.set(vector, new Entity_Empty());
			this.grid.set(dest, entity);

			return true;
		};

		this.actionTypes.eat = function eat(entity, vector, action) {

			var dest = this.checkDestination(action, vector),
				destEntity = dest && this.grid.get(dest);

			if (!destEntity || !destEntity.getEnergy())
				return false;

			entity.increaseEnergy(destEntity.getEnergy());
			this.grid.set(dest, new Entity_Empty());

			return true;
		};

		this.actionTypes.reproduce = function reproduce(entity, vector, action) {

			var dest = this.checkDestination(action, vector),
				offspring = new this.legend[entity.symbol](),
				energyRequired = 1.25 * offspring.getEnergy();

			if (!dest || entity.getEnergy() <= energyRequired ||
				!(this.grid.get(dest) instanceof Entity_Empty))
					return false;

			entity.decreaseEnergy(energyRequired);
			this.grid.set(dest, offspring);

			return true;
		};
	}


	World_Realistic.prototype = new Object(World.prototype);


	World_Realistic.prototype.letAct = function letAct(entity, vector) {

		var action = entity.act(new View(this, vector));
		var handled = action && (action.type in this.actionTypes) &&
				this.actionTypes[action.type].call(this, entity, vector, action);

		if (! handled) {
			
			entity.decreaseEnergy(1);

			if (entity.getEnergy() <= 0)
				this.grid.set(vector, new Entity_Empty());
		}

	};


	root.World_Realistic = World_Realistic;
})(window);