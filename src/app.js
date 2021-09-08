const command = process.argv[2];
const {listItems, adopted, addItem, updateItem, deleteItem,commandList} = require("./utils");

const catStore = () =>{
    if(command === "list"){
            listItems();
    }else if(command === "adopted"){
        const id = +process.argv[3];
        adopted(id);

    }else if(command === "add"){
        const name = process.argv[3];
        const adoptionCost = process.argv[4];
        const numbers = process.argv[5];
        addItem(name, adoptionCost, numbers )


    }else if (command === "update"){
        const id = +process.argv[3];
        const addNumbers = +process.argv[4];
        updateItem(id, addNumbers);
    }else if (command === "delete"){
        const id = +process.argv[3];
        deleteItem(id);


    }else{
        console.log("Invalid Command\n")
        console.log("List of valid commands")
        commandList()
    }
}



catStore();