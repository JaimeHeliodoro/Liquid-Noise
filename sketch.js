let span = 7000;
let particles=[];
let hu = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB);
	hu = random(360);
	
	for(var i=0; i<span; i+=1){
		particles.push({
			x:random(width),
			y:height/2+random(-10,10),
			r:random(5),
			clr:color((hu+random(0, 60))%360,100,100)
		})
	}
}

function draw() {
	noStroke()
	for(let p of particles){
		fill(p.clr)
		ellipse(p.x,p.y,p.r)
		p.x+=(noise(p.x/100,p.y/100,100)-0.5)*5
		p.y+=(noise(p.x/100,p.y/1000,100)-0.5)*10
		p.r-=0.001
	}
}

let lapse = 0;    
function mousePressed(){
  if (millis() - lapse > 400){
    save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
    lapse = millis();
  }
}
