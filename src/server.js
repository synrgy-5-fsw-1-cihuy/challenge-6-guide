const app = require("./app");
const { sequelize } = require("./database/models");

const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.info(
      "⚡️[database]: Database connection has been established successfully."
    );

    app.listen(PORT, () => {
      console.info(
        `⚡️[server]: Server is running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
