import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


$(document).foundation();

// CERRAR MENU OFF CANVAS
$('#offCanvas li a').click(() => {
  $('#offCanvas').foundation('close')
})


// // closes the panel on click outside
// $(document).mouseup(function (e) {
//   var container = $('#contact-panel');
//   if (!container.is(e.target) // if the target of the click isn't the container...
//   && container.has(e.target).length === 0) // ... nor a descendant of the container
//     {
//       container.removeClass('is-active');
//     }
// });
