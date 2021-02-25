const mongodb = require("mongodb");
// const { get } = require("../routes/admin");
const MongoClient = mongodb.MongoClient;

let datab;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://MarwaDB:btrackV2908@gettingstarted.3etjm.gcp.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected!");      
      datab = client.db();
      callback();
    })
    .catch((err) => {
      console.log('pas de connexion', err);
      throw err;
    });
};

const getDb = () => {
  if(datab) {
    return datab;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
