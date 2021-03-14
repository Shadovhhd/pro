let tel = [{
        mamory: 64,
        peice: 699,
    },
    {
        mamory: 128,
        peice: 899,
    },
    {
        mamory: 512,
        peice: 999,
    },
];
let colors = [{
        color: "black",
        way: "img/black1.png",
        peice: 0,
    },
    {
        color: "gold",
        way: "img/gold.png",
        peice: 150,
    },
    {
        color: "silver",
        way: "img/silver.png",
        peice: 100,
    },
];

let price;
let colorWay;
let corolPrice;
chec: while (true) {
    let memory = prompt("Введіть об'єм пам'яті");
    if (memory === null) {
        break;
    }
    for (let i = 0; i < tel.length; i++) {

        if (+memory === tel[i].mamory) {
            price = tel[i].peice;

            break chec;
            break;

        }

    }

}
if (price) {
    chec: while (true) {
        let colorChec = prompt("Введіть Колір");
        if (colorChec === null) {
            break;
        }
        for (let i = 0; i < colors.length; i++) {
            if (colorChec === colors[i].color) {
                colorWay = colors[i].way;
                corolPrice=colors[i].peice;
                break chec;
                break;

            }

        }

    }
}
if (price && colorWay) {
    price+=corolPrice;
    document.write("<h1>Price: " + price + "$</h1>");
    document.write('<img src="' + colorWay + '">');
} else if (price) {
    price+=corolPrice;
    document.write("<h1>Price: " + price + "$</h1>");
} else{
    alert("Пока");
}