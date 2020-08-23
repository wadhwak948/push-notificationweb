const express=require('express');
const webpush=require('web-push');
const bodyParser=require('body-parser');
const path=require('path');

const app=express();

app.use(express.static(path.join(__dirname,"client")));
app.use(bodyParser.json());

const publicVapidKey='BA0C_xPW3AVIJv8oG4nsHY7ygihRktqs5XR3kfcG06oIQrqFT2Zbkz2G7HJC-BBvD0nojkT4tLLNGw6rslQ-r4s';
const privateVapidKey='myctyddOe-0F9FkWkBx8_9Ypy_Sli_K2CfX9lwgAiV8';

webpush.setVapidDetails('mailto:wadhwak948@gmail.com', publicVapidKey, privateVapidKey);

// Subscribe Route

app.post('/subscribe',(req,res)=>{
    // get pushsubscription option
    const subscription=req.body;

    // send 201 - resource created
    res.status(201).json({});
    
    // create payload

    const payload=JSON.stringify({title: 'push test'});

    // pass object into sendnotification
    webpush.sendNotification(subscription,payload).catch(err=> console.log(err));
});

app.listen(4000,()=>{console.log("server running on port 4000")});