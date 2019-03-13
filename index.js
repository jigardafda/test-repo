function handler(messages) {
      console.log('From GitHub');
      console.log(messages);
}

function initServer() {
  const express = require('express')
  const app = express()
  const port =  process.env.PORT || 3000;

  app.get('/', (req, res) => res.send('Hello World!'))
  app.listen(port, () => console.log(`Test app listening on port ${port}!`))
}

initServer();

module.exports = { handler };
