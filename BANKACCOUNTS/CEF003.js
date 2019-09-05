// IMPORTED MODULES
const fs = require('fs');

function CEF003(json) {

   json.forEach((item) => {

      //******* 1- CONVERTE NUMERO EM DATA
      const dataStr = item.Data_Mov.toString(10);
      const year = Number(dataStr.slice(0, 4));
      let month = Number(dataStr.slice(4, 6)) - 1;
      //month = month.toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false });
      const day = Number(dataStr.slice(6, 8));

      //console.log(year, month, day);

      const dataMov = new Date(year, month, day);
      //console.log(dataMov)
      item.Data_Mov = dataMov;


      //******* 2- AJUSTA VALOR
      item.Deb_Cred === 'D' ? item.Valor *= -1 : item.Valor;
      const valor = item.Valor.toLocaleString('pt-BR', { style: 'decimal' });
      item.Valor = valor;


      // 3- DELETA LINHA DEB CRED
      delete item.Deb_Cred;
   })

   return json;
}


module.exports = CEF003;
