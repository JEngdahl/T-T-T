let express = require('express')
let app = express()
let game = "./index.html"

app.get('/',function(req,res){
  res.render(game)
})

app.listen('1111',function(){console.log('listen on port 1111')})
