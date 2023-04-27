// s1 outfit
let s1 = document.getElementById("s1");

function hideOutfits() {
	const outfits = document.getElementsByClassName("outfit");
	for (let i = 0; i < outfits.length; i++) {
	  outfits[i].style.display = "none";
	}
  }

/* the process: */
/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
s1.onclick = function() {
	s1.style.display = "none";
	hideOutfits()
	let o1 = document.getElementById("o1");
	o1.style.display = "block";
};


let s2 = document.getElementById("s2");
// s2 outfit
/* get #s2 outfit */
/* repeat process */
s2.onclick = function() {
	s2.style.display = "none";
	hideOutfits()
	let o2 = document.getElementById("o2");
	o2.style.display = "block";
};


let s3 = document.getElementById("s3");
// s3 outfit
/* get #s3 outfit */
/* repeat process */

s3.onclick = function() {
	s3.style.display = "none";
	hideOutfits()
	let o3 = document.getElementById("o3");
	o3.style.display = "block";
};


let s4 = document.getElementById("s4");
// s4 outfit
/* get #s4 outfit */
/* repeat process */

s4.onclick = function() {
	s4.style.display = "none";
	hideOutfits()
	let o4 = document.getElementById("o4");
	o4.style.display = "block";
};

// s5 outfit
/* get #s5 outfit */
/* repeat process */

let s5 = document.getElementById("s5");
s5.onclick = function() {
	s5.style.display = "none";
	hideOutfits()
	let o5 = document.getElementById("o5");
	o5.style.display = "block";
};

// strip outfit
let strip = /* get #strip-button */
strip.onclick = function() {
	/* call the function you created to hide all the outfits */
	/* show #body */
	hideOutfits();
	let body = document.getElementById('body');
  	body.style.display = 'block';
	
};