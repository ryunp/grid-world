(function(root) {

	var count = 0;


	function Entity() {

		count++;
		this.MIN_ENERGY = 0;
		this.MAX_ENERGY = 100;
	}
	

	Entity.getCount = function getCount() {

		return count;
	};


	Entity.prototype.name = 'Entity';


	Entity.prototype.inspect = function inspect() {

		return "inspecting " + this.name;
	};


	Entity.prototype.increaseEnergy = function increaseEnergy(value) {

		if (this.energy < this.MAX_ENERGY)
			if (this.energy + value < this.MAX_ENERGY) {

				this.energy += value;
				return true;
			}
			else
				this.energy = this.MAX_ENERGY;

		return false;
	};

	Entity.prototype.decreaseEnergy = function decreaseEnergy(value) {

		if (this.energy > this.MIN_ENERGY)
			if (this.energy - value > this.MIN_ENERGY){

				this.energy -= value;
				return true;
			}
			else
				this.energy = this.MIN_ENERGY;

		return false;
	};

	Entity.prototype.getEnergy = function getEnergy() {

		return this.energy;
	};

	
	root.Entity = Entity;
})(window);