const database = require('../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query('select * from track where album_id = ?', [id])
    .then(([track]) => {
      res.json(track);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });

};
