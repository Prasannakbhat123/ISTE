const image = document.getElementById('myImage');
const image2 = document.getElementById('myImage2');
const image3 = document.getElementById('myImage3');
const image4 = document.getElementById('myImage4');
const hiddenContent = document.getElementById('modal');
const hiddenContent2 = document.getElementById('modal2');
const hiddenContent3 = document.getElementById('modal3');
const hiddenContent4 = document.getElementById('modal4');
const closeButton = hiddenContent.querySelector('.close-button');
const closeButton2 = hiddenContent2.querySelector('.close-button');
const closeButton3 = hiddenContent3.querySelector('.close-button');
const closeButton4 = hiddenContent4.querySelector('.close-button');
const overlay = document.getElementById('overlay');
const overlay2 = document.getElementById('overlay2');
const overlay3 = document.getElementById('overlay3');
const overlay4 = document.getElementById('overlay4');

image.addEventListener('click', () => {
    hiddenContent.classList.add('active');
    overlay.style.display = 'block'; // Show the overlay
  });
  
  closeButton.addEventListener('click', () => {
    hiddenContent.classList.remove('active');
    overlay.style.display = 'none'; // Hide the overlay
  });


image2.addEventListener('click', () => {
    hiddenContent2.classList.add('active');
    overlay2.style.display = 'block'; // Show the overlay
  });
  
  closeButton2.addEventListener('click', () => {
    hiddenContent2.classList.remove('active');
    overlay2.style.display = 'none'; // Hide the overlay
  });


image3.addEventListener('click', () => {
    hiddenContent3.classList.add('active');
    overlay3.style.display = 'block'; // Show the overlay
  });
  
  closeButton3.addEventListener('click', () => {
    hiddenContent3.classList.remove('active');
    overlay3.style.display = 'none'; // Hide the overlay
  });
  



image4.addEventListener('click', () => {
    hiddenContent4.classList.add('active');
    overlay4.style.display = 'block'; // Show the overlay
  });
  
  closeButton4.addEventListener('click', () => {
    hiddenContent4.classList.remove('active');
    overlay4.style.display = 'none'; // Hide the overlay
  });
  