(function(root) {

	function World(map, legend) {

		this.grid = new Grid(map[0].length, map.length);
		this.legend = legend;

		setEntitySymbols(legend);		
		map.forEach(iterateMapRow, this);


		function setEntitySymbols(legend) {
			
			for (var symbol in legend) {

				var entity = legend[symbol];
				entity.prototype.symbol = symbol;
			}
		}


		function iterateMapRow(row, rowIdx) {

			var y = rowIdx;

			for (var x = 0; x < row.length; x++) {

				var entity = this.legend[row[x]];
				this.grid.set(new Vector(x, y), new entity());
			}
		}
	}


	World.prototype.turn = function turn() {
		 
		var acted = [];
		this.grid.forEach(checkAct, this);


		function checkAct(entity, vector) {

			if (entity.act && acted.indexOf(entity) == -1) {

				acted.push(entity);
				this.letAct(entity, vector);
			}
		}
	};


	World.prototype.letAct = function letAct(entity, vector) {

		var action = entity.act(new View(this, vector));
		
		if (!action)
			return;

		if (action.type == 'move') {

			var dest = this.checkDestination(action, vector);
			if (dest && (this.grid.get(dest) instanceof Entity_Empty)) {

				this.grid.set(vector, new Entity_Empty());
				this.grid.set(dest, entity);
			}
		}
	};


	World.prototype.checkDestination = function checkDestination(action, vector) {

		var dest = vector.plus(Grid.Directions[action.direction]);

		if (dest && this.grid.isInside(dest))
			return dest;
	};


	World.prototype.toString = function toString() {
		
		var output = '';

		for (var y = 0; y < this.grid.height; y++) {

			for (var x = 0; x < this.grid.width; x++) {

				var entity = this.grid.get(new Vector(x, y));
				output += entity.symbol;
			}
		
			output += "\n";
		}

		return output;
	};


	World.prototype.toHtmlTable = function toHtmlTable() {
		
		var output = '<table>';

		for (var y = 0; y < this.grid.height; y++) {

			output += '<tr>';

			for (var x = 0; x < this.grid.width; x++) {

				var entity = this.grid.get(new Vector(x, y));
				output += '<td class="cell">' + entity.symbol + '</td>';
			}
		
			output += '</tr>';
		}

		output += '</table>';

		return output;
	};


	World.prototype.toHtmlPre = function toHtmlPre() {
		
		var output = '<pre>';

		for (var y = 0; y < this.grid.height; y++) {
			for (var x = 0; x < this.grid.width; x++) {

				var entity = this.grid.get(new Vector(x, y));

				if (entity.color)
					output += wrapInSpanTag(entity.symbol, {'color': entity.color});
				else
					output += entity.symbol;
			}

			output += "\n";
		}

		output += '</pre>';

		return output;


		function wrapInSpanTag(data, styles) {

			var styleCss = [];
			for (var style in styles)
				styleCss.push(style + ':' + styles[style]);

			return '<span style="' + styleCss.join(', ') + '">' + data + '</span>';
		}
	};


	World.prototype.getLegendStats = function getLegendStats() {

		var output = ['Total: ' + Entity.getCount()];

		for (var symbol in this.legend)
			output.push("'" + symbol + "': " + this.legend[symbol].getCount());

		return output.join(', ');
	};
	

	root.World = World;
})(window);