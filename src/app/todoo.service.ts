import { Injectable } from '@angular/core';

@Injectable()

export class TodooService {

  Todoos = [
    {
      id : 1,Titre: 'Pressing Nico',Description :'Aller chercher mon linge chez 5aSec.', Details : '3 Chemises + 2 Costumes + Divers',Urgent: true
    },
    {
      id : 2,Titre: 'Reserver Resto Pro',Description :'Repas du 11/09/19 Avec Mr X de chez Y.', Details : 'Reserver table chez Brigitte pour le 11/09/19. Rendez-vous à 12h30 sur place',Urgent: false
    },
    {
      id : 3,Titre: 'Contacter Mr X de chez Y',Description :'Prendre contact avec Mr X pour organiser un déjeuner pro', Details : 'Mr X est le responsable marketing de la socièté Y. Il ont un budget de x,xx€ et cherchent à oraganiser une évenement Z.',Urgent: true
    },
    {
      id : 4,Titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 5,Titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 6,Titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 7,Titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 8,Titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 9,Titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 10,Titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 11,Titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    },
    {
      id : 12,Titre: 'Le Lorem Ipsum',Description :'Le Lorem Ipsum est simplement du faux texte.', Details : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500, ',Urgent: false
    }
  ]

  todoolist : Array<any> = new Array<any> ();
  constructor() { }
}
