const connectLivereload = require('connect-livereload')
const express = require('express');
const app = express();
const port = 3017;
const path = require('path');
const livereload =require('livereload');
const liveReloadServer = livereload.createServer();

/* Rutas */

const mainRouter = require('./routers/main'); 


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(express.static(path.join(__dirname,'public')));
liveReloadServer.watch(path.join(__dirname,'public'));
app.use(connectLivereload())


app.use('/',mainRouter)

liveReloadServer.server.once('connection',() => {
    setTimeout(() => {
        liveReloadServer.refresh('/')
    }, 50);
})


app.listen(port,()=> console.log(`Servidor levantado en http://localhost:${port}`))