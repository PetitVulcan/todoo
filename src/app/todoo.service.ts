import { Injectable } from '@angular/core';

@Injectable()

export class TodooService {

  Todoos = [
    {
      id : 1,titre: 'Pressing Nico',Description :'Aller chercher mon linge chez 5aSec.', Details : '3 Chemises + 2 Costumes + Divers',Urgent: true
    },
    {
      id : 2,titre: 'Reserver Resto Pro',Description :'Repas du 11/09/19 Avec Mr X de chez Y.', Details : 'Reserver table chez Brigitte pour le 11/09/19. Rendez-vous à 12h30 sur place',Urgent: false
    },
    {
      id : 3,titre: 'Contacter Mr X de chez Y',Description :'Prendre contact avec Mr X pour organiser un déjeuner pro', Details : 'Mr X est le responsable marketing de la socièté Y. Il ont un budget de x,xx€ et cherchent à oraganiser une évenement Z.',Urgent: true
    },
    {
      id : 4,titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 5,titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 6,titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 7,titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 8,titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 9,titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 10,titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 11,titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 12,titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    }
  ]

  todoolist : Array<any> = new Array<any> ();
  constructor() { }
}
