import { AutheticationModel } from '@/domain/models/authentication-model'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (authenticationParams: AuthenticationParams): Promise<AutheticationModel>
}
