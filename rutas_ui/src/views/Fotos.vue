<template>
    <div >
        <h1>Fotografia :  {{$route.params.idFoto}}</h1>
      
        <router-link :to="{ name : 'Fotos', params: {idFoto : item}}"
            v-for="(item,index) of listaFotos" :key="index">

            <button>Button {{item}}</button>
        </router-link>
        
        <Fotografia></Fotografia>
        <button @click="home">Home</button>
                <button @click="anterior">Anterior</button>
                        <button @click="adelante">Siguiente</button>
    </div>
</template>

<script>
import  Fotografia  from "@/components/fotografia";
export default {
    name : 'Fotos',
    components : {
        Fotografia
    },
    data(){
        return {
            listaFotos : [1,2,3]
        }
        
    },
    methods : {
        home(){
            return this.$router.push('/');
        },
        anterior(){
            return this.$router.go(-1);
        },
        adelantevue(){
            return this.$router.go(1);
        }
    }
}
</script>