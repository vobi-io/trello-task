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

### Extra Featueres:

```

// @task refactor function @due 11/29/2019

```

### Using keyword @due with following date formate MM/DD/YYYY you can also set deadlines 

![trello image](https://i.ibb.co/Bc1Smsn/trello.png)



## Configuration :

### Create file in your project root directory for example trello.js

```
// trello.js

const task = require('@vobi-io/trello-task')

const configuration = {
    key: \* Trello api key *\,
    token: \* Trello api token *\,
    lists: [
      { keyWord: '@task', idList: \* Id of list on trello you want your tasks to be created *\ },
      { keyWord: '@major', idList: \* Id of list on trello you want your tasks to be created *\ }
    ]
};

/*
  lists in configuration will search for keyword you specify 
  and create task in specified list 
*/

task(configuration)

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