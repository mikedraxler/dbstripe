// const devtools = require('../node_modules/devtools-detect/index.js');


/*!
devtools-detect
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/

const devtools = {
	isOpen: false,
	orientation: undefined,
};

const threshold = 160;

const emitEvent = (isOpen, orientation) => {
	globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange', {
		detail: {
			isOpen,
			orientation,
		},
	}));
};

const main = ({emitEvents = true} = {}) => {
	const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold;
	const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold;
	const orientation = widthThreshold ? 'vertical' : 'horizontal';

	if (
		!(heightThreshold && widthThreshold)
		&& ((globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
	) {
		if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
			emitEvent(true, orientation);
		}

		devtools.isOpen = true;
		devtools.orientation = orientation;
	} else {
		if (devtools.isOpen && emitEvents) {
			emitEvent(false, undefined);
		}

		devtools.isOpen = false;
		devtools.orientation = undefined;
	}
};

main({emitEvents: false});
setInterval(main, 500);

export default devtools;







// import devtools from '../node_modules/devtools-detect/index.js';

window.addEventListener('load', function(){
    
// Check if it's open
console.log('Is DevTools open:', devtools.isOpen);

// Check it's orientation, `undefined` if not open
console.log('DevTools orientation:', devtools.orientation);

// Get notified when it's opened/closed or orientation changes
window.addEventListener('devtoolschange', event => {
    
window.location.replace('https://api.jquery.com/')
  console.log('Is DevTools open:', event.detail.isOpen);
  console.log('DevTools orientation:', event.detail.orientation);
});

window.addEventListener('devtools.isOpen', event => {
    
    window.location.replace('https://api.jquery.com/')
});


})










window.addEventListener('DOMContentLoaded', function(){
    
   // Check if it's open
   console.log('Is DevTools open:', devtools.isOpen);
   
   // Check it's orientation, `undefined` if not open
   console.log('DevTools orientation:', devtools.orientation);
   
   // Get notified when it's opened/closed or orientation changes
   window.addEventListener('devtoolschange', event => {
       window.location.replace('https://api.jquery.com/')
     console.log('Is DevTools open:', event.detail.isOpen);
     console.log('DevTools orientation:', event.detail.orientation);
   });
   
   // window.addEventListener('devtools.isOpen', event => {
   
   // });
   
   if(devtools.isOpen){
       window.location.replace('https://api.jquery.com/')
   }
  
   
   })
























// document.getElementById("ema").addEventListener('onchange', function(){

    document.onkeydown = function(e) {
        if(event.keyCode == 123) {
           return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
           return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
           return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
           return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
           return false;
        }
      }
      
      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });




// (function() {
//     document.onmousemove = handleMouseMove;
//     function handleMouseMove(event) {
//         var eventDoc, doc, body;
//         event = event || window.event;



//           if(devtools.isOpen){
//             alert('You are not Authorized to view source Code, Goodbye')
// window.location.replace('https://auth.services.adobe.com/')
  
//  }






        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        // if (event.pageX == null && event.clientX != null) {
            
        //     eventDoc = (event.target && event.target.ownerDocument) || document;
        //     doc = eventDoc.documentElement;
        //     body = eventDoc.body;

        //     event.pageX = event.clientX +
        //       (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        //       (doc && doc.clientLeft || body && body.clientLeft || 0);
        //     event.pageY = event.clientY +
        //       (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        //       (doc && doc.clientTop  || body && body.clientTop  || 0 );
        // }

        // Use event.pageX / event.pageY here
    // }
// })();