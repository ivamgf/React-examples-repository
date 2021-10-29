const dotenv = require("dotenv");
const { join } = require("path");
require("universal-fetch");

dotenv.config({ path: join(__dirname, "../.env.development") });
