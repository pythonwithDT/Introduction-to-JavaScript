// objects 

// const product = {
//     name: 'socks',
//     price: 1090,
//     paste: {
//         cleenteeth: 2,
//         charcoal: 5
//     },
// };


// console.log(product.price)  // asscessing a value inside an object ( . )
// console.log(product.name); 

// product.name = 'cotton socks'  // changes value aasociated with the name property 
// console.log(product);

// product.newvalue = 'new value is 50%' // adding a nested object

// console.log(product);
// console.log(product.paste)
// console.log(product.paste.cleenteeth);


const product2 = {
    name: 'shirt',
    'dilivery-time': '1 day', 
    fun: function() {  // function inside an object is a method
        console.log('function inside object')
    }
};

console.log(product2['name']) //. braccker notation
console.log(product2['dilivery-time']);
product2.fun();

