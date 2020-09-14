const express = require('express');
const app = express()
const PORT = 3000;


app.get('/', (req,res)=>{
    console.log('Tamagachi is a go!')
})


























app.listen(PORT, () =>{
    console.log(`Listening for client at Port ${PORT}`)
})