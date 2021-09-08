const fs = require("fs");
let parsedCatList = JSON.parse(fs.readFileSync("./storage.json"));

const readDB = () =>{
    try{
        return parsedCatList;
    }catch(error){
        return "No Item in the stock";
    }
}


let stockList = readDB()

const writeDB =(update) =>{
    let stringyList = JSON.stringify(update)
    fs.writeFileSync("./storage.json",stringyList);
}




exports.listItems = () =>{
    return (stockList.map(cat => console.log(`\nCat Id: ${cat.id} \n${cat.numbers} ${cat.name} up for adoption, adoption cost : £${cat.adoptionCost}`)));
                // console.log(`Number of Cat Breeds available for adoption: ${parsedCatList.length} `);
   
}
exports.addItem = (name,adoptionCost,numbers)=>{
    maxId = 0;
    stockList.filter(cat=>{(cat.id>maxId)? maxId = cat.id: maxId})
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
exports.updateItem = (id,addNumbers) =>{


}

exports.deleteItem = (id)=>{
    let updatedList = []
    stockList.filter(cat => cat.id !== id && updatedList.push(cat));

   writeDB(updatedList)

}
exports.commandList = ()=>{
    let commandsList = JSON.parse(fs.readFileSync("./commandslist.json"))
    console.log(`List of commands\n ${commandsList}`);
}