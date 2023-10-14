#! /usr/bin/env node
// Todo 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(`
████████╗ ██████╗ ██████╗  ██████╗ 
╚══██╔══╝██╔═══██╗██╔══██╗██╔═══██╗
   ██║   ██║   ██║██║  ██║██║   ██║
   ██║   ██║   ██║██║  ██║██║   ██║
   ██║   ╚██████╔╝██████╔╝╚██████╔╝
   ╚═╝    ╚═════╝ ╚═════╝  ╚═════╝ 
`);
let todo = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TodoList",
            message: "What do you wish to add in your Todo list?"
        },
        {
            type: "confirm",
            name: "AddMore",
            message: "Do you want to add more?\n",
            default: false
        },
    ]);
    const { TodoList, AddMore } = answers;
    loop = AddMore;
    if (TodoList) {
        todo.push(TodoList);
    }
    else {
        console.log("Please insert valid input.");
    }
}
;
if (todo.length > 0) {
    console.log(chalk.rgb(105, 145, 11)("Your Todo List"));
    console.log("--------------");
    todo.forEach(element => {
        console.log(chalk.gray('-', element));
    });
}
else {
    console.log("Nothing Found.");
}
;
