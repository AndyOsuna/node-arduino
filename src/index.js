const app = require('./app');

const main = async () => {
  const srv = await app.listen(app.get('port'))
  console.log("Servidor en puerto", app.get('port'))
  return srv
}
const server = main()