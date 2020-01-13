
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

  return {
    _disconnect: async () => tedis.close(),
    _clear: async () => console.log('todo: clear redis db'),
    ...tedis
  }
}
