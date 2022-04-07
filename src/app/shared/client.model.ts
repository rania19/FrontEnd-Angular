export class  Client{
  id: number;
  userName: String;
  email: String;
  addresse: String;
  mdp: String;
  role: String;
  imageU: String;

  constructor(userName: string, imageU: String, email: string, addresse: String, mdp: String, role: String ) {

    this.userName = userName;
    this.email = email;
    this.addresse = addresse;
    this.mdp = mdp;

    this.role = role;
    this.imageU = imageU;

  }

}
