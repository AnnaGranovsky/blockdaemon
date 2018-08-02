# code-challenge

Blockdaemon code challenge.

## Hello Blockchain

Hello Blockchain is a basic blockchain management application. Users can create blockchains and manually add blocks to them via a user interface and API.

## Back End Technical Requirements

Create a Restful API in the back end language of your choice (Golang preferred) that implements the following routes:

1. Create a blockchain
2. List all blockchains
3. Get a specific blockchain by id
3. Add a block to a blockchain

You do not need to design or use a database schema, in-memory storage is fine.

### Schema

#### Blockchain

| Field      | Description                                  |
| ---------- | -------------------------------------------- |
| ID         | Blockchain ID                                |
| Name       | Name of the Blockchain                       |
| Blocks     | List of blocks that belong to the Blockchain |

#### Block

| Field      | Description                          |
| ---------- | ------------------------------------ |
| ID         | Generate a unique hash for the block |
| Timestamp  | The date when the block was created  |

## Front End Technical Requirements

Design, implement, and integrate with the backend API routes for the following pages in React:

1. List Blockchains view
    - List all of the blockchains that have been created
      - Display the `name` and `number of blocks`
    - "Create a Blockchain" button
2. Single Blockchain view
    - Display the `name`
    - List all of the Blocks in the Blockchain
      - Display the `uinqiue hash` and `timestamp`
    - "Add a Block" button
3. "Create Blockchain" view
    - Implement as a separate page or modal
    - Include a user input for Blockchain `name`

Use the provided react template and build the Hello Blockchain application. We have included a basic webpack config (babel, hot reload, postcss), feel free to import any `npm` packages.

The directory structure is laid out as follows:

```
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   └── App.js
│   └── index.js
└── webpack.config.js
```

**Nice to have:**
  - Manage state in Redux (or alternative flow framework)
  - Style the components with `css` or use a UI component library

### Development

1. Install [nvm](https://github.com/creationix/nvm)
2. `nvm install 10.7.0 && nvm use 10.7.0`
3. `npm install`
4. `npm start`

## Submission

Create a github repo with your finished code and instructions on how to run the entire application. 
