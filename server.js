import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev"));

app.use("/", (req, res) => {
	res.json({
		message: "TODO ...",
	});
});

app.listen(PORT, (error) => {
	error
		? console.log(error)
		: console.log(`your server is running at http://localhost:${PORT}`);
});
