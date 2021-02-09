// this code use for Spinner  
var allContent = document.querySelector('.allContent')

var mySpinner = document.querySelector('.loading-spinner')

allContent.style.display = 'none';

setTimeout(() => {
    allContent.style.display = 'block'
    mySpinner.style.display = 'none'
}, 5000);