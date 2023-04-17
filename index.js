const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middlewear
app.use(cors());


const allProducts = require("./Data/products.json");
app.get('/', (req, res) => {
    res.send('server is running on')
});


app.get('/allProducts', (req, res) => {
    res.send(allProducts)
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const getSingleItem = allProducts?.find(p => p.id === id);
    if (!getSingleItem) {
        console.log('do not found')
    }
    res.send(getSingleItem)
} )

app.get('/categories/:name', (req,res) => {
    const cName = req.params.name;
    const showCategory = allProducts.filter(c => c.category == cName);
    res.send(showCategory)    
})

app.listen(port, ()  => {
    console.log('server is running port port 5000')
})

module.exports = app;