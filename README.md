## Exercício de Fixação - Desenvolvimento Web 3.

### Métodos necessários:

* GET – Listar todos os alunos (RA, Nome, Turma);
* GET – Listar um aluno através do RA informado (Nome, Turma, Cursos);
* POST – Adicionar um aluno na lista;
* POST – Adicionar um curso para o aluno;
* PUT – Alterar os dados de um aluno através do RA;
* PUT – Alterar o curso do aluno;
* DELETE – Remover um aluno da lista;
* DELETE – Remover o curso do aluno;

### Instalação e uso:

Para começar a usar a aplicação, basta clonar o repositório, instalar as dependências e iniciar o servidor de desenvolvimento:

```
git clone [URL do seu repositório]
cd [Nome do seu projeto]
npm install
node index.js
```

### Exemplos de uso de cada método:

**- GET**: Listar todos os alunos (RA, Nome, Turma).

• URL: **http://localhost:3000/alunos**
• Parâmetros: -
• Body: -

**- GET**: Listar um aluno através do RA informado (Nome, Turma, Cursos).

• URL: Ex.: **http://localhost:3000/alunos/ra/?ra=12345**
• Parâmetros: Ex.: **?ra=12345**
• Body: -

**- POST**: Adicionar um aluno na lista.

• URL: **http://localhost:3000/alunos**
• Parâmetros: -
• Body:

```
  {
    "ra": 98765,
    "nome": "John Doe",
    "turma": "DSM",
    "habilidades": ["SQL", "ReactJS", "Java"]
  }
```

**- POST**: Adicionar um curso para o aluno.

• URL: Ex.: **http://localhost:3000/alunos/habilidades/ra?ra=98765**
• Parâmetros: Ex.: **?ra=98765**
• Body:

```
  {
    "habilidade": "Javascript"
  }
```

**- PUT**: Alterar os dados de um aluno através do RA.

• URL: Ex.: **http://localhost:3000/alunos/ra?ra=12345**
• Parâmetros: Ex.: **?ra=12345**
• Body:

```
  {
    "nome": "Joel Neto",
    "turma": "DSM - Fatec Votorantim"
  }
```

**- PUT**: Alterar o curso do aluno.

• URL: Ex.: **http://localhost:3000/alunos/habilidades/ra?ra=12345**
• Parâmetros: Ex.: **?ra=12345**
• Body:

```
  {
    "habilidade": "Javascript",
    "novaHabilidade": "Typescript"
  }
```

**- DELETE**: Remover um aluno da lista.

• URL: Ex.: **http://localhost:3000/alunos/ra?ra=12345**
• Parâmetros: Ex.: **?ra=12345**
• Body: -

**- DELETE**: Remover um aluno da lista.

• URL: Ex.: **http://localhost:3000/alunos/habilidades/ra?ra=54321**
• Parâmetros: Ex.: **?ra=54321**
• Body:

```
  {
    "habilidade": "NodeJS"
  }
```
