const fs = require("fs");
let parsedCatList = JSON.parse(fs.readFileSync("./storage.json"));



const readDB = () =>{
    try{
        return parsedCatList;
    }catch(error){
        return "No Item in the stock";
    }
}

const writeDB =(update) =>{
    let stringyList = JSON.stringify(update)
    fs.writeFileSync("./storage.json",stringyList);
}




exports.listItems = () =>{
    return (parsedCatList.map(cat => console.log(`\nCat Id: ${cat.id} \n${cat.numbers} ${cat.name} up for adoption, adoption cost : £${cat.adoptionCost}`)));
                // console.log(`Number of Cat Breeds available for adoption: ${parsedCatList.length} `);
   
}
exports.addItem = (name,adoptionCost,numbers)=>{
    maxId = 0;
    parsedCatList.filter(cat=>{(cat.id>maxId)? maxId = cat.id: maxId})
    let newItem = {
        name : name,
        adoptionCost: adoptionCost,
        numbers:numbers,
    }
    newItem.id = maxId+1;
    let itemList = readDB();
    itemList.push(newItem);
    writeDB(itemList);

}


exports.deleteItem = (id)=>{
    // console.log(typeof(iD))
    let itemList = readDB();
    let updatedList = []
    itemList.filter(cat => cat.id !== id && updatedList.push(cat));
    // itemList.filter(cat => console.log(typeof(cat.id)));

   writeDB(updatedList)

}
exports.commandList = ()=>{
    let commandsList = JSON.parse(fs.readFileSync("./commandslist.json"))
    console.log(`List of commands\n ${commandsList}`);
}