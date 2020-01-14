# Redis Repository Plugin

Redis plugin for create-graphql-express

## Instalation

```sh
npm install --save redis-repository-plugin
```

## Configuration

Create file `redis-repository.ts` inside repositories folder.

```ts
import { RedisRepository } from 'redis-repository-plugin'

export default RedisRepository()
```

Include redis in `repositories.d.ts` (it has to be the same name as the file created above without -repository)

```ts
import { RedisRepositor } from 'redis-repository-plugin'

export interface Repositories {
  redis: RedisRepositor;
}
```

Set environment variables in `.env.dev` eg.:
```
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=optional
```

## Tests configuration

Repositories must be cleared after each test and closed after all tests.

edit `tests/config/jest.setup.ts`

```ts
import { app, repositories } from 'graphql-api-scripts'
import { Server } from 'http'
import { Repositories } from '../../src/repositories/repositories'

let instance: Server

const { redis }: Repositories = repositories

beforeAll(done => {
  instance = app.listen()
  done()
})

afterEach(async done => {
  redis._clear()
  done()
})

afterAll(async done => {
  redis._disconnect()
  instance.close(done)
})

```