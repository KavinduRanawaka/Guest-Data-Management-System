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


//add
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
        },
        contact_no:{
            describe:"Contact No",
            type:"number"
        },
        visit_date:{
            describe:"Visit Date", 
            type:"string"
        }
    },
    handler(argv){
        db.addGuest(argv.name,argv.address,argv.contact_no,argv.visit_date);
        
    }
});

//update
yargs.command({
    command:'update',
    describe:'To update a guest',
    builder:{
        id:{
            description:"ID",
            demandOption:true,
            type:"number"
        },
        name:{
            describe:"Name",
            type:"string"
        },
        address:{
            describe:"Address",
            type:"string"
        },
        contact_no:{
            describe:"Contact No",
            type:"number"
        },
        visit_date:{
            describe:"Visit Date",
            type:"string"
        }
    },
    handler(argv){
        db.updateGuest(argv.id,argv.name,argv.address,argv.contact_no,argv.visit_date);
        
    }
});

//delete
yargs.command({
    command:'delete',
    describe:'To dlete a guest',
    builder:{
        id:{
            description:"ID",
            demandOption:true,
            type:"number"
        }
    },
    handler(argv){
        db.deleteGuest(argv.id);
        
    }
});

//read
yargs.command({
    command:'read',
    describe:'To read a guest',
    builder:{
        id:{
            description:"ID",
            demandOption:true,
            type:"number"
        }
    },
    handler(argv){
        db.readGuest(argv.id);
        
    }
});

//list
yargs.command({
    command:'list',
    describe:'list all guest',
    handler(argv){
        db.listGuest();
        
    }
});





yargs.parse();

