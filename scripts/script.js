const app=new Vue({
    el:'#app',
    data: {
        titulo:"Hola mundo",
        array:[
            {nombre:'Raul', edad:26,salario:89999,email:'marachbu@gmail.com'},
            {nombre:'Juan', edad:26,salario:89999,email:'marachbu@gmail.com'},
            {nombre:'Mario', edad:26,salario:89999,email:'marachbu@gmail.com'},
            {nombre:'Sandra', edad:26,salario:89999,email:'marachbu@gmail.com'},
        ],
        nuevaUsuario:''
    },
    methods:{
        agregar(){

            this.array.push({nombre:this.nuevaUsuario,edad:15,salario:2222,email:'ass@gmail.com'});
            this.nuevaUsuario='';
        },
        eliminar(index){

            this.array.splice(index,1);
        }
    },
    computed:{
        cantidadUsuarios(){
            return this.array.length;
        }
    }

    }) 