#Setup ES6 with Node
a) npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
b) Create start script- "start": "nodemon ./index.js --exec babel-node -e js"
c) create .babelrc file and add below
   {
    "presets": [
        "env",
        "stage-0"
    ]
   }


#AWS tutorial-
https://docs.aws.amazon.com/appsync/latest/devguide/tutorial-dynamodb-resolvers.html