const app = new Vue(
    {
      el: '#app',
      
      data:{
        todoList:['FARE LA SPESA', 'ANDARE IN PALESTRA', 'ORGANIZZARE LE VACANZE', 'FARE APERITIVO', 'MEDITARE', 'LEGGERE', 'STUDIARE'],
        task: ""
      },
  
      methods:{
        addTask(){
            (this.task) ? this.todoList.push(this.task.toUpperCase()) : "";
            this.task = ""
        },

        removeTask(index){
            this.todoList.splice(index,1)
        }
      }
    }
  );