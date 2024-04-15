import express from "express";

import path from "path";
const app = express();

const __dirname = path.resolve();

app.listen(8000, (error) => {
	error
		? console.log(error)
		: console.log(`your server is running at http://localhost:8000`);
});
