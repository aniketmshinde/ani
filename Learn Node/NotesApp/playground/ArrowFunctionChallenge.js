
const tasks = {
    tasks: [
        {
            text: "Grocery Shopping",
            completed: true
        },
        {
            text: "Clean Yard",
            completed: false
        },
        {
            text: "Film Course",
            completed: false
        }
    ],
    getTasksToDo() {
        return this.tasks.filter((task) => !task.completed )
    },
    getTasksToDoAnotherWay: function () {

    }
}

console.log(tasks.getTasksToDo())
//console.log(tasks.getTasksToDoAnotherWay())
console.log("Aniket")