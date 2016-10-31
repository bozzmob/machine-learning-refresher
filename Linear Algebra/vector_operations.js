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

class vector {
	constructor(name,x,y,z){
		this.name = name;
		this.x = x;
		this.y = y;
		this.z = z;
	}
	add(u,v){
		return [u.x+v.x, u.y+v.y, u.z+v.z];
	}
	subtract(u,v){
		return [u.x-v.x, u.y-v.y, u.z-v.z];
	}
	scalarProduct(c,u){
		return [c*u.x,c*u.y,c*u.z];
	}
	show(u){
		console.log("Vector "+u.name);
		console.log("x :"+u.x);
		console.log("y :"+u.y);
		console.log("z :"+u.z);
	}
}

//http://codereview.stackexchange.com/questions/134048/how-to-flatten-multiple-nested-node-readline-questions
(function run() {
  var count=1;
  var vector_u,vector_v,vector_w;
  rl.on('line', (line) => {
    line = line.trim();
    var vectorElements = line.split(',');
    if(parseInt(vectorElements[0]) == 1){
	    console.log("Enter the vector in the following format - name,x,y,z");
	    switch(count){
	      case 1 :
	          vector_u = new vector(vectorElements[1],vectorElements[2],vectorElements[3],vectorElements[4]);
	          console.log("vector_u "+vector_u);
	          break;
	      case 2 :vector_v = new vector(vectorElements[1],vectorElements[2],vectorElements[3],vectorElements[4]);
	          console.log("vector_v "+vector_v);
	          break;
	      case 3 :vector_w = new vector(vectorElements[1],vectorElements[2],vectorElements[3],vectorElements[4]);
	          console.log("vector_w "+vector_w);
	          break;
	      default :console.log("You can have maximum of 3 vectors");
	    }
	}
	if(parseInt(vectorElements[0]) == 2){
		console.log("2222")
	}
    count++;
    rl.prompt();
  }).on('close', () => {
    console.log('End');
    process.exit(0);
  });
})();