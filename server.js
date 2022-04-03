const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const users = require("./routes/usersRoute");
const videos = require("./routes/videoRoute");

app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}`);
});
