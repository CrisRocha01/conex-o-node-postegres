import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeSigninUseCase } from '@/use-cases/factory/make-signin-use-case'
import { compare } from 'bcryptjs'
import { InvalidCredentialError } from '@/use-cases/errors/invalid-credential-error'

export async function signin(request: FastifyRequest, replay: FastifyReply) {
  const registreBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })
  const { username, password } = registreBodySchema.parse(request.body)

  const SigninUseCase = makeSigninUseCase()

  const user = await SigninUseCase.handler(username)

  const doestPassoerdMatch = await compare(password, user.password)

  if (!doestPassoerdMatch) {
    throw new InvalidCredentialError()
  }
  const token = await replay.jwtSign({ username })

  return replay.status(200).send({ token })
}
