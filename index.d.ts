import { Tedis } from 'tedis'
import { Repository } from 'graphql-api-scripts';

export interface RedisRepositor extends Tedis, Repository {
}

export function RedisRepository (): RedisRepositor
