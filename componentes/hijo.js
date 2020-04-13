Vue.component('hijo',{
    template: `
    <div class="bg-success text-white p-2">
    <h3>Componente Hijo :{{numero}}</h3>
    </div>
    `,
    props:['numero']
})