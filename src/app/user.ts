
export interface Roles {
  invitado: boolean;
  pro?: boolean;
  hire?:  boolean;
}

export class User {
  email:    string;
  photoURL: string;
  roles:    Roles;

  constructor(authData) {
    this.email    = authData.email
    this.photoURL = authData.photoURL
    this.roles    = { invitado: true }
  }
}
