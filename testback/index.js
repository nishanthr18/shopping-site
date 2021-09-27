const express = require('express');

const app = express();
const port = 8000;


app.get('/', (req,res)=>{
    return res.send("heyy")
});

let admin =  (req,res)=>{
    return res.send('admin dashboard')
    
}

const isAdmin=(req,res,next)=>{
    console.log('isAdmin runningg...')
    next();
}


{
app.get('/admin',isAdmin,admin )
}

app.listen(port,()=>{
    console.log('server running!')
})

