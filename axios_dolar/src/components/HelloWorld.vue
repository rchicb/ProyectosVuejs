<template>
  <v-container>

    <v-row>
      <v-col xs="12">
       <v-card >
        <v-date-picker 
        v-model="picker"
        full-width
        locale="es-es"
        :min= "minimo"
        :max= "maximo"
        @change="getDolar(picker)"
        ></v-date-picker>
       </v-card>
      </v-col>
    </v-row>

   <v-row >
      <v-col xs="12">
       <v-card color="error" dark>
         <v-card-text class="display-1 text-center">{{valor}}</v-card-text>
       </v-card>
      </v-col>
    
    </v-row>
    

  </v-container>
</template>

<script>
import  axios  from "axios";
  export default {
    name: 'HelloWorld',
    data () {
        return {
          picker : new Date().toISOString().substr(0, 10),
          minimo : '1984',
          maximo : new Date().toISOString().substr(0, 10),
          valor : null
        }
    },
    methods: {
      async getDolar(dia){
       let  ddmmyy = dia.split('-').reverse().join('-')
       try {
           let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
        this.valor = await datos.data.serie[0].valor;
       } catch (error) {
         console.log(error)
       }finally{

       }
      }
    },
    created (){
      this.getDolar(this.picker);
    }
    
  }
</script>
