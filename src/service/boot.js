const config = require('@config');
const app = require('@app')

app.listen(config.app.port, (err) => {
  if (err) {
    return console.log('erro');
  }
  console.log(`Initiated at localhost:${config.app.port}`);
});
