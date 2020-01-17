
const { Tedis } = require('tedis')

const port = parseInt(process.env.REDIS_PORT)
const host = process.env.REDIS_HOST
const password = process.env.REDIS_PASSWORD

exports.RedisRepository = () => {
  let tedis

  if (password) {
    tedis = new Tedis({
      port,
      host,
      password
    })
  } else{
    tedis = new Tedis({
      port,
      host
    })
  }

  tedis._disconnect = () => tedis.close()
  tedis._clear = () => tedis.command("flushall");

  return tedis
}
