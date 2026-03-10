<script setup>
import { reactive, computed } from "vue"


const form = reactive({
  email: "",
  senha: "",
  touched: {
    email: false,
    senha: false
  }
})

const errors = reactive({
  email: "",
  senha: ""
})

function validarEmail(valor) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(valor)
}

function validarFormulario() {
  errors.email = ""
  errors.senha = ""

  if (!form.email) {
    errors.email = "O email é obrigatório."
  } else if (!validarEmail(form.email)) {
    errors.email = "Digite um email válido."
  }

  if (!form.senha) {
    errors.senha = "A senha é obrigatória."
  } else if (form.senha.length < 6) {
    errors.senha = "A senha deve ter no mínimo 6 caracteres."
  }
}

const formValido = computed(() => {
  return (
    form.email &&
    form.senha &&
    validarEmail(form.email) &&
    form.senha.length >= 6
  )
})

function submit() {
  validarFormulario()

  if (!formValido.value) return

  // Futuramente aqui entra sua API
  console.log("Dados prontos para envio:", {
    email: form.email,
    senha: form.senha
  })

  alert("Login válido ✔")
}

function esqueceuSenha() {
  alert("Redirecionar para recuperação de senha.")
}
</script>

<template>



    <div class="lines">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    </div>

    

    <div class="bloco">
       <h2>SIGA SESI</h2>
        <div class="container">
            <form @submit.prevent="submit" novalidate>

              <div class="teste">
                <div  class="input">
                  <input type="text" placeholder="Digite seu email">
                  <font-awesome-icon :icon="['fas', 'user']" class="i"/>

                </div>
              </div>


              

                <!-- EMAIL -->
            <!-- <div class="field">
                

                <input
                              
                type="email"
                v-model="form.email"
                @blur="form.touched.email = true; validarFormulario()"
                :class="{ invalid: errors.email && form.touched.email }"
                placeholder="Digite seu email" 
                
                />
                <small v-if="errors.email && form.touched.email" class="error">
                {{ errors.email }}
                </small>
                  <font-awesome-icon :icon="['fas', 'user']" />

            </div> -->

            <!-- SENHA -->
            <div class="field">
                <input
                type="password"
                v-model="form.senha"
                @blur="form.touched.senha = true; validarFormulario()"
                :class="{ invalid: errors.senha && form.touched.senha }"
                placeholder="Digite sua senha"
                />
                <small v-if="errors.senha && form.touched.senha" class="error">
                {{ errors.senha }}
                </small>
            </div>

            <div class="actions">
                <button type="submit" :disabled="!formValido">
                Entrar
                </button>

                <a class="esqueceu-senha" href="#" @click.prevent="esqueceuSenha">
                Esqueceu a senha?
                </a>

                <a href="#" @click.prevent="esqueceuSenha">
                Criar uma conta
                </a>
            </div>
            </form>
        </div>
  </div>
  
</template>

<style scoped>
    
* {

  margin: 0;
  padding: 0;
  box-sizing: border-box !important;
}

html, body {
    
  height: 100vw;
  width: 100vw;  
  background-color: #000000;

}

body {
  display: table;
  width: 100%;
  height: 100%;
  background-color: #0a0a0a;  /* Background color */
  color: #000000;  /* Text color */
  line-height: 1.6;
  position: relative;
  font-family: sans-serif;
  overflow: hidden;
}

.lines {

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: 0;
 
  display: flex;
  justify-content: space-between; /* Distribute lines evenly */
  background-color: #0a0a0aec;  
}

.line {
  position: relative;
  width: 1px;
  height: 100%;
  /*background: #ffffff;  /* Line color */
  overflow: hidden;
  
}

.line::after {
  content: '';
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation: drop 7s 0s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

/* Different colors for each line's pseudo-element */
.line:nth-child(1)::after {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation-delay: 0.5s;
}

.line:nth-child(2)::after {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation-delay: 1s;
}

.line:nth-child(3)::after {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation-delay: 1.5s;
}

.line:nth-child(4)::after {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation-delay: 2s;
}

.line:nth-child(5)::after {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation-delay: 2.5s;
}

.line:nth-child(6)::after {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation-delay: 3s;
}

.line:nth-child(7)::after {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation-delay: 3.5s;
}

.line:nth-child(8)::after {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation-delay: 4s;
}

.line:nth-child(9)::after {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation-delay: 4.5s;
}

.line:nth-child(10)::after {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF0000 75%, #FF0000 100%);
  animation-delay: 5s;
}

@keyframes drop {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}













.bloco{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.container {
  margin: 0px auto;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  background: white;
  font-family: Arial, sans-serif;

    padding-left: 50px;
    padding-right: 50px;
    padding-top: 50px;
    padding-bottom: 70px;


  /*Deixando no centro*/
  
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

.field {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
}

input {
  padding: 12px;  
  border-radius: 0px;
  border: 1px solid #646262;
  font-size: 14px;
  transition: 0.3s;

  padding-right: 140px;
}

input:focus {
  border-color: #485851c2;
  outline: none;
}

.invalid {
  border-color: #e74c3c;
  background-color: #fff6f6;
}

.error {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 12px;
  border-radius: 6px;
  border: none;
  background: red;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: rgb(147, 3, 3);
}

button:disabled {
  background: #cccccc;

}

.esqueceu-senha {
    color: rgb(1, 120, 232);
}

a {
  
  padding-top: 3px;  
  text-align: center;
  font-size: 14px;
  color: #db3722;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h2{
    font-size: 60px;

    color: white;
    font-family: Arial, Helvetica, sans-serif;
    
}

.input{
  background-color: white;
  width: 400px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}

.input input{
  position: absolute;
  height: 100%;
  width: 100%;
}

.i {
  position: absolute;
  right: 20px;
  font-size: 15px;
  
  

}


</style>
