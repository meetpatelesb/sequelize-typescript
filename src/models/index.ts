import fs from "fs";
import path from "path";
import { ModelCtor, Sequelize } from "sequelize-typescript";
import { DATABASE_URL, NODE_ENV } from "../config";
let db: Sequelize;

const initSequelize = () => {
  const _basename = path.basename(module.filename);
  const sequelize = new Sequelize(
    "mysql://root:root@localhost:3306/Elearning",
    {
      dialect: "mysql",
      logging: NODE_ENV === "development" && console.log,
    }
  );

  const _models = fs
    .readdirSync(__dirname)
    .filter((file: string) => {
      return (
        file !== _basename &&
        file !== "interfaces" &&
        file.slice(-5) !== ".d.ts" &&
        (file.slice(-3) === ".js" || file.slice(-3) === ".ts")
      );
    })
    .map((file: string) => {
      const model: ModelCtor = require(path.join(__dirname, file))?.default;
      // console.log(model);

      return model;
    });

  // console.log(_models);

  sequelize.addModels(_models);

  return sequelize;
};
if (!db) {
  db = initSequelize();
}

export default db;
