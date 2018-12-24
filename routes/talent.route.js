const express = require('express');
const app = express();
const talentRoutes = express.Router();

// Require Talent model in our routes module
let Talent = require('../models/Talent');

// Defined store route
talentRoutes.route('/add').post(function (req, res) {
  let talent = new Talent(req.body);
  talent.save()
    .then(talent => {
      res.status(200).json({'talent': 'talent in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
talentRoutes.route('/').get(function (req, res) {
    Talent.find(function (err, talent){
    if(err){
      console.log(err);
    }
    else {
      res.json(talent);
    }
  });
});

// Defined edit route
TalentRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Talent.findById(id, function (err, talent){
      res.json(talent);
  });
});

//  Defined update route
talentRoutes.route('/update/:id').post(function (req, res) {
    Talent.findById(req.params.id, function(err, next, talent) {
    if (!talent)
      return next(new Error('Could not load Document'));
    else {
        talent.prenom = req.body.prenom;
        talent.nom = req.body.nom;
        talent.telephone = req.body.telephone;
        talent.adresse = req.body.adresse;
        talent.mail = req.body.mail;
        talent.age = req.body.age;
        talent.ecole = req.body.ecole;
        talent.save().then(talent => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
talentRoutes.route('/delete/:id').get(function (req, res) {
    Talent.findByIdAndRemove({_id: req.params.id}, function(err, talent){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = talentRoutes;