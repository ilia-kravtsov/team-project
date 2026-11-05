import { app } from "./app.js";

const port = process.env.PORT ?? 3000

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    process.exitCode = 1;
    return;
  }

  console.log(`Server started and listens to ${port} port`)
})