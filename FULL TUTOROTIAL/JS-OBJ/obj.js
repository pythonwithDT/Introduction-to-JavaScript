// objects 

const product = {
    name: 'socks',
    price: 1090,
    paste: {
        cleenteeth: 2,
        charcoal: 5
    },
};


console.log(product.price)  // asscessing a value inside an object ( . )
console.log(product.name); 

product.name = 'cotton socks'  // changes value aasociated with the name property 
console.log(product);

product.newvalue = 'new value is 50%' // adding a nested object

console.log(product);
console.log(product.paste)
console.log(product.paste.cleenteeth);



