const express = require('express');
const bodyParser = require("body-parser");
const controller = require("./controller")
const app = express();

app.use(bodyParser.json());




app.get('/api/peacefulQuotes', controller.read);
app.post('/api/peacefulQuotes', controller.create);
app.delete('/api/peacefulQuotes/:id', controller.deleteMessage);
app.put('/api/peacefulQuotes/:id', controller.update);



const PORT = 4000;
app.listen(PORT, () => console.log(`Server has sailed from port ${PORT}`));

