<template>
<base-card>
<h1>Login Form</h1>
    <form @submit.prevent="submitForm">  
      <div class="form-control">
        <label for ="E-mail"> E-mail</label> 
          <input type="email" id="email" v-model="email" />
      </div> 
      <div class="form-control">
        <label for ="password"> password</label> 
          <input type="password" id="password" v-model="password" />
      </div> 
      <p v-if="!formIsValid">Please enter a vlid email and psssword</p>
      <base-button>{{submitButtonCaption}}</base-button>
      <base-button mode="flat" type="button" @click="switchAuthMode">{{switchModeButtonCaption}}</base-button>
    </form>
</base-card>
</template>

<script>
export default {
    data(){
        return{
            email:"",
            password:"",
            formIsValid:true,
            mode:'login'
        };
    },
    computed:{
        submitButtonCaption(){
            if(this.mode==='login')
                return 'Login';
             else
                return 'SignUp'   ;

            },
            switchModeButtonCaption(){
            if(this.mode==='login')
                return 'Sign Up Instead';
            else        
                return 'Login Instead';

        },
        
        
    },
    methods:{
    submitForm(){
    this.formIsValid=true;
    if(this.email==='' || !this.email.includes('@')||this.password.length<6)
    this.formIsValid=false;
    return;
},
switchAuthMode(){
 if(this.mode==='login')
    this.mode='signup';
  else
  this.mode='login'  ;
}
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>