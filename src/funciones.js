const app = new Vue({
    el:'#app',
    data: {
        tituloH3: 'To-Do List Vue.ver',
        tasks:[{
            id: 0,
            title:'hacer ejercicio',
            description:'sal a pedalear',
            isCompleted: false
        },
        {
            id: 1,
            title:'pescar',
            description:'noo se cayo el jose',
            isCompleted: false
        },
        {
            id: 2,
            title:'estudiar vue',
            description:'aprende vue',
            isCompleted: false
        }],
        newId: -1,
        newTitle: '',
        newDescription: ''
    },
    methods: {
        addTask(){
            let lastTask = this.tasks.slice(-1)
            newTaskId = lastTask[0].id + 1
            console.log(newTaskId)
            this.tasks.push({
                id: newTaskId,
                title: this.newTitle,
                description: this.newDescription,
                isCompleted: false
            })
        },
        deleteTask(id){
            let nuevoArr = this.tasks.filter((task) => task.id != id)
            this.tasks = nuevoArr
        },
        markAsComplete(index){
            this.tasks[index].isCompleted = !this.tasks[index].isCompleted
        }
    },
    computed: {
        changeCompleteBtn(){
            let word = ''
            this.tasks[index].isCompleted ?
            word = 'No completo':
            word = 'Completar'
            return word
        }
    }
})