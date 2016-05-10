(function(root) {

	var count = 0,
		COLOR_TIERS = [
			'#BD000B',
			'#5E0005',
			'#000000',
			'#005E05',
			'#00BD0B'
		];


	function Entity_PlantEater() {

		Entity.call(this);
		count++;

		this.energy = this.MAX_ENERGY / 2;
		this.updateColor();
	}


	Entity_PlantEater.getCount = function getCount() {

		return count;
	};


	Entity_PlantEater.prototype = Object.create(Entity.prototype);
	Entity_PlantEater.prototype.constructor = Entity;
	Entity_PlantEater.prototype.name = "PlantEater";


	Entity_PlantEater.prototype.updateColor = function updateColor() {

		var energyRatio = this.energy / this.MAX_ENERGY;
		// var colorTier = Math.round(energyRatio * (COLOR_TIERS.length-1));
		// this.color = COLOR_TIERS[colorTier];

		var COLOR_TIERS = 10;
		var colorTier = 1 - Math.round(energyRatio * COLOR_TIERS) / COLOR_TIERS;
		this.color = 'hsl(0, ' + Math.round(100 * colorTier) + '%, ' + Math.round(50 * colorTier)  + '%)';
	};


	Entity_PlantEater.prototype.act = function act(view) {

		this.updateColor();

		var space = view.find(Entity_Empty);	
		var plant = view.find(Entity_Plant);

		if (this.energy > (this.MAX_ENERGY / 2)) {
			
			if (space && getLucky())
				return {'type': 'reproduce', 'direction': space};
		}

		if (plant)
			return {'type': 'eat', 'direction': plant};

		if (space)
			return {'type': 'move', 'direction': space};

		return;


		function getLucky() {
			
			return Math.floor(Math.random() * 40) < 1;
		}
	};


	root.Entity_PlantEater = Entity_PlantEater;
})(window);