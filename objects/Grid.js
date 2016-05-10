function Grid(width, height) {

      this.space = new Array(width * height);
      this.width = width;
      this.height = height;
}


Grid.Directions = {
	'N':  new Vector( 0, -1),
	'NE': new Vector( 1, -1),
	'E':  new Vector( 1, 0),
	'SE': new Vector( 1, 1),
	'S':  new Vector( 0, 1),
	'SW': new Vector(-1, 1),
	'W':  new Vector(-1, 0),
	'NW': new Vector(-1, -1),
};


Grid.prototype.isInside = function isInside(vector) {

      return vector.x >= 0 && vector.x < this.width &&
            vector.y >= 0 && vector.y < this.height;
};

Grid.prototype.get = function get(vector) {

      return this.space[vector.x + vector.y * this.width];
};


Grid.prototype.set = function set(vector, value) {

      this.space[vector.x + vector.y * this.width] = value;
};


Grid.prototype.forEach = function forEach(f, context) {

	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {

			var entity = this.space[x + y * this.width];
			f.call(context, entity, new Vector(x, y));
		}
	}
};