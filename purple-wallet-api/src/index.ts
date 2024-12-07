import app from "./app/server";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[purple-wallet]: Server is running on port: ${port}`);
});