window.todo = function () {
    return {
        tasks : Alpine.$persist([
            {id: 1, title: 'Complete online JavaScript course', completed: true},
            {id: 2, title: 'Jog around the park 3x', completed: false},
            {id: 3, title: '10 minutes meditation', completed: false},
            {id: 4, title: 'Read for 1 hour', completed: false},
            {id: 5, title: 'Pick up groceries', completed: false},
            {id: 6, title: 'Complete Todo App Frontend Mentor', completed: false}
        ]),
        darkMode: Alpine.$persist(true),
        filteredTasks : [],
        editedTask: null,
        removedTask: null,
        newTask: '',
        filter: Alpine.$persist('all'),

        get completedTasks() {
            return this.tasks.filter(task => task.completed);
        },

        get activeTasks() {
            return this.tasks.filter(task => ! task.completed);
        },

        get filteredTasks() {
            return {
                all: this.tasks,
                active: this.activeTasks,
                completed: this.completedTasks,
            }[this.filter];

        },

        get allTasksCompleted() {
            return this.completedTasks.length === this.tasks.length;
        },

        addTask() {
            if (! this.newTask) {
                return;
            }
            this.tasks.push({
                id: Date.now(),
                title: this.newTask,
                completed: false,
            });

            this.newTask = '';
        },

        editTask(task) {
            task.cashedTitle = task.title;
            this.editedTask = task;
        },

        cancelEdit(task) {
            task.title = task.cashedTitle;
            this.editedTask = null;
            delete task.cashedTitle;
        },


        editComplete(task) {
            if (task.title.trim() === '') {
                return this.removeTask(task);
            }

            this.editedTask = null;
        },

        removeTask(task) {
            let index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
        },

        completeTask() {
            this.task.completed = ! this.task.completed;
        },

        toggleCompleteAllTasks() {
            let CompleteAllTasks = this.allTasksCompleted;

            this.tasks.forEach(task => task.completed = ! CompleteAllTasks);
        }
    }
}