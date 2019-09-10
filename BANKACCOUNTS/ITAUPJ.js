// IMPORTED MODULES
const fs = require('fs');
/*************************** FUNCTION insertHeaderOnCsv() ***************************/

function ITAUPJ(jsonObj) {


   jsonObj.forEach((item) => {
      //******* 1- CONVERTE NUMERO EM DATA
      const dataStr = item.Data_Mov.split('/')

      const dataMov = new Date(dataStr[2], dataStr[1] - 1, dataStr[0]);
      console.log(dataMov)
      item.Data_Mov = dataMov;

      // 2 converter valor para currency
      const valor = item.Valor.toLocaleString('pt-BR', { style: 'decimal' });
      item.Valor = valor;
      // 3 inserir coluna conta
      item.Conta = 'Itaú PJ'
      //console.log(jsonObj)
   });
   return jsonObj;
};

module.exports = ITAUPJ;