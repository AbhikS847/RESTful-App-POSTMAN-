const express = require('express');

const app = express();

const Joi = require('joi');

app.use(express.json())

const port = process.env.PORT || 3000;

const people = [
    {
        id:1,
        name:`Abhik`,
        age:22,
        job:'kitchen hand'
    },
    {
        id:2,
        name:'Jeff',
        age:54,
        job:'chef'
    },
    {
        id:3,
        name:'Sai',
        age:25,
        job:'kitchen hand'
    }
]

app.get('/',(req,res)=>{
    res.send("My first RESTful API navigate. For all data type in localhost/3000/people on the address bar");
})

app.get('/people',(req,res)=>{
    res.send(people);
})

app.get('/people/:id',(req,res)=>{
    const person  = people.find(c=>c.id===parseInt(req.params.id))
    if(!person){
        res.status(404).send("Sorry, cannot find the person id you passed")
    }
    res.send(person)
})

app.post('/people/add',(req,res)=>{
    const schema = {
        name:Joi.string().min(3).required(),
        age:Joi.number().required(),
        job:Joi.string().required()
    }

    const result = Joi.validate(req.body,schema);

    if(result.error){
        res.status(404).send("Sorry, you need to insert all the details properly")
        return;
    }

    console.log(result);

    const newPerson = {
        id:people.length+1,
        name:req.body.name,
        age:req.body.age,
        job:req.body.job
    }
    people.push(newPerson)
    res.send(newPerson)
})

app.put('/people/edit/:id',(req,res)=>{

    const person = people.find(c=>c.id===parseInt(req.params.id))

    if(!person)
    {
        res.status(404).send("Sorry invalid id, insert a valid ID please")
    }

    const schema = {
        name:Joi.string().min(3).required(),
        age:Joi.number().required(),
        job:Joi.string().required()
    }

    const result = Joi.validate(req.body,schema);

    if(result.error){
        res.status(404).send("Sorry, you need to insert all the details properly")
        return;
    }

    console.log(result);

    person.name = req.body.name;
    person.age = req.body.age;
    person.job = req.body.job;
    res.send(person);
})

app.delete('/people/delete/:id',(req,res)=>{
    const person = people.find(c=>c.id===parseInt(req.params.id))

    if(!person)
    {
        res.status(404).send("Sorry invalid id, insert a valid ID please")
    }
    const index = people.indexOf(person);
    people.splice(index,1);
    res.send(person);
})


/*
app.get('/people/id/:job',(req,res)=>{
    const job = people.find(c=>c.job===req.params.job)
    if(!job){
        res.status(404).send("Sorry, cannot find anyone with the job")
    }
    res.send(job);
})*/

app.listen(port, () => `Server running on port ${port} 🔥`);