//importar as dependencias 
const express= require('express')
const bodyParser = require ('body-parser')

//inicializando o express
const app =express()

//configurar a view engine e configurar a pasta pública
app.set('view engine', 'ejs')
app.use(express.static('public'))

//configurar o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rota
app.get("/",(req,res)=>{
    res.send("Vai etim!")
})

//escutar a porta
app.listen(3000)

