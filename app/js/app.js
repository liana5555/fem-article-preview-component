//This is only for the mobile version
//So oit only includes the mobile functionality
// I was still two minds about the desktop version and how to
//achieve the final version. I had to google up how to 
//make changes based on the changing of the window-size.

//Mobile functionality

mobileFunc();




function mobileFunc() {
    const infoContainer = document.querySelector('.info-container');
const socialContainer = document.querySelector('.social-container');
const shares = document.querySelectorAll('.icon');

shares.forEach(function(share) {


share.addEventListener('click' , function() {
    if (infoContainer.classList.contains('hidden')) {
        console.log('true info contains hidden');

        infoContainer.classList.remove('fade-out');

        socialContainer.classList.add('fade-out');
        socialContainer.classList.remove('fade-in');


        socialContainer.classList.add('hidden');

        infoContainer.classList.remove('hidden');       
        infoContainer.classList.add('fade-in');

       
      
    }
    else {
        console.log('false');

        socialContainer.classList.remove('fade-out');

        infoContainer.classList.add('fade-out');


        infoContainer.classList.add('hidden');
        
        
        
        socialContainer.classList.remove('hidden');

        socialContainer.classList.add('fade-in');

        
        infoContainer.classList.remove('fade-in');
            
        
      
    }

}) ;


});
}


function desktopFunc() {
    console.log('Desktop fucntion')
}


function setDefault () {
    const infoContainer = document.querySelector('.info-container');
    const socialContainer = document.querySelector('.social-container');

    infoContainer.classList.remove('fade-in');
    infoContainer.classList.remove('fade-out');
    infoContainer.classList.remove('hidden');

    socialContainer.classList.remove('fade-in');
    socialContainer.classList.remove('fade-out');
    socialContainer.classList.add('hidden');



}

