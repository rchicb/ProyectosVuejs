const computed=new Vue({
    el :'#computed',
    data:{
        contador: 0
    },
    computed:{
        color(){
            return {
                'bg-success' : this.contador <=10,
                'bg-info' : this.contador > 10 && this.contador<=15,
                'bg-warning' : this.contador > 15 && this.contador < 20,
                'bg-danger' : this.contador >= 20
            }
        }
    }
})