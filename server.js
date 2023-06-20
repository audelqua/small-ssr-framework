const path = require('path') 
const fs = require('fs') 

const React =  require('react')
const ReactDOMServer =  require("react-dom/server");
const express =  require('express')
const App = require('./dist/App')

const PORT = process.env.PORT || 3000
const app = express()

app.get('/', function(req, res){
    fs.readFile(path.resolve('./public/index.html'), 'utf8', function(err, data){
        if(err) {
            console.log(err)
            return res.status(500).send('some error in reading file')
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(React.createElement(App))}</div>`
            )
        )
    })
})

app.use(express.static(path.resolve(__dirname, '.', "dist"), {maxAge: '30d'}))

app.listen(PORT, function(){
    console.log(`Server is listening on port ${PORT}`)
})