
const express = require("express");

const mongoose = require("mongoose");
const app = express()

const productRoute = require("./routes/product.route.js");
// CONFIGURING THE MIDDLEWARE
app.use(express.json()); // enables express to use JSON 

app.use(express.urlencoded({extended:false})) //for url-encoded values


const Product = require("./models/product.model.js");
mongoose.connect("mongodb+srv://sharonsaji9846_db_user:sharon@cluster0.hjxf8bg.mongodb.net/?appName=Cluster0")
.then(() =>{
    console.log("Connected to MongoDB");
    app.listen(3000,() =>{
        console.log("Server is running on port 3000");
    })

})
.catch(() =>{
   console.error("Connection failed"); 
})



// ROUTES 
app.use('/api/products' , productRoute); // Mounts the product routes to handle all requests starting with /api/products (basically for organisation)
app.get('/', (req,res) =>{

    res.send("Fuck you")
})


// we added it in later steps
// app.get('/api/products', async (req,res) =>{
//     try{
        
//         const products = await Product.find({});
//         res.status(200).json(products);
//     }catch(err){
//         res.status(500).json({message: err.message});
//     }
// })

// specialized one 

// app.get('/api/product/:id' , async (req,res) =>{
//     try{
//         // PARAMS
//         const {id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);

//     }
//     catch(err){
//         res.status(500).json({message: err.message});
//     }
// })
// app.post('/api/products',async (req,res) =>{
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);   
//         // the .json method is primarily used within express response object 
//     }catch(err){
//         res.status(500).json({message : err.message});
//     }
// })

// UPDATE PRODUCT

// app.put('/api/product/:id', async (req,res) =>{
//     try{
//         const {id}  = req.params;

//         const product = await Product.findByIdAndUpdate(id,req.body);
//         if(!product){
//             return res.status(404).json({message: "Product nt found"});
//         }
        
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);



//     }catch(err){
//         res.status(500).json({message:err.message});

//     }
// })

// // DELETE PRODUCT

// app.delete('/api/product/:id', async (req,res) =>{
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
        

//         if(!product){
//             return res.status(404).json({message: "Product not found"});
//         }
//         res.status(200).json({message: "Product deleted"})

//     }
//     catch(err){
//         res.status(500).json({message:err.message});
//     }
// })

