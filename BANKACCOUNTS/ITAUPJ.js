// IMPORTED MODULES
const fs = require('fs');
/*************************** FUNCTION insertHeaderOnCsv() ***************************/
function insertHeaderOnCsv(filesListed) {

   getCsvdataAndInsertHeader(filesListed);


};

function getCsvdataAndInsertHeader(filesListed) {
   const header = 'Data_Mov;Historico;Valor\n';
   for (let file of filesListed) {
      const csvNoHeaders = fs.readFileSync(file, 'utf8');
      const csvWithHeaders = header.concat(csvNoHeaders);

      const pasteCsvWithHeadersIntoCsvFile = fs.writeFileSync(file, csvWithHeaders);

   }
}

function sanitize_JSON_data_itau(JSON_data) {
   JSON_data.forEach((item) => {
      //******* 1- CONVERTE NUMERO EM DATA
      const dataStr = item.Data_Mov.toString(10);
      const dataMov = new Date(dataStr);
      item.Data_Mov = dataMov;
      // 2 converter valor para currency
      const valor = item.Valor.toLocaleString('pt-BR', { style: 'decimal' });
      item.Valor = valor;
      // 3 inserir coluna conta
      item.Conta = 'Itaú PJ'
      //console.log(JSON_data)
   });
   return JSON_data;
};

module.exports = {
   insertHeaderOnCsv: insertHeaderOnCsv,
   sanitize_JSON_data_itau: sanitize_JSON_data_itau
}