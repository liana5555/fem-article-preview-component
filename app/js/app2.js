/*
###################################
Checking when it is opened first
#################################
*/

let width = innerWidth;
//console.log(width)

if (width < 1024) {
    mobileFunc();
}
else {
    desktopFunc();
}


/*
###################################
Checking when the window size is changed
#################################
*/



let widthCheck = window.matchMedia('(max-width: 1023px)');
//console.log(widthCheck);


widthCheck.addListener(checking);




function checking (e) {
    if (e.matches) {
        
        mobileFunc();
    }
    else {
       
        desktopFunc();

    }
}
/*
###################################
Functions for different media
#################################
*/

function mobileFunc() {
    const infoContainer = document.querySelector('.info-container');
const socialContainer = document.querySelector('.social-container');
const removeEvent = infoContainer.querySelector('.icon')

//Putting back the share icon in social container
//It is necessary because it is removed in desktop view

if(socialContainer.querySelector('.icon')===null) {
    const span = document.createElement('span');
    span.className += "icon";
    span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path id="share" fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>`;
    //console.log(span);
    socialContainer.appendChild(span);
}

setDefault();

const shares = document.querySelectorAll('.icon');
removeEvent.removeEventListener('click', forDesktopEvent);
shares.forEach(function(share) {


share.addEventListener('click' , forMobileEvent) ;


});
}


function desktopFunc() {
    //console.log('Desktop fucntion')
const infoContainer = document.querySelector('.info-container');
const socialContainer = document.querySelector('.social-container');
const removeitem = socialContainer.querySelector('.icon');
removeitem.remove();
const share = infoContainer.querySelector('.icon');

setDefault();
//positionSocialDesktop();

share.removeEventListener('click', forMobileEvent);

share.addEventListener ('click' , forDesktopEvent);

}

/*
###################################
Setting the classlists to default value after window-size change
#################################
*/

function setDefault () {
    const infoContainer = document.querySelector('.info-container');
    const socialContainer = document.querySelector('.social-container');
    const shares = document.querySelectorAll('.icon');
    shares.forEach(function(share){
       
    })

    infoContainer.classList.remove('fade-in');
    infoContainer.classList.remove('fade-out');
    infoContainer.classList.remove('hidden');

    socialContainer.classList.remove('fade-in');
    socialContainer.classList.remove('fade-out');
    socialContainer.classList.add('hidden');



}


/*
###################################
For eventlisteners
#################################
*/

function forMobileEvent () {

const infoContainer = document.querySelector('.info-container');
const socialContainer = document.querySelector('.social-container');

    
        if (infoContainer.classList.contains('hidden')) {
            //console.log('true info contains hidden');
    
            infoContainer.classList.remove('fade-out');
    
            socialContainer.classList.add('fade-out');
            socialContainer.classList.remove('fade-in');
    
    
            socialContainer.classList.add('hidden');
    
            infoContainer.classList.remove('hidden');       
            infoContainer.classList.add('fade-in');
    
           
          
        }
        else {
            //console.log('false');
    
            socialContainer.classList.remove('fade-out');
    
            infoContainer.classList.add('fade-out');
    
    
            infoContainer.classList.add('hidden');
            
            
            
            socialContainer.classList.remove('hidden');
    
            socialContainer.classList.add('fade-in');
    
            
            infoContainer.classList.remove('fade-in');
                
            
          
        }
}


function forDesktopEvent () {
    const socialContainer = document.querySelector('.social-container');
    //socialContainer.classList.toggle('hidden');

    if(socialContainer.classList.contains('hidden')) {
        socialContainer.classList.remove('hidden');
        socialContainer.classList.add('fade-in');
        socialContainer.classList.remove('fade-out');
        
        /*socialContainer.classList.contains('fade-out')?
        socialContainer.classList.remove('fade-out'):
        console.log('no');*/

    }
    else {
       /* socialContainer.classList.contains('fade-in')?
        socialContainer.classList.remove('fade-in'):
        //console.log('no fade-in');*/
        socialContainer.classList.remove('fade-in');
        socialContainer.classList.add('fade-out');
        socialContainer.classList.add('hidden');

    }
   

}


/*
 #######################################
 For changing the position of the social contianer constantly
 depending on the size of the window.
 ##########################################
*/
/*
function positionSocialDesktop () {

const socialContainer = document.querySelector('.social-container');
const content =  document.querySelector('.content');
const sharebtn = content.querySelector('.icon');
const rect = sharebtn.getBoundingClientRect();
//const align = socialContainer.getBoundingClientRect();

console.log(rect);
const offset = 80;
const final =  rect.top - offset;
console.log(final);

socialContainer.style.top = final + 'px';
console.log(socialContainer.style.top);
socialContainer.style.left = rect.left + 'px';
  
}

*/
