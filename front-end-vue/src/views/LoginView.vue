<script setup>


</script>

<template>


    <div class="container">
        
    

        <form>
                <div id="email-input" class="input-group">

                  <input type="text" placeholder="Digite seu email">
                </div>
           

            <div class="input-group">
                <input type="password" placeholder="Digite sua senha" class="senha">
            </div>

            <button type="submit">Entrar</button>

            <div class="links">
                <a href="#" class="esqueceu">Esqueceu a senha?</a>
                <a href="#" class="criar">Criar uma conta</a>
            </div>
        </form>
    </div>

   
    
</template>

<style scoped>

  
    
* {
    
  margin: 0;
  padding: 0;
  box-sizing: border-box !important;
}

html, body {

  height: 100%;
}

body {
  display: table;
  width: 100%;
  height: 100%;
  background-color: #111;  /* Background color */
  color: #000000;  /* Text color */
  line-height: 1.6;
  position: relative;
  font-family: sans-serif;
  overflow: hidden;
}



@keyframes drop {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}



         body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f2f2f2;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            margin-top: 40px;
            font-family: "Times New Roman", serif;
            font-size: 48px;
        }

        .container {
            margin-top: 30px;
            background: #fff;
            width: 400px;
            padding: 40px 30px;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            

        }

       /* input {
            width: 100%;
            padding: 15px;
            border-radius: 30px;
            border: 1px solid #ccc;
            outline: none;
            font-size: 16px;
        } */

        #email-input {
          
        }
        

        .input-group {
            margin-bottom: 20px;
        }

       

        .senha {
            border: 1px solid red;
        }

        .erro {
            color: red;
            font-size: 14px;
            text-align: left;
            margin-top: 5px;
            margin-left: 15px;
        }

        button {
            width: 100%;
            padding: 15px;
            border-radius: 10px;
            border: none;
            background-color: #ccc;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        .links {
            margin-top: 20px;
        }

        .links a {
          font-family: Arial, Helvetica, sans-serif;
            display: block;
            margin: 10px 0;
            text-decoration: none;
            font-size: 16px;
        }

        .esqueceu {
            color: #0066ff;
        }

        .criar {
            color: red;
        }

     
</style>