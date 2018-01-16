var express = require('express');
var edge = require('edge-js');
var bodyParser = require('body-parser');
// import * as  React from 'react';
// import * as  ReactDOMServer from 'react-dom/server';
var app = express();
app.use(bodyParser.json({limit: '50mb'}));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
var port = process.env.PORT || 3000;

var hello = edge.func(function () {
    /*
    async(input) => {
      return ".NET welcomes " + input.ToString();
    }
    */
});
const testMethod= edge.func({
    assemblyFile: 'G:\\EdgeSample\\TestClassLibrary\\TestClassLibrary\\bin\\Debug\\netcoreapp2.0\\TestClassLibrary.dll',
    typeName: "TestClassLibrary.Class3",
    methodName:"TestMethod"
})
 testMethod("this is my input", function (error, result) {
     if (error) throw error;
     console.log(result);
 })
app.get('/', (req, res) => {
    hello('User', function (error, result) {
        if (error) throw error;
        console.log(result);
        res.send(result);
    });
    
});

app.listen(port);
console.log("server started on port : ", port);
