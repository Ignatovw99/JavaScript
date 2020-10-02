function solve() {
   
   let resultTextareaElement = document.querySelector('body > div > textarea');
   let boughtProducts = [];
   let totalPrice = 0;

   Array.from(document.getElementsByClassName('add-product'))
      .forEach((addButton, index) => {
         addButton.addEventListener('click', () => {
            let productName = document.querySelector(`body > div > div:nth-child(${index + 2}) > div.product-details > div`).textContent;
            let price = document.querySelector(`body > div > div:nth-child(${index + 2}) > div.product-line-price`).textContent;
      
            if (!boughtProducts.includes(productName)) {
               boughtProducts.push(productName);
            }
            resultTextareaElement.textContent += `Added ${productName} for ${price} to the cart.\n`;
            totalPrice += Number(price);
         });
      });

   document.querySelector('.checkout').addEventListener('click', () => {
      resultTextareaElement.textContent += `You bought ${boughtProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;   
      Array.from(document.querySelectorAll('button')).forEach(button => button.disabled = true);
   })
}
