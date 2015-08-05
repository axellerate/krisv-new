$(window).load(function() {
	$("#load").fadeOut("slow");
})

$(document).ready(function(){

var aurora1 = $('.aurora1');
var aurora2 = $('.aurora2');
var aurora3 = $('.aurora3');
var aurora4 = $('.aurora4');
    function runIt() {
    	$('.message2').delay(5000).fadeIn(5000);
    	aurora1.fadeIn(1000);
    	aurora2.fadeIn(1000);
    	aurora3.fadeIn(1000);
    	aurora4.fadeIn(1000);
      	aurora1.animate({opacity:'0.4', left: '80px', top: '50px'}, 5000);
      	aurora1.animate({opacity:'0.1', left: '-80px', top: '-50px'}, 5000, runIt);
      	aurora2.animate({opacity:'0.4', left: '100px', top: '40px'}, 3000);
      	aurora2.animate({opacity:'0.1', left: '-100px', top: '-40px'}, 3000, runIt);
      	aurora3.animate({opacity:'0.4', left: '80px', top: '35px'}, 6000);
      	aurora3.animate({opacity:'0.1', left: '-80px', top: '-35px'}, 6000, runIt);
      	aurora4.animate({opacity:'0.4', left: '110px', top: '45px'}, 8000);
      	aurora4.animate({opacity:'0.1', left: '-110px', top: '-45px'}, 8000, runIt);
    }

	$('.message1').textillate({
	  // the default selector to use when detecting multiple texts to animate
	  selector: '.texts',

	  // enable looping
	  loop: false,

	  // sets the minimum display time for each text before it is replaced
	  minDisplayTime: 5000,

	  // sets the initial delay before starting the animation
	  // (note that depending on the in effect you may need to manually apply 
	  // visibility: hidden to the element before running this plugin)
	  initialDelay: 2000,

	  // set whether or not to automatically start animating
	  autoStart: true,

	  // custom set of 'in' effects. This effects whether or not the 
	  // character is shown/hidden before or after an animation  
	  inEffects: [],

	  // custom set of 'out' effects
	  outEffects: [ 'hinge' ],

	  // in animation settings
	  in: {
	    // set the effect name
	    effect: 'bounceIn',

	    // set the delay factor applied to each consecutive character
	    delayScale: 2.5,

	    // set the delay between each character
	    delay: 50,

	    // set to true to animate all the characters at the same time
	    sync: false,

	    // randomize the character sequence 
	    // (note that shuffle doesn't make sense with sync = true)
	    shuffle: false,

	    // reverse the character sequence 
	    // (note that reverse doesn't make sense with sync = true)
	    reverse: false,

	    // callback that executes once the animation has finished
	    callback: function () { 
	    	$('.message1').textillate('out');
	    }
	  },

	  // out animation settings.
	  out: {
	    effect: 'fadeOutDown',
	    delayScale: 1.5,
	    delay: 50,
	    sync: false,
	    shuffle: true,
	    reverse: false,
	    callback: function () {
	    	runIt();

	    }
	  },

	  // callback that executes once textillate has finished 
	  callback: function () {},

	  // set the type of token to animate (available types: 'char' and 'word')
	  type: 'char'
	});


$(function () {
	    setInterval(function () {
		    $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
		    $('.star-5').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-6').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-7').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-8').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
		    $('.star-9').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-10').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-11').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-12').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
	    }, 1);
    });

    function resize()
    {
        var heights = window.innerHeight;
        var widths = window.innerWidth;
        document.getElementById("main-content").style.height = heights-52 + "px";
        document.getElementById("main-content").style.width = widths + "px";
    }
    resize();
    window.onresize = function() {
        resize();
    };  

});