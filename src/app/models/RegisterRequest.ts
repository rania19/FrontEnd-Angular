export class  RegisterRequest{
  userName: string;
  email: string;
  addresse: string;
  mdp: string;
  role: string[];
  telephone: number;
  clientrole: string;
  ville: string;




  constructor(userName: string, mdp: string, addresse: string, email: string, role: string[], telephone: number) {

    this.userName = userName;
    this.email = email;
    this.addresse = addresse;
    this.mdp = mdp;
    this.role = role;
    this.telephone = telephone;



  }




}
