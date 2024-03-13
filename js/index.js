alert('index.js');
import getDateString from './date.js';
import '../styles/styles.scss';
import image from '../images/IMG_9325.jpeg';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../index.html';
$(document).ready( () => {
// Print the current time
$('.js-content').html(`<i class="fa-solid fa-clock fa-beat-fade"></i> ${ getDateString() }`);
// Display the image
$('<img />')
    .attr('src', image)
    .attr('alt', 'Always provide a descriptive alt text.')
    .appendTo('body'); 
     // Display the Bootstrap modal window
     $('.js-modal').modal({
        show: true,
        keyboard: true
    });   
});