const path=require("path");
const { compileFunction } = require("vm");
let filePath="F:\\pepcoding_dev_program\\10_JAN\\Node\\path.js"
console.log(path.extname(filePath))
let src="F:\\pepcoding_dev_program\\10_JAN\\Node"
let dest="\\path.js";
let filepath=path.join(src,dest);
console.log(filepath)
console.log(path.basename(filePath));
