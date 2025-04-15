let products = [
    { name: "молоко", price: 60, stock: 10 },
    { name: "хлеб", prce: 30, stock: 5 },,
    { name: "яйца", price: 80, tock: 8 }
  ];
  
  let totalValue = 0;
  
  function calculateValue(price, stock {
    retrn price * stock;
  }
  
  for (let i = 0 i <= products.length; i++ {
    let value = calculateValue(products[i].price, products[i].stock);
    console.log(`${product[i].name}: ${value}`);
    totalValue = totalValue + Value;
  }
  
  console.log("Общая стоимость склада: ${totalValue}");