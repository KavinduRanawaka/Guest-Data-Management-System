const chalk=require("chalk");
//create
/*const add =()=>{
   console.log(chalk.green("adding"));
}*/

//view
/*const view =()=> console.log(chalk.blue("view"));  //short hand of arrow function*/

/*module.exports={
    add,
    view
}*/

const addGuest =()=>{
    console.log(chalk.green("Add"));
}
const updateGuest =()=>{
    console.log(chalk.yellow("Update"));
}
const deleteGuest =()=>{
    console.log(chalk.red("Delete"));
}
const readGuest =()=>{
    console.log(chalk.blue("Read"));
}
const listGuest =()=>{
    console.log(chalk.gray("List"));
}
module.exports={
    addGuest,updateGuest,deleteGuest,readGuest,listGuest
}