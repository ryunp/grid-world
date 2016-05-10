(function(root) {

	function AnimateWorld(world, el) {

		this.world = world;
		this.el = el;
		this.rafID = null;
		this.prevFrameTime = 0;
		this.curFrameTime = 0;
		this.refreshRate = 0;
		this.setFps(10);
	}


	AnimateWorld.prototype.start = function start() {
		
		if (this.rafID == null)
		    this.step();
	};

	AnimateWorld.prototype.stop = function stop() {

		window.cancelAnimationFrame(this.rafID);
		this.rafID = null;
	};
	
	AnimateWorld.prototype.step = function step() {

		this.curFrameTime = new Date();

		if (this.curFrameTime - this.prevFrameTime >= this.refreshRate) {
			console.log("acting");

			this.world.turn();
			this.updateView();

		    this.prevFrameTime = this.curFrameTime;
		}

		console.log(this.rafID);
		this.rafID = requestAnimationFrame(this.step.bind(this));
	};

	AnimateWorld.prototype.setWorld = function setWorld(world) {

		this.world = world;
	};

	AnimateWorld.prototype.setFps = function setFps(fps) {

		this.fps = fps;
		
		this.refreshRate = (1000 / fps).toFixed(2);
	};

	AnimateWorld.prototype.getFps = function getFps() {

		return this.fps;
	};

	AnimateWorld.prototype.getRefreshRate = function getRefreshRate() {

		return this.refreshRate;
	};

	AnimateWorld.prototype.updateView = function updateView() {

		this.el.innerHTML = this.world.toHtmlPre();
	}


	root.AnimateWorld = AnimateWorld;
})(window);