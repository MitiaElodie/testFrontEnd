import { createStore } from 'vuex'

export default createStore({
  state: {
    comments: [
      {id: 1, idEvent: 47, creationDate: '2016-04-22T06:23:00Z', author: 'Jean Valjean', content: "Océane est arrivée il y a seulement 3 mois"},
      {id: 2, idEvent: 47, creationDate: '2007-03-20T07:34:00Z', author: 'Océane Quessy', content: "Je n'étais pas formé à ca"},
      {id: 3, idEvent: 81, creationDate: '2012-08-27T08:54:00Z', author: 'Martin Duranseau', content: "Le marteau n'était pas dans la malette"},
      {id: 4, idEvent: 81, creationDate: '2009-04-22T01:12:00Z', author: 'Martin Duranseau', content: "La procédure était très ancienne"},
      {id: 5, idEvent: 81, creationDate: '2016-12-09T11:34:00Z', author: 'Adrien Lacharité', content: "L'alarme est défaillante"},
      {id: 6, idEvent: 81, creationDate: '2018-01-21T06:59:00Z', author: 'Belisarda Mazuret', content: "Le sol est abimé"},
      {id: 7, idEvent: 81, creationDate: '2012-09-27T08:54:00Z', author: 'Alex Duranseau', content: "Le marteau n'était pas présent"},
      {id: 8, idEvent: 81, creationDate: '2009-05-22T01:12:00Z', author: 'Lola Langin', content: "Le sceau était brisé"},
      {id: 9, idEvent: 81, creationDate: '2016-02-09T11:34:00Z', author: 'Zoé Lacharité', content: "L'alarme est trop forte"},
      {id: 10, idEvent: 81, creationDate: '2018-03-21T06:59:00Z', author: 'Robert Mazuret', content: "La machine est trop lourde"}
    ],
    events: [
      {
          "id": 47,
          "creationDate": "2008-03-30T05:13:23Z",
          "createdBy": "Kirstin",
          "involvedEmployeeId": 1868,
          "title": "Accident avec Adelle",
          "description": "",
          "statusName": "Open",
          "Témoins": [
              "Mureil",
              "Melina"
          ]
      },
      {
          "id": 81,
          "creationDate": "1983-05-30T11:35:46Z",
          "createdBy": "Louella",
          "involvedEmployeeId": 8139,
          "title": "Accident avec Amara",
          "description": "",
          "statusName": "Closed",
          "Témoins": [
              "Tina",
              "Luci"
          ]
      },
      {
          "id": 38,
          "creationDate": "2017-11-15T08:08:14Z",
          "createdBy": "Nannie",
          "involvedEmployeeId": 2532,
          "title": "Accident avec Helena",
          "description": "",
          "statusName": "InProgress",
          "Témoins": [
              "Jeanna",
              "Jerry"
          ]
      },
      {
          "id": 384,
          "creationDate": "2019-11-16T08:08:14Z",
          "createdBy": "Lola",
          "involvedEmployeeId": 2762,
          "title": "Accident avec Harry",
          "description": "Je me suis cassé le bras",
          "statusName": "InProgress",
          "Témoins": [
              "Jeanna",
              "Jerry",
              "Robert"
          ]
      }
    ],
    employees: [
      {
          "id": 2762,
          "firstname": "Harry",
          "lastname": "Joitir",
      },
      {
          "id": 2532,
          "firstname": "Helena",
          "lastname": "Hewitt",
      },
      {
          "id": 8139,
          "firstname": "Amara",
          "lastname": "Ivens"
      },
      {
          "id": 1868,
          "firstname": "Adelle",
          "lastname": "Thornburg"
      },
      {
          "id": 839,
          "firstname": "Lola",
          "lastname": "Ivensa"
      },
      {
          "id": 186,
          "firstname": "Zoé",
          "lastname": "Lalima"
      }
    ],

    status: [
        "Open",
        "Closed",
        "InProgress"
    ]
  
  },
  getters: {
    getEvent: (state) => (index) => {
        return state.events.find(x => x.id === index);
    },

    getComments: (state) => (indexEvent) => {
        return state.comments.filter(x => x.idEvent === indexEvent);
        
    },

    getComment: (state) => (idComment) => {
        return state.comments.find(x => x.id === idComment);
    },

    getDate: (state) => (date) => {
        state.comments.find(x => x.id === 47);
        return date.split('T')[0];
    },

    getTime: (state) => (date) => {
        state.comments.find(x => x.id === 47); // for using the state so there won't be any error
        return date.split('T')[1].split('Z')[0]; // pour enlever le T entre la date et l'heure et le Z a la fin de l'heure
    }
  },
  mutations: {
        MODIFY_EVENT(state, {idEvent , newEvent}){
            idEvent = Number(idEvent);
          let event = state.events.find(x => x.id === idEvent);
          if(event != null){
            event.title = newEvent.title;
            console.log(event.title);
            event.description = newEvent.description;
            event.createdBy = newEvent.createdBy;
            event.involvedEmployeeId = newEvent.involvedEmployeeId;
            event.statusName = newEvent.statusName;
            event.title = newEvent.title;
            event.Témoins = newEvent.Témoins; // on modifie tous sauf la date
          }
          
      }
  },
  actions: {
    
  },
  modules: {
  }
})
