const express = require('express');
const router = express.Router();
const projectDb = require('../data/helpers/projectModel');

router.get("/", (req, res) => {
  projectDb.get().then(response => res.status(200).json(response)).catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  projectDb.get(id).then(response => res.status(200).json(response)).catch(err => res.status(500).json({Error: err}))
})

router.post('/', (req, res) => {
  const body = req.body;
  projectDb.insert(body).then(response => {
    res.status(201).json(response)
  }).catch(err => res.status(500).json(err))
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  projectDb.remove(id).then(response => {
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).json("id not found")
    }
  }).catch(err => res.status(500).json(err))
})

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const {body} = req;
  projectDb.update(id, body).then(response => res.status(200).json(response)).catch(err => console.log(err))
})

router.get('/list/:id', (req, res) => {
  const id = req.params.id;
  projectDb.getProjectActions(id).then(response => res.status(200).json(response)).catch(err => res.status(500).json(err))
})

module.exports = router;
