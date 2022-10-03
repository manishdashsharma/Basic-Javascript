var sellingPrice = 199 ;
var listingPrice = 799 ;

DiscountPercentage =Math.round(((listingPrice - sellingPrice) / listingPrice) * 100);

console.log(`
    Discount percentage is : ${DiscountPercentage}% off
`);

