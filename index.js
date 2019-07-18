var getImageUrls = require('get-image-urls');
 var i = 0;
var c = getImageUrls('https://www.amazon.in/', function(err, images) {
    do {
        if (!err) {
            console.warn('Images found', images.length);
            console.log(images);
        }

        else {
            console.log('ERROR', err);
          } 

    i = i + 1;
   
    } while (i < 5);
 
})




