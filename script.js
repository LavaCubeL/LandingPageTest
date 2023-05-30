// Select the span element with the class "title-2"
const title2 = document.querySelector('.title-2');

// Changes the content of the span element and wrap the text you want to change the color of in another span element with a unique class or id
title2.innerHTML = 'you <span class="highlight">love</span> to do.';

// Select the span element with the class "highlight"
const highlight = document.querySelector('.highlight');

// Changes the color of the text within the span element to cyan
highlight.style.color = 'cyan';