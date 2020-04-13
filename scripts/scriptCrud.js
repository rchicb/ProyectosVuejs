const crud=new Vue({
 el:'#crud',
 data:{
     titulo:'Crud con Vue.js',
     tareaNombre:'',
     listaTareas:[],
     tareaEstado: false
 },
 methods:{
     crearTarea(){
         this.listaTareas.push(
             { nombre: this.tareaNombre,estado:this.tareaEstado});
             this.tareaNombre='';
            //  actualizarLocalStorage();
             localStorage.setItem('tareas',Json.stringify(this.listaTareas));
     },
     editarEstado(index){
         this.listaTareas[index].estado =true;
         actualizarLocalStorage();
     },
     eliminarTarea(index){
        this.listaTareas.splice(index,1);
        actualizarLocalStorage();
     },
     actualizarLocalStorage(){
         localStorage.setItem('tareas',Json.stringify(this.listaTareas));
     }
 },
 created(){
    let datosDB=JSON.parse(localStorage.getItem('tareas'));
    if(datosDB===null){
        this.tareaEstado=[];
    }else{
        this.tareaEstado=datosDB;
    }
 }

})