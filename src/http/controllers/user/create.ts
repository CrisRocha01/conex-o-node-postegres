import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { UserRepository } from '@/repositories/user.repository'
import CreateUserUseCase from '@/use-cases/create-user'
import { User } from '@/entities/user.entity'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password }: User = registerBodySchema.parse(request.body)

  try {
    const userRepository = new UserRepository()
    const createUserUseCase = new CreateUserUseCase(userRepository)

    const user = await createUserUseCase.handler({ username, password })

    return reply.status(201).send(user)
  } catch (error) {
    console.error(`Erro ao criar usuário`)
    throw new Error(`Erro ao criar usuário`)
  }
}
