let { DynamicConfigs } = require('./config');


let conf = DynamicConfigs();


console.log('Name is ',conf.name);
console.log('URL is ',conf.mongoUrl);