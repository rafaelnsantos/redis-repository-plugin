import { Tedis } from 'tedis'
import { Repository } from 'graphql-api-scripts';

export interface RedisRepository extends Tedis, Repository {
}

export function RedisRepository (folder: string, options: mongoose.ConnectionOptions): RedisRepository
