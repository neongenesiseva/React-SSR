import express from 'express';
import renderer from './utils/renderer';

const app = express();

//use public as the static, so bundle.js do have to write in public/bundle.js 
//(go to root directory and search public as root)
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send(renderer());
})

app.listen(3000,()=>{
    console.log('listening to 3000')
})