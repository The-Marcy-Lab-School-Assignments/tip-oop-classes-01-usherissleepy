/**
 * Task Class
 * 
 * A class to manage tasks with title, priority, completion status, and time tracking.
 */

class Task {
 static allTasks = []
 constructor(title, priority){
    this.title = title
    this.priority = priority
    this.#completed = false
    this.#minutesSpent = 0

    Task.allTasks.push(this)
 }

 #completed
 #minutesSpent

 getCompletedStatus(){
    return this.#completed
 }

 getTimeSpent(){
    return this.#minutesSpent
 }

 workOn(minutes){
    this.#minutesSpent = this.#minutesSpent + minutes;
    console.log(`Worked on ${this.title} for ${minutes} minutes.  Total time: ${this.#minutesSpent} minutes`)
 }

 
}

//Test class with examples below:


// Export the Task class for testing
module.exports = { Task };
