const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;
const formidable = require("formidable");

const usersRoute = require("./routes/usersRoute");
const videosRoute = require("./routes/videosRoute");

app.use(express.json());
app.use(cors());
app.use("/users", usersRoute);
app.use("/videos", videosRoute);
// app.post("/upload", function (req, res) {
// 	const form = new formidable.IncomingForm();
// 	// Parse `req` and upload all associated files
// 	form.parse(req, function (err, fields, files) {
// 		if (err) {
// 			return res.status(400).json({ error: err.message });
// 		}
// 		const [firstFileName] = Object.keys(files);
// 		// console.log(files);
// 		res.json({ filename: firstFileName });
// 	});
// });


app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}`);
});

// const client = ipfs.create("http://127.0.0.1:8080");

// async function main()
// {
// 	const { cid } = await client.add("Hello world!");
// 	console.log(cid);
// }
// main();

// const client = require( "ipfs-http-client");
// const ipfs = client.create();
// const test = ipfs.add("Hello World");
// console.log(test);