const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    evento: 'Semana OmniStack',
    aluno: 'Danilo Oliveira'
  });
});

app.listen(3333);
