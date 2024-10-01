const yargs=require("yargs");
const db= require("./guestdb.js");


//console inputs

/*console.log("app.js");
db.add();
db.view();*/

// console.log(chalk.green("Hello!"))

// db.addGuest();
// db.deleteGuest();
// db.listGuest();
// db.readGuest();
// db.updateGuest(); 

// console.log(process.argv);

// const command=process.argv;
// if(command[2]==='add'){
//     db.addGuest();
// }
// else if(command[2]==='update'){
//     db.updateGuest();
// }
yargs.version("1.1.2");

yargs.command({
    command:'add',
    describe:'To add a guest',
    builder:{
        name:{
            describe:"Name",
            demandOption:true,
            type:"string"
        },
        address:{
            describe:"Address",
            type:"string"
        }
    },
    handler:function(){
        db.addGuest();
        console.log("Name =",yargs.argv.name);
        console.log("Address =",yargs.argv.address);
    }
});
yargs.command({
    command:'update',
    describe:'To update a guest',
    handler:function(){
        db.updateGuest();
    }
});


console.log(yargs.argv);

