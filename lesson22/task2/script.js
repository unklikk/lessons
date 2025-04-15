let items = [
    { name: "книга", price: 300 },
    { name: "тетрадь", price: 50 }
    { name: "ручка", price: 20 }
];

let totalPrice = 0;

function calculatePrice(price) {
    if price > 100 {
        return price * 0.95;
    } else {
        return price
    }
}

items.forEach(function (item) {
    let itemPrice = calculatePrice(item.price);
    console.log(`Название: ${item.item}, цена: ${itemPrice}`);
    totalPrice = totalprice + itemPrice;
};

console.log(`Итоговая стоимость: ${totalPrice}`);