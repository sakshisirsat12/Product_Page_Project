const product=[
    {
        id:0,
        image: 'images/product1.png',
        title:'realme C53 (Champion Gold, 128 GB)  (6 GB RAM)',
        price:'11,999',
    },
    {
        id:1,
        image: 'images/product2.png',
        title:'realme narzo N53',
        price:'7,999',
    },
    {
        id:2,
        image: 'images/product3.png',
        title:'Apple iPhone 13 (128GB) - Blue',
        price:'50,999',
    },
    {
        id:3,
        image: 'images/product4.png',
        title:'iPhone 15 Pro',
        price:'134900.00',
    },
    {
        id:4,
        image: 'images/product5.png',
        title:'DSLR Camera',
        price:'60,000',
    },
    {
        id:5,
        image: 'images/product6.png',
        title:'vivo V27 5G (Magic Blue, 128 GB)  (8 GB RAM)',
        price:'31,131',
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>&#8377; ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>&#8377; ${price}.00</h2>`+ 
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}