export class InvalidCredentialError extends Error {
  constructor() {
    super('Username our password is incorrect')
  }
}
