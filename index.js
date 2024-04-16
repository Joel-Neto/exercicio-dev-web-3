const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const alunos = [
  {
    ra: 12345,
    nome: "Joel",
    turma: "DSM",
    habilidades: ["Javascript", "ReactJS", "Bootstrap"],
  },
  {
    ra: 54321,
    nome: "Alex",
    turma: "ADS",
    habilidades: ["VueJS", "Ruby on Rails", "NodeJS"],
  },
];

// GET
app.get("/alunos", (req, res) => {
  res.json(alunos);
});

app.get("/alunos/ra", (req, res) => {
  const aluno = alunos.find((aluno) => aluno.ra === +req.query.ra);
  if (aluno) {
    res.json({
      nome: aluno.nome,
      turma: aluno.turma,
      habilidades: aluno.habilidades,
    });
  } else {
    res.send(`Não foi possível encontrar aluno com RA = ${req.query.ra}`);
  }
});

// POST
app.post("/alunos", (req, res) => {
  alunos.push(req.body);
  res.json(alunos);
});

app.post("/alunos/habilidades/ra", (req, res) => {
  const aluno = alunos.find((aluno) => aluno.ra === +req.query.ra);
  if (aluno) {
    aluno.habilidades = [...aluno.habilidades, req.body.habilidade];
    res.json(aluno);
  } else {
    res.send(`Não foi possível encontrar aluno com RA = ${req.query.ra}`);
  }
});

// PUT
app.put("/alunos/ra", (req, res) => {
  const aluno = alunos.find((aluno) => aluno.ra === +req.query.ra);
  const alunoIndex = alunos.findIndex((aluno) => aluno.ra === +req.query.ra);
  if (aluno) {
    alunos[alunoIndex] = Object.assign(aluno, req.body);
    res.json(aluno);
  } else {
    res.send(`Não foi possível encontrar aluno com RA = ${req.query.ra}`);
  }
});

app.put("/alunos/habilidades/ra", (req, res) => {
  const aluno = alunos.find((aluno) => aluno.ra === +req.query.ra);
  if (aluno) {
    const novoArray = aluno.habilidades.filter(
      (hab) => hab !== req.body.habilidade
    );
    aluno.habilidades = [...novoArray, req.body.novaHabilidade];
    res.json(aluno);
  } else {
    res.send(`Não foi possível encontrar aluno com RA = ${req.query.ra}`);
  }
});

// DELETE
app.delete("/alunos/ra", (req, res) => {
  const alunoIndex = alunos.findIndex((aluno) => aluno.ra === +req.query.ra);
  if (alunoIndex > -1) {
    alunos.splice(alunoIndex, 1);
    res.json(alunos);
  } else {
    res.send(`Não foi possível encontrar aluno com RA = ${req.query.ra}`);
  }
});

app.delete("/alunos/habilidades/ra", (req, res) => {
  const aluno = alunos.find((aluno) => aluno.ra === +req.query.ra);
  if (aluno) {
    aluno.habilidades = aluno.habilidades.filter(
      (hab) => hab !== req.body.habilidade
    );
    res.json(aluno);
  } else {
    res.send(`Não foi possível encontrar aluno com RA = ${req.query.ra}`);
  }
});
