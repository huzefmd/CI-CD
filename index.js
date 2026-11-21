import express from "express";
const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
   res.json({
    msg  : "BACKEND NODE JS APPLICATION TESTING AND  RUNNING IN THE SERVER11111  ",
  });
});

app.listen(PORT, () => {
  console.log(
    `server started and running in the port http://localhost:${PORT}`,
  );
});
