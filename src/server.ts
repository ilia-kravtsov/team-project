import { app } from "./app.js";
import { env } from "./config/env.js";

const port = env.PORT;

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    process.exitCode = 1;
    return;
  }

  console.log(`Server started and listens to ${port} port`)
})