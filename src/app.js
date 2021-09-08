const command = process.argv[2];
const {listItems, addItem, updateItem, deleteItem,commandList} = require("./utils");

const catStore = () =>{
    if(command === "list"){
            listItems();
    }else if(command === "add"){
        const name = process.argv[3];
        const adoptionCost = process.argv[4];
        const numbers = process.argv[5];
        addItem(name, adoptionCost, numbers )


    }else if (command === "update"){
        const id = process.argv[3];
        const addNumbers = process.argv[4];
        updateItem(id, addNumbers);
    }else if (command === "delete"){
        const id = +process.argv[3];
        deleteItem(id);


    }else{
        console.log("Invalid Command\n")
        commandList()
    }
}


// listItems();

// addItem({
//     name: "Mano", 
//     url:"/images/siamese.png", 
//     adoptionCost: 600, 
//     numbers: 1, 
//     id:22})



// deleteItem(2);

catStore();