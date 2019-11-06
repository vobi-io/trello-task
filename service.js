const axios = require('axios');


const url = 'https://api.trello.com/1/cards';


const service = (reqBody) => {
  const createCard = (body) => axios.post(url, {
    ...reqBody,
    ...body,
  });

  return {
    createCard,
  };
};

module.exports = service;
