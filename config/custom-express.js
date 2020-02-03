const express = require('express')
const app = express()
const consign = require('consign')
//const bodyParser = require('body-parser')



customExpress = () => {
    //app.use(bodyParser.urlencoded())
    app.use(express.json())
    //Está incluindo a controller na app
    consign().include('controllers').include('models').into(app)

    return app
}

//estamos exportando ja invocadav
module.exports = customExpress()


//const usuarioController = require('./controllers/usuarios')

//usuarioController(app)

//quando algum cliente fazer alguma requisição para a porta ('/') passo a rota e uma função de call back
//app.get('/', (req, res) => {
//    res.send('Root rote node')
//})