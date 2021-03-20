let item1 = {
    id: 535,
    name: "Iphone 10",
    price: {
        sale: 799,
        full: 1000
    }

}
let item2 = {
    id: 536,
    name: "Iphone 11",
    price: {
        sale: 859,
        full: 1100
    }

}

let item3 = {
    id: 536,
    name: "Iphone 12",
    price: {
        sale: 999,
        full: 1500
    }

}

let basket = [];


function addBasket(BS, item) {
    BS.push(item);
    return BS;

}

function deleteBasket(BS, item) {
    for (let i = 0; i < BS.length; i++) {
        if (BS[i].id == item.id) {
            if (i === 0) {
                BS.splice(i, ++i);
            } else {
                BS.splice(i, i);
            }
            return BS;
        }

    }

}

basket = addBasket(basket, item3);
basket = addBasket(basket, item1);
basket = addBasket(basket, item3);
console.log(basket);

basket = deleteBasket(basket, item3);
console.log(basket);