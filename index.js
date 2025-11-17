/**
 * Task Class
 * 
 * A class to manage tasks with title, priority, completion status, and time tracking.
 */

class Task {
    #completed = false
    #minutesSpent = 0

    static allTasks = []

 constructor(title, priority){
    this.title = title
    this.priority = priority
 }

 get completedStatus(){
    return this.#completed
 }

 get timeSpent(){
    return this.#minutesSpent
 }

 workOn(minutes){
    this.#minutesSpent = this.#minutesSpent + minutes;
    console.log(`Worked on ${this.title} for ${minutes} minutes. Total time: ${this.#minutesSpent} minutes`)
 }

 complete(){
    this.#completed = true
    console.log(`${this.title} has been completed!`)
 }

 isComplete(){
    return this.#completed  
}

static getTotalTasks(){
    return this.allTasks.length
}

static findByTitle(title){
    return this.allTasks.find((task) => task.title === title)
}

}




//Test class with examples below:
// Creating a task
const task = new Task("Wash dishes", "low");
console.log(task.title);      // "Wash dishes"
console.log(task.priority);   // "low"

// Private fields cannot be accessed directly
console.log(task.completed);     // undefined
console.log(task.minutesSpent);  // undefined

// Getter examples
console.log(task.completedStatus); // false
console.log(task.timeSpent);       // 0

// workOn examples
task.workOn(30);
// "Worked on Wash dishes for 30 minutes. Total time: 30 minutes"

task.workOn(15);
// "Worked on Wash dishes for 15 minutes. Total time: 45 minutes"

// complete example
task.complete();
// "Wash dishes has been completed!"

console.log(task.isComplete()); // true

// Static property examples
const t1 = new Task("Laundry", "medium");
const t2 = new Task("Pay bills", "high");

console.log(Task.allTasks);
// [ Task {...}, Task {...}, Task {...} ]

// Static method examples
console.log(Task.getTotalTasks()); // 3

console.log(Task.findByTitle("Laundry"));
// Returns the "Laundry" task instance

// Export the Task class for testing
module.exports = { Task };
