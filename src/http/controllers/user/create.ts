import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { User } from '@/entities/user.entity'
import { makeCreateUserUseCase } from '@/use-cases/factory/make-create-user-use-case'
import { hash } from 'bcryptjs'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password }: User = registerBodySchema.parse(request.body)

  const hashedPassword = await hash(password, 8)

  const userWithHashedPassord = { username, password: hashedPassword }

  const createUserUseCase = makeCreateUserUseCase()

  const user = await createUserUseCase.handler(userWithHashedPassord)

  return reply.status(201).send({ id: user?.id, username: user?.username })
}
