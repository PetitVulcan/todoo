const express = require('express');

const app = express();
const fs = require("fs");
const bodyparser = require('body-parser');
//Nombre aléatoire
const rand = function() {
    return Math.random().toString(36).substr(2);
};

const token = function() {
    return rand() + rand(); // to make it longer
};

const todoosDB =JSON.parse(fs.readFileSync('public/todoos.json','utf-8'));
const projetsDB =JSON.parse(fs.readFileSync('public/projets.json','utf-8'));
const userAccess =JSON.parse(fs.readFileSync('public/access.json','utf-8'));
//Pour que notre app web nodeJs accepte les datas en POST
app.use(bodyparser.urlencoded({extended : true}));

//CROS

app.use(function(req,res,next){
    //Accept ALL origins
    res.header("Access-control-Allow-origin","*");
    //Accept All headers
    res.header("Access-control-Allow-headers","*");
    //Accept GET POST OPTIONS Verbs
    res.header("Access-control-Allow-methods","GET,POST,OPTIONS");
    next();
})
//Pour request and response json
app.use(bodyparser.json());

app.get('/getTodoos',function(req,res){
    //for  todoo in todoos
    if(todoosDB) {
        res.json({error : false, todoos : todoosDB});
    }
    else {
        res.json({error:true});
    }
});
app.get('/getTodoos/:ech',function(req,res){
    let echeance = req.params.ech;    
    let todoos=[];   
    for (let t of todoosDB) 
    {        
        if (echeance==t.Echeance)
        {
            todoos.push(t);
        }       
    }
    if(todoos) 
    {
        res.json({error : false, todoos : todoos});
    }
    else 
    {
        res.json({error:true});
    }
});
app.get('/getTodoo/:id',function(req,res){
    let id = req.params.id;
    let todoo = todoosDB.find(x=> x.id == id);
    if(todoo) {
        res.json({error : false, todoo : todoo});
    }
    else {
        res.json({error:true});
    }
})
app.post('/addTodoo',function(req,res){
    let data = req.body;
    let lastId = todoosDB[todoosDB.length-1].id;
    try {
        todoosDB.push({id : lastId+1, ...data});
        fs.writeFileSync('public/todoos.json',JSON.stringify(todoosDB,null,4));
        res.json({error:false});
    }catch(e){
        res.json({error:true})
    }
})
app.get('/delTodoo/:id',function(req,res){
    let id = req.params.id;
    try {      
        //delete todoos[id];
        todoosDB.splice(todoosDB.indexOf(todoosDB.find(todoo=>todoo.id==id)),1)
        //Inscription dans le fichier Json              
        fs.writeFileSync('public/todoos.json',JSON.stringify(todoosDB,null,4));
        res.json({error:false});
    }catch(e){
        res.json({error:true})
        console.log(e.message);
    }
})
app.post('/addProjet',function(req,res){
    let data = req.body;
    let lastId;
    if (projetsDB[projetsDB.length-1].id==undefined)
    {
        lastId = 0;
    }
    else
    {
       
        lastId = projetsDB[projetsDB.length-1].id;
    }    
    try {
        projetsDB.push({id : lastId+1, ...data});
        fs.writeFileSync('public/projets.json',JSON.stringify(projetsDB,null,4));
        res.json({error:false});
    }catch(e){
        res.json({error:true})
    }
})
app.get('/getProjet/:id',function(req,res){
    let id = req.params.id;
    let projet = projetsDB.find(x=> x.id == id);
    if(projet) {
        res.json({error : false, projet : projet});
    }
    else {
        res.json({error:true});
    }
})
app.get('/delProjet/:id',function(req,res){
    let id = req.params.id;
    let projet = projetsDB.find(x=> x.id == id);
    projet.Archive = true;
    try {      
        //Update Projet[id] dans projetDB;
        projetsDB.update(this.projet);
        //Inscription dans le fichier Json              
        fs.writeFileSync('public/projets.json',JSON.stringify(projetsDB,null,4));
        res.json({error:false});
    }catch(e){
        res.json({error:true})
        console.log(e.message);
    }
})

app.listen(8083);