const db = require("../models")
const Op = db.Sequelize.Op


// Retrieve all Entity from the database.
exports.findAll = (req, res, Entity) => {  
  
    Entity.findAll()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving entity."
        })
      })
}

// Find a single Entity with an id
exports.findOne =  (req, res, Entity) => {
    const id = req.params.id;

    Entity.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find entity with id=${id}.`
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving entity with id=" + id
        })
      })
}

// Update a Entity by the id in the request
exports.update =  (req, res, Entity) => {
    const id = req.params.id

    Entity.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "entity was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update entity with id=${id}. Maybe enitty was not found or req.body is empty!`
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating entity with id=" + id
        })
      })
}

// Delete a Entity with the specified id in the request
exports.delete = (req, res, Entity) => {
  const id = req.params.id;

  Entity.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Entity was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete entity with id=${id}. Maybe entity was not found!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete entity with id=" + id
      })
    })
  
}