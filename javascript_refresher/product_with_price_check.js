(function() {
"use strict";

var myProduct = {
    _price: 99.50,
    _name: 'Grindle 3',

    price:    function()  {return this._price;},
    name:     function()  {return this._name;},
    setPrice: function(p) {
        if (p <= 0) {
            throw new Error("Price must be positive");
        }
        this._price = p;
    },
    setName:  function(n) {this._name  = n;}
};


    console.log(myProduct);
})();