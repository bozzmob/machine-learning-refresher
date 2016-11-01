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

var vector = (function() {
    var globalvar = 0;

    //Expose the methods that are needed for external access. Abstration!
    var publicAPI = {
        add: function(u,v) {
        	console.log([u.x+v.x, u.y+v.y, u.z+v.z]);
        },
        subtract: function(u,v) {
        	console.log([u.x-v.x, u.y-v.y, u.z-v.z]);
        },
        scalarProduct: function(u,v) {
        	console.log([c*u.x,c*u.y,c*u.z]);
        },
        setDefaults: function() { 
        }
    }
    return publicAPI;

	function privatefunction() {
	}

})();
