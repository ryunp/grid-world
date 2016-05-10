// Setup UI callbacks
document.querySelector("#control-larger").addEventListener("click", hLargerBtn);
document.querySelector("#control-smaller").addEventListener("click", hSmallerBtn);
document.querySelector("#control-start").addEventListener("click", hStartBtn);
document.querySelector("#control-stop").addEventListener("click", hStopBtn);
document.querySelector("#control-reset").addEventListener("click", hResetBtn);
document.querySelector("#control-fps").addEventListener("input", hFpsSlider);
var ctrl_fpsValue = document.querySelector("#control-fpsValue");

function hLargerBtn(e)  { incrFontSize(worldHtmlEl); }
function hSmallerBtn(e) { decrFontSize(worldHtmlEl); }
function hStartBtn(e)   { animation.start(); }
function hStopBtn(e)    { animation.stop(); }
function hResetBtn(e)   { newWorld(); }
function hFpsSlider(e)  { updateFps(e.target.value); }



// World Settings
var map = [
	"############################",
	"#      #++++#      o     +##",
	"#     . ++               ++#",
	"#+        +#####          +#",
	"##++      +#+++#    ##+    #",
	"###+         +##    +#+    #",
	"#++         ###+     #+    #",
	"#   +###                   #",
	"#   ##++     o          ++ #",
	"# o +#+        .     ##### #",
	"#    ####           ##+++# #",
	"#   +#++#   #     ###      #",
	"#   ## +##  +#+   #+      +#",
	"#  ##         #+  ##     ++#",
	"#   #         +#  +#+     +#",
	"#                 ##   #   #",
	"## ####               +#   #",
	"#+++++###         ######   #",
	"#+   +++#     o   #++#     #",
	"#     ++#  #      #+       #",
	"#          #+         ######",
	"# ####     ##+        #    #",
	"#    #     ###        # ## #",
	"#### #        .     # # +# #",
	"#    # o          ++#    # #",
	"# ######################## #",
	"#   +++       +++   +      #",
	"############################"
];

var legend = {
	' ': Entity_Empty,
	'#': Entity_Wall,
	'o': Entity_PlantEater,
	'+': Entity_Plant,
	'.': Entity_Walker,
	'-': Entity_Bomb
};

// Kind of need a factory to associate type of world and legend
var worldModel = World_Realistic;
var worldHtmlEl = document.querySelector("#world");



// Init World
var world = new worldModel(map, legend);
var animation = new AnimateWorld(world, worldHtmlEl);
animation.updateView();
updateFps(animation.getFps());



// Helpers
function newWorld() {

	world = new worldModel(map, legend);
	animation.setWorld(world);
}


function updateFps(fps) {

	if (fps >= 1 && fps <= 120) {

	    animation.setFps(fps);
	    ctrl_fpsValue.innerHTML = fps + " (" + animation.getRefreshRate() + "ms)";
	}
}


function getFontSize(el) {

	return parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
}


function incrFontSize(el) {

	el.style.fontSize = (getFontSize(el) + 1) + "px";
}


function decrFontSize(el) {

	el.style.fontSize = (getFontSize(el) - 1) + "px";
}