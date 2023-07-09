const { MONGODB_HOST } = require("../config");

class DbConstants {
  constructor() {
    this.usersList = [];
    this.translationsList = [];
    this.dictionary = [];
  }

  async init() {
    await this.updateAll();
  }

  async updateAll() {
    const MongoClient = require("mongodb").MongoClient;
    const client = new MongoClient(MONGODB_HOST, { useNewUrlParser: true });
    await client.connect();

    const db = "language-cards";
    const usersCursor = client.db(db).collection("users");
    const translationsCursor = client.db(db).collection("translations");
    const dictionaryCursor = client.db(db).collection("user-dictionary");

    this.usersList = await usersCursor.find().toArray();
    this.translationsList = await translationsCursor.find().toArray();
    this.dictionaryList = await dictionaryCursor.find().toArray();

    console.log("All constants fetched from DB");

    // //////////////////////  watch for updates  ////////////////////////////////////

    const options = { fullDocument: "updateLookup" };

    const usersStream = usersCursor.watch([], options);
    const translationsStream = translationsCursor.watch([], options);
    const dictionaryStream = dictionaryCursor.watch([], options);

    usersStream.on("change", (change) => this.assignOneValue("users", change.fullDocument));
    translationsStream.on("change", (change) => this.assignOneValue("translations", change.fullDocument));
    dictionaryStream.on("change", (change) => this.assignOneValue("dictionary", change.fullDocument));
  }

  assignOneValue(constant, changeDocument) {
    console.log(`Updated "${constant}" entry "${changeDocument[String(constant).slice(0, -1)] || changeDocument._id}" from DB`);
    this[`${constant}List`] = this[`${constant}List`].map((item) => (String(item._id) === String(changeDocument._id) ? changeDocument : item));
  }
}

const allConstants = new DbConstants();

module.exports = allConstants;
