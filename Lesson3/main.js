

let price;
let colorWay;
console.log("dddd")
chec:while(true){
    let memory = prompt("Введіть об'єм пам'яті");
    switch(+memory){
        case 64: price=645;
        break chec;
        break;
        case 128: price=800;
        break chec;
        break;
        case 512: price=999;
        break chec;
        break;
        default:alert("Введите допустимое значение");break;
    }
}
chec:while(true){
    let color = prompt("Введіть Колір");
    switch(color){
        case "black":colorWay="img/black1.png";
        break chec;
        break;
        case "gold":colorWay="img/gold.png";
        break chec;
        break;
        break;
        case "silver":colorWay="img/silver.png";
        break chec;
        break;
        break;
        default:alert("Введите допустимое значение");break;
    }
}


if(price!=null && colorWay!=null){
    document.getElementById("MyImage").src=colorWay;
    alert("Цена - " + price);
}
    



