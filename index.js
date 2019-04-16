require("dotenv").config();

const connect = require("./data/db");
const server = require("./api/server");

const port = process.env.PORT || 5000;

async function start() {
  try {
    await connect();
    console.log(`\n MongoDB successfully connected \n`);
    server.listen(port, () => {
      console.log(`\n The server is up and running on port ${port} \n`);
    });
  } catch (error) {
    console.log("Connection Error:", error);
  }
}

start();
