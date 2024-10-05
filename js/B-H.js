AOS.init();

var unit = document.getElementsByClassName('text1');



window.onscroll = function(){


	if(window.scrollY > 2000){
        for (var i = 0; i < unit.length; i++) {
            unit[i].classList.remove('hid');
			
        }
    }
    else{
        for (var i = 0; i < unit.length; i++) {
            unit[i].classList.add('hid');
			

        }
    }
	
}