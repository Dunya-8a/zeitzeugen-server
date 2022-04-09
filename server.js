const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;

const usersRoute = require("./routes/usersRoute");
const videosRoute = require("./routes/videosRoute");

app.use(express.json());
app.use(cors());
app.use("/users", usersRoute);
app.use("/videos", videosRoute);

app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}`);
});