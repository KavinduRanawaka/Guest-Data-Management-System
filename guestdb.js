const fs=require("fs");
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
const db_file="data.json";

const addGuest =(name,address,contact_no,visit_date)=>{
    const guests=loadGuests();
    const length= guests.length;
    let id=1;
    if(length>0){
        id=guests[length-1].id+1;
    }

    guests.push({
        id:id,
        name:name,
        address:address,
        contact_no:contact_no,
        visit_date:visit_date
    });

    saveGuest(guests);

    console.log(chalk.green("Data saved!"));
}
const updateGuest =(id)=>{
    console.log(chalk.yellow("Update",id));
}
const deleteGuest =(id)=>{
    console.log(chalk.red("Delete",id));
}
const readGuest =(id)=>{
    console.log(chalk.blue("Read",id));
}
const listGuest =(id)=>{
    console.log(chalk.gray("List",id));
}


const saveGuest=(guests)=>{
    const dataJSON=JSON.stringify(guests);
    fs.writeFileSync(db_file,dataJSON);
}

const loadGuests=()=>{
    try{
        const dataBuffer=fs.readFileSync(db_file);
        const dataJSON=dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;

    }catch(e){
        return [];
    }
    
}
module.exports={
    addGuest,
    updateGuest,
    deleteGuest,
    readGuest,
    listGuest
};