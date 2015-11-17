 $(document).ready(function() {
   $.getJSON('data/product.json', function(products) {
     console.log(products);

     var productsList = $.map(products, function(phone) {
       var $div = $("<div/>").append(
         '<img src = "img/product/thumbs/' + phone.image + '">',
         '<a>' + phone.desc + '</a>',
         '<div id=color>' + 'Colors: ' + phone.availableColors + '</div>',
         '<div id=price>' + '$' + phone.price + '</div>',
         '<div id=stock>' + 'In Stock: ' + phone.stock + '</div>');
     
       
       return $div;
     });
     console.log(productsList);
     $('main').append(productsList);
   });
 });