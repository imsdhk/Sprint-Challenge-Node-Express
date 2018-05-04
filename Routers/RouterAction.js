const express = require('express');
const router = express.Router();
const actionDb = require('../data/helpers/actionModel')

router.get('/', (req, res) => {
    actionDb
    .get()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req,res) => {
  actionDb
  .get(req.params.id)
  .then(response => res.status(200).json(response))
  .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  actionDb
  .insert(req.body)
  .then(response => res.status(201).json(response))
  .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req,res) => {
  actionDb
  .remove(req.params.id)
  .then(response => res.status(200).json(response))
  .catch(err => res.status(500).json(err))
})

router.put('/:id', (req,res) => {
  actionDb
  .update(req.params.id, req.body)
  .then(response => res.status(200).json(response))
  .catch(err => res.status(500).json(err))
})




module.exports = router;
