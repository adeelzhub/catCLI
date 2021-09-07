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
    let strigyList = JSON.stringify(update)
    fs.writeFileSync("./storage.json",strigyList);
}




exports.listItems = () =>{
    return (parsedCatList.map(cat => console.log(`\nCat Id: ${cat.id} \n${cat.numbers} ${cat.name} up for adoption, adoption cost : £${cat.adoptionCost}`)));
                // console.log(`Number of Cat Breeds available for adoption: ${parsedCatList.length} `)
   
}
exports.addItem = (item)=>{
    let itemList = readDB();
    itemList.push(item);
    // console.log(updatedList);
    console.log(itemList);
//    let updatedList = JSON.stringify(itemList);
    writeDB(itemList);

}


exports.deleteItem = (id)=>{
    let itemList = readDB();
    let updatedList = itemList.filter(cat => cat.id !== id)

   writeDB(updatedList)

}