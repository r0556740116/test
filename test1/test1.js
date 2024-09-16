colorRowsByRating();


function findCheapestProductWithHighRating() {
    const priceCells = document.querySelectorAll('.price');
    const ratingCells = document.querySelectorAll('.Rating');
  
    let cheapestProduct = null;
    let lowestPrice = Infinity;
  
    priceCells.forEach((cell, index) => {
      const price = parseFloat(cell.textContent);
      const rating = parseFloat(ratingCells[index].textContent);
  
      if (price < lowestPrice && rating >= 4) {
        lowestPrice = price;
        cheapestProduct = {
          storeName: cell.parentElement.querySelector('td:nth-child(3)').textContent,
          price,
          rating,
        };
      }
    });
  
    if (cheapestProduct) {
      const resultElement = document.getElementById('result');
      resultElement.textContent = ` the most profitable: ${cheapestProduct.storeName} - ${cheapestProduct.price} (${cheapestProduct.rating})`;
    } else {
      console.log('לא נמצא מוצר עם דירוג 4 או 5.');
    }
  }



  function calculateAveragePrice() {
    const table = document.getElementById('myTable');
    const rows = table.querySelectorAll('tr');
    let prices = [];
  
    
    rows.forEach(row => {
      const priceCell = row.querySelector('.price');
      if (priceCell) {
        const price = parseFloat(priceCell.textContent);
        prices.push(price);
      }
    });
  
    
    const average = prices.reduce((total, price) => total + price, 0) / prices.length;
  
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The average is: ${average}`;
  }



 

function dltRow(button) {
const row = button.parentElement.parentElement;
row.parentNode.removeChild(row);
}



function showProductDetails(button) {
  const row = button.parentNode.parentNode;
  const nameCell = row.querySelector('.nameST');
  const priceCell = row.querySelector('.price');
   const newTable = document.createElement('table');
   newTable.classList.add('product-details'); 

  const headerRow = newTable.insertRow();
  const nameHeaderCell = headerRow.insertCell();
  const priceHeaderCell = headerRow.insertCell();
  const cardHeaderCell = headerRow.insertCell();
  const numHeaderCell = headerRow.insertCell();
  nameHeaderCell.textContent = 'Name of the store:';
  priceHeaderCell.textContent = 'Price:';
  cardHeaderCell.textContent = 'Credit Card number :';
  numHeaderCell.textContent = 'Date of expiration:';

const dataRow = newTable.insertRow();
const nameCellNew = dataRow.insertCell();
const priceCellNew = dataRow.insertCell();
const cardCellNew = dataRow.insertCell();
const numCellNew = dataRow.insertCell();

nameCellNew.textContent = nameCell.textContent;
priceCellNew.textContent = priceCell.textContent;

// הוספת שדה להזנת כרטיס
const cardInput = document.createElement('input');
cardInput.type = 'text';
cardInput.placeholder = 'Credit Card number :';
cardCellNew.appendChild(cardInput);

const numInput = document.createElement('input');
numInput.type = 'text';
numInput.placeholder = 'Date of expiration : ';
numCellNew.appendChild(numInput);

  nameCellNew.textContent = nameCell.textContent;
  priceCellNew.textContent = priceCell.textContent;
  document.body.appendChild(newTable);

  
  const submitButton = document.createElement('button');
  submitButton.textContent = 'send';
  submitButton.classList.add('submit-button');
  document.body.appendChild(submitButton);
}


function colorRowsByRating() {
  const table = document.getElementById('myTable');
  const rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    const ratingCell = rows[i].querySelector('.Rating');
    const rating = ratingCell.textContent;

    if (rating === '4/5' || rating === '5/5') {
      rows[i].style.backgroundColor = 'lightgreen';
    } else if (rating === '1/5') {
      rows[i].style.backgroundColor = 'lightcoral';
    }
  }
}







  