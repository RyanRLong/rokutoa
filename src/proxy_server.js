var express = require('express')
var proxy = require('http-proxy-middleware')
var cors = require('cors')


var app = express()

app.use(cors)
app.use('/', proxy({ target: 'http://192.168.0.103:8060', changeOrigin: true }))
app.listen(9000)
