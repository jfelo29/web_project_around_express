const router = require('express').Router();
const fs = require('fs');
const path = require('path');


router.get('/cards', (req, res) => {
  const dataPath = path.join(__dirname, '../data', 'users.json');
  fs.readFile(dataPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(404).json({ message: 'Error al leer el archivo' });
    }
    const users = JSON.parse(data);
    return res.json(users);
  });
});
module.exports = router;
