const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasks = [];

function printTasks() {
  console.log('\n**** To-Do List ****\n');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.description} ${task.completed ? '(completed)' : ''}`);
  });
}

function addTask(description) {
  tasks.push({
    description: description,
    completed: false,
  });
  console.log(`Added "${description}" to the to-do list.\n`);
}

function removeTask(index) {
  tasks.splice(index, 1);
  console.log(`Removed task ${index + 1} from the to-do list.\n`);
}

function completeTask(index) {
  tasks[index].completed = true;
  console.log(`Completed task ${index + 1}.`);
}

function handleInput(input) {
  const parts = input.split(' ');
  const command = parts[0];
  const argument = parts.slice(1).join(' ');

  switch (command) {
    case 'list':
      printTasks();
      break;
    case 'add':
      addTask(argument);
      break;
    case 'remove':
      removeTask(argument - 1);
      break;
    case 'complete':
      completeTask(argument - 1);
      break;
    case 'quit':
      rl.close();
      break;
    default:
      console.log(`Invalid command: ${command}`);
  }
}

rl.setPrompt('Write your Command > ');
rl.prompt();
rl.on('line', (input) => {
  handleInput(input.trim());
  rl.prompt();
});
