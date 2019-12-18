export interface ICredentialService {
  getCredential: (key: string) => string | null;
}