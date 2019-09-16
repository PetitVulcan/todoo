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


const todoos =JSON.parse(fs.readFileSync('public/todoos.json','utf-8'));
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
// //app.use(express.static(__dirname+'/public'));
// app.get('/accueil',function(req,res){
//     let exResponse = {'message' : 'coucou', 'nom' : 'abadi'};
//     //Response on json
//     res.json(exResponse);
// })
app.get('/getTodoos',function(req,res){
    //for  todoo in todoos
    if(todoos) {
        res.json({error : false, todoos : todoos});
    }
    else {
        res.json({error:true});
    }
});
app.get('/getTodoo/:id',function(req,res){
    let id = req.params.id;
    let todoo = todoos.find(x=> x.id == id);
    if(todoo) {
        res.json({error : false, todoo : todoo});
    }
    else {
        res.json({error:true});
    }
})
app.post('/addTodoo',function(req,res){
    let data = req.body;
    let lastId = todoos[todoos.length-1].id;
    try {
        todoos.push({id : lastId+1, ...data});
        fs.writeFileSync('public/todoos.json',JSON.stringify(todoos,null,4));
        res.json({error:false});
    }catch(e){
        res.json({error:true})
    }
})
app.post('/delTodoo',function(req,res){
    let data = req.body;
    try {
        todoos.del()
        this.data.todoos.splice(this.data.todoos.indexOf(this.todoo),1)
        fs.writeFileSync('public/todoos.json',JSON.stringify(todoos,null,4));
        res.json({error:false});
    }catch(e){
        res.json({error:true})
    }
})

app.listen(8083);