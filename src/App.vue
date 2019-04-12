<template>
  <div id="app">
        <b-navbar toggleable="md">         
          
            <b-navbar-brand href="#" class="text-white title-app">Account Manager</b-navbar-brand>                                                            
            <b-nav-form @submit="mySubmit" class="ml-auto">
              <b-form-input class="mr-sm-2" v-model="searchString" placeholder="Search"></b-form-input>
              <!-- <b-button class="my-2 my-sm-0" type="submit">Search</b-button> -->
            </b-nav-form>
        </b-navbar>   
    
    <b-container class="bv-example-row">
      <account :searchString="searchString"> </account>
    </b-container>
  </div>
</template>

<script>
import Account from './components/Accounts.vue'

export default {
   name: "App",
   components:{
    Account//character
  },
  data() {
    return {
      searchString:''
    }
    
  },
  methods:{
    mySubmit(evt){
      evt.preventDefault()      
      console.log("hello from submit form method app.vue")
    }                       
  }        
}
</script>

<style lang="scss" src="./styles/global.scss"></style>