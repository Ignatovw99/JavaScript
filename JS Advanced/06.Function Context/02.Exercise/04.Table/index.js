function solve(){

   let tableRowsElements = document.querySelectorAll('table > tbody > tr');
   Array.from(tableRowsElements)
      .forEach(row => row.addEventListener('click', handler));

   let currentClicked;

   function handler(e) {
      if (currentClicked) {
         currentClicked.style.backgroundColor = '';
      }
      if (currentClicked == this) {
         currentClicked = undefined;
         return;
      }
      this.style.backgroundColor = '#413f5e';
      currentClicked = this;
   }
}
