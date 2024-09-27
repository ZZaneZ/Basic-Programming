avail: function() {
    return this.data.filter(function(element, index) {
        return element.avail === 'Y'
    })
//



availability: function () {
    const availabilityProducts = []
    for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].availability === 'Y') {
            availabilityProducts.push(this.data[i])
        }
    }
    return availabilityProducts
},
//



salePrice: function () {
    return this.data.filter(function (element, index) {
        return element.availability === 'Y'
    }).map(function (element, index) {
        return ({
            product_name: element.product_name,
            sku: element.sku,
            salePrice: Number(element.price) - element.discount
        })
    })
},
//



salePriceWhileLoop: function() {
    const availabilityProducts = []

    let i = 0

    while (i < this.data.length) {
        if (this.data[i].availability === 'Y') {
            availabilityProducts.push(this.data[i])
        }
        i++
    }
    return availabilityProducts.map(function (element, infex) {
        return ({
            product_name: element.product_name,
            sku: element.sku,
            salePrice: Number(element.price) - element.discount
        })
    })

}
// while loop