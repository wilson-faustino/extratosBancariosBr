#  What is this?
A simple package that helps 

## What does it do?
1- Converte o extrato bancário fornecido em .txt para .json
2- Returns a json either an object or a string

##Installation

```
$ npm i extratosBancariosBr
```

## How does it work?
```
const extratosBancarios = require('extratosBancariosBr').convert;

convertExtract(
   {
      csvDirPath: './CSV',
      jsonDirPath: './JSON',
      jsonFileName: 'extrato',
      bankAccount: '',
      functionReturn: 'obj'
   })
```

## Options

|    Property    |                 What                 |  Default | Option |
|:--------------:|:------------------------------------:|:--------:|:------:|
|   csvDirPath   | path to import the extract files     |  './CSV' |        |
|   jsonDirPath  | path to export the json file         | './JSON' |        |
|  jsonFileName  | json file's name                     |  extrato |        |
|   bankAccount  | none, yet                            |    ''    |        |
| functionReturn | returns either an object ou a string |   'obj'  |  'str' |




/*
|--------------------------------------------------------------------------
| Return The Application
|--------------------------------------------------------------------------
|
| This script returns the application instance. The instance is given to
| the calling script so we can separate the building of the instances
| from the actual running of the application and sending responses.
|
*/