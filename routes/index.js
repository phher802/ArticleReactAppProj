const express = require('express');
const router = express.Router();
const Article = require('../models/article');

router.get('/article', function(reg, res){
    Article.find(function(err, articles){
        res.json(articles);
    });
});

router.get('/articles/:id', function(req, res){
    Article.findById(req.params.id, function(err, article){
        if(!article){
            res.status(404).send('No result found');
        }else{
            res.json(article);
        }
    });
});

