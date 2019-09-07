
(function db(i = 5) {

   const fs = require('fs');
   console.log(`oi ${i}`)
   i++;
   if (i < 10) { db() }
}
)()