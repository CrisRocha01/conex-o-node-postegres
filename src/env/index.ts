import 'dotenv/config'
import { z } from 'zod'

// z.object valida objetos;

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  PORT: z.coerce.number().default(3000),
  ENV: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_PORT: z.coerce.number(),
})

const _env = envSchema.safeParse(process.env) // para receber e validar as variáveis de ambiente;

if (!_env.success) {
  console.error('Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data // retorna os dados após a validação;
