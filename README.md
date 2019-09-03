#  What is this?
A simple package that helps 

## What does it do?
1- Converte o extrato bancário fornecido em .txt para .json
2- Returns a json either an object or a string

##Installation

```
$ npm install extratosBancariosBr # This will install
```

## How does it work?
```
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




