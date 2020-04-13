Vue.component('padre',{
    template : `
    <div class="bg-dark text-white p-5">
    <h3>Componente Padre: {{numeroPadre}}</h3>
    <button @click="numeroPadre++" class="btn btn-primary">+</button>
    <hijo :numero="numeroPadre"></hijo>
    </div>
    `,
    data(){
        return {
            numeroPadre: 0
        }
    }
})