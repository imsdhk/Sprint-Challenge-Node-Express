const express = require('express');
const app = express();

const cors = require('cors');

const projectRouter = require('./Routers/RouterProject');
const actionRouter = require('./Routers/RouterAction');

app.use(express.json());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('root route..running'))

app.use('/projects', projectRouter);
app.use('/list/:id', projectRouter);
app.use('/actions', actionRouter);

const port = 5000;
app.listen(port, () => console.log(`server running on port: ${port}`))
