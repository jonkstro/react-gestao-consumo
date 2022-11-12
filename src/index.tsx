import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Model, createServer } from 'miragejs';


// criar função que irá criar o servidor do Miraje Js
createServer({

  models: {
    device: Model,
  },
  seeds(server) {
    server.db.loadData({
      devices: [
        {
          id: 0,
          mac: 'D6:9A:D3:EA:ED:4E',
          email: 'djangophb@gmail.com',
          rua: 'UFPI, 1295',
          bairro: 'Raul Bacelar',
          cidade: 'Parnaíba',
          estado: 'Piauí',
          latitude: -78.1422,   
          longitude: -175.9856,
          status: 'online'
        },
        {
          id: 1,
          mac: '54:CE:9A:41:D5:49',
          email: 'jonaskstro@gmail.com',
          rua: 'Merval Neres, 3095',
          bairro: 'Dirceu Arcoverde',
          cidade: 'Parnaíba',
          estado: 'Piauí',
          latitude: -67.9116, 
          longitude: -128.4300,
          status: 'online'
        },
        {
          id: 2,
          mac: '61:57:CC:02:70:E5',
          email: 'jonascastro.dev@gmail.com',
          rua: 'Dr. João Silva Filho, 2110',
          bairro: 'Pindorama',
          cidade: 'Parnaíba',
          estado: 'Piauí',
          latitude: -45.6878,  
          longitude: -67.7811,
          status: 'offline'
        },
        {
          id: 3,
          mac: '61:57:CC:02:70:E5',
          email: 'jonaskstro@gmail.com',
          rua: 'Oswaldo Cruz, 1313',
          bairro: 'Piauí',
          cidade: 'Parnaíba',
          estado: 'Piauí',
          latitude: -17.3046,  
          longitude: -13.8664,
          status: 'online'
        },
        
      ]
    })
  },

  // criar as rotas: GET, POST, PUT etc...
  routes() {
    this.namespace = 'api';

    // CRIAR A ROTA GET
    this.get('/devices', ()=> {
      return this.schema.all('device')
    })

    this.post('/devices', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('device', data)
    })
  },

});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
