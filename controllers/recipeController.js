const async = require('async');
const { sanitizeBody } = require('express-validator/filter');
const { body, validationResult } = require('express-validator/check');

const Recipe = require('../models/recipe');
const User = require('../models/user');

exports.index = (req, res) => {
    res.send('NOT IMPLEMENTED: Site Home Page');
    // async.parallel({
    //     recipe_count: (callback) => {
    //         Recipe.countDocuments({}, callback);
    //     },
    //     user_count: (callback) => {
    //         User.countDocuments({}, callback);
    //     }
    // }, (err, results) => {
    //     res.render('index', {title: 'Cookbook Home', err, results});
    // });
};