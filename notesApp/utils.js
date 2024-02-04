console.log("utils.js")
const name ="to understand export files"
const add = function(a, b){
    return a+b
}

const fact= function(no){
    if(no<=1){
        return 1;
    }
    x= no*fact(no-1)
    return x
}
// it is important to export the items that we are required to use in other files because just by using require(), it is not possible to access the variables and methods 
// defined in the other file. only the print statements are executed.

module.exports = fact