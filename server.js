const { exec } = require("child_process");

exec("pm2 start npm -- start", (error) => {

  if (error) {
    process.exit(1)
  }

  process.exit();

})
