const express = require('express');
const app = express();
const port = 8080;

const db = require('./config/mongoose');
const ShortUrl = require('./models/shortUrl')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find({});
    res.render('index', {shortUrls: shortUrls})
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${port}`)
})