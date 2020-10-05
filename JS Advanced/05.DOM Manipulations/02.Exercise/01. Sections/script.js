function create(words) {

   let contentElement = document.getElementById('content');

   words.forEach(word => {
      let divElement = document.createElement('div');
      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';

      divElement.appendChild(paragraphElement);
      divElement.addEventListener('click', onClickChangeDisplayStyle);

      contentElement.appendChild(divElement);
   });

   function onClickChangeDisplayStyle(e) {
      let clickedDiv = e.target;
      clickedDiv.querySelector('p').style.display = 'block';
   }
}