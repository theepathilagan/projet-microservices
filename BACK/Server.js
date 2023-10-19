const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Node.js, Express.js, MongoDB API for ToDo App",
			version: "1.0.0"
		},
		servers: [
			{
				url: "http://localhost:5000/"
			}
		]
	},
	apis: ["./routes/ToDoRoutes.js"]
}

const swaggerSpec = swaggerJSDoc(options)

const routes = require("./routes/ToDoRoutes");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB connected..."))
	.catch((err) => console.log(err));

app.use("/api", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
