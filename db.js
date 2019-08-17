const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
const dbname = 'todos';
const url = 'mongodb+srv://admin:abcd1234@cluster0-myg00.mongodb.net/todos?retryWrites=true&w=majority'
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const state = {
  db : null
}

const connect = (cb) => {
  if(state.db)
    cb();
  else {
    MongoClient.connect(url, mongoOptions, (err, client) => {
      if(err)
        cb(err);
      else {
        state.db = client.db(dbname);
        cb();
      }
    })
  }
}

const getPrimaryKey = (_id) => {
  return ObjectID(_id);
}

const getDB = () => {
  return state.db;
}

module.exports = {connect, getPrimaryKey, getDB}