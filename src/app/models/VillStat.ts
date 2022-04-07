

export class VillStat {

  id: number;
  ville: string;
  numberFarms: number;
  pourcentage: number;

  constructor(ville: string,  numberFarms: number, pourcentage: number) {

    this.ville = ville;
    this.numberFarms = numberFarms;
    this.pourcentage = pourcentage;
  }


}
