const readline = require('readline');
const fs = require('fs');
const prefix = 'vector> ';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ''
});
rl.setPrompt(prefix, prefix.length);
rl.prompt();
console.log("working");
var vector = (function() {
	console.log("inside vector");
    var globalvar = 0;

    //Expose the methods that are needed for external access. Abstration!
    var publicAPI = {
        add: function(u,v) {
        	console.log("inside add");
        	rl.output({"x":u.x+v.x, "y":u.y+v.y, "z":u.z+v.z});
        },
        subtract: function(u,v) {
        	console.log({"x":u.x-v.x, "y":u.y-v.y, "z":u.z-v.z});
        },
        scalarProduct: function(u,v) {
        	console.log({"x":c*u.x,"y":c*u.y,"z":c*u.z});
        },
        setDefaults: function() { 
        }
    }
    return publicAPI;

	function privatefunction() {
	}

})();

module.exports.add = function(u,v){
        	console.log("inside add");
        	rl.output({"x":u.x+v.x, "y":u.y+v.y, "z":u.z+v.z});
}

//STUCK TO DEATH!! Python course... Here we go... :(