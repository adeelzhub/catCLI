// const command = process.argv[2];
const {listItems, addItem, updateItem, deleteItem} = require("./utils");

// const catStore = () =>{
//     if(command === "list"){
//         // list all items
//     }else if(command === "add"){
//         // add item
//     }else if (command === "update"){
//     // update item
//     }else if (command === "delete"){

//     }else{
//         console.log("Invalid Command")
//     }
// }


// listItems();

addItem({
    name: "Mano", 
    url:"/images/siamese.png", 
    adoptionCost: 600, 
    numbers: 1, 
    id:22})



// deleteItem()