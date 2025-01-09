const express = require('express');

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const PORT = 3000;


app.use('/', usersRouter);
app.use('/', cardsRouter);


app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

app.get('/', (req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});
