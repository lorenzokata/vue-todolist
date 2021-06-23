const app = new Vue(
    {
      el: '#app',
      
      data:{
        todoList:['FARE LA SPESA', 'ANDARE IN PALESTRA', 'ORGANIZZARE LE VACANZE', 'FARE APERITIVO', 'MEDITARE', 'LEGGERE', 'STUDIARE'],
        counter: 0,
        task: ""
      },
  
      methods:{
        addTodo(){
            (this.task) ? this.todoList.push(this.task.toUpperCase()) : "";
            this.task = ""
        }
      }
    }
  );