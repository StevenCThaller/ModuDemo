const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const User = MongModels.User;
const Hobby = MongModels.Hobby;

module.exports = {
    homePage: function(req,res){
        User.find()
            .then(data=> {
                res.render('index', {data: data});
            });
    },
    addThingForm: function(req,res){
        res.render('newthing');
    },
    addThingProcess: function(req,res){
        var toSubmit = req.body;
        if(req.body.name != 'Yudong') {
            toSubmit.isYudong = false;
        }
        else {
            toSubmit.isYudong = true;
        }
        User.create(toSubmit)
            .then(data => {
                res.redirect(`/justonething/${data._id}`);
            })
    },
    justOne: function(req,res){
        User.find({_id: req.params.id})
            .then( data => {
                res.render('otherthing', {data: data[0]})
            })
    }

}