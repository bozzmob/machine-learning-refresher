const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'vector> '
});

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