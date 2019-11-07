const axios = require('axios');


const url = 'https://api.trello.com/1/cards';


const service = (reqBody) => {
  const createCard = (body) => {
    if (!body.due) {
      delete body.due;
    } else {
      body.due = new Date(body.due).toLocaleDateString();
    }
    return axios.post(url, {
      ...reqBody,
      ...body,
    });
  };

  return {
    createCard,
  };
};

module.exports = service;
