
<template>
   <div>
       <h1>{{ msg }}</h1>

  <button  @click="addOne">增加一个香蕉 </button>

  <button  @click="minuOne">减少一个香蕉 </button>
   </div>
</template>

<script>
export default {
       data (){
              return {
                    msg :'i am banana',
                    price:15
              }
       },
       methods:{
              addOne(){
                     this.$store.commit('increment',this.price)
              },
              minuOne(){
                    this.$store.commit('decrement',this.price)
              }
       }
}
</script>
