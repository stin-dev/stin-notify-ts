import { ICredentialService } from "../interfaces";

export class CredentialPropertyService implements ICredentialService {
  private props = PropertiesService.getScriptProperties();

  constructor() { }

  getCredential = (key: string): string | null => {
    const token = this.props.getProperty(key);

    return token;
  }
}