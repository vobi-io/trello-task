# trello-task 

[The Trello Task library](https://www.npmjs.com/package/@vobi-io/trello-task)

## Instalation:
### Using yarn: 
```
$ yarn add @vobi-io/trello-task husky
```
### Using npm:
```
$ npm i -S @vobi-io/trello-task husky
```

## Usage : 

```

// @task refactor function

```

### Using keyword this package will create task on trello after you commit and push your changes 

![trello image](https://i.ibb.co/dGNy1gt/Screenshot-from-2019-11-05-17-43-00.png)

## Configuration :

### Create file in your project root directory for example trello.js

```
// trello.js

const task = require('@vobi-io/trello-task')

const reqBody = {
    key: \* Trello api key *\,
    token: \* Trello api token *\,
    idList: \* Id of list on trello you want your tasks to be created *\,
    keepFromSource: 'all',
};

task({ reqBody, keyWord: "@task" })

// you can choose any keyword you want

```

#### Inside your package.json add this configuration

```
// package.json

"husky": {
    "hooks": {
      "pre-push": "node trello.js" // name of file you configured
    }
}

```

#### You are all done after you push your commits to git this package will look for keyword and create task for you on trello