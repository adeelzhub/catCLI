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

exports.adopted = (id)=>{
    stockList.map(cat => (cat.id === id && cat.numbers>0) ? cat.numbers--: (cat.id === id && cat.numbers === 0)&& console.log("Cats not available"));
    writeDB(stockList);; 

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
    stockList.filter(cat => cat.id === id ? cat.numbers = cat.numbers+addNumbers:cat.numbers);
    // console.log(stockList)
    writeDB(stockList);


}

exports.deleteItem = (id)=>{
    let updatedList = []
    stockList.filter(cat => cat.id !== id && updatedList.push(cat));

   writeDB(updatedList);

}
exports.commandList = ()=>{
    let commandsList = JSON.parse(fs.readFileSync("./commandslist.json"));
    commandsList.map(command => console.log(command));
}