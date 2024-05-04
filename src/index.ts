import express from "express";
import dotenv from "dotenv";
import { Signale } from "signale";
import morgan from "morgan";
import syncConnection from "./database/mysql/connection";
import { } from "../tsconfig.json";
import cors from "cors";
import { studentRouter } from "./infrastructure/routes/student.router";


export const app = express();
const logger = new Signale();

dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
// app.use(busboy());
// app.use(express.urlencoded({ extended: false }));
// app.use(compression());
const PORT = process.env.PORT || 3000;
const API_PREFIX = process.env.API_PREFIX || "/api/v1";

app.options("*", cors())
app.use(cors())

// app.use(`${API_PREFIX}/events`, eventManagementRouter);
// app.use(`${API_PREFIX}/documents`, documentManagementRouter);
// app.use(`${API_PREFIX}/users`, userManagementRouter);
// app.use(`${API_PREFIX}/comments`, commentRouter);
// app.use(`${API_PREFIX}/files`, cloudinaryManagementRouter);
app.use(`${API_PREFIX}`, studentRouter);

async function startServer() {
    await syncConnection();
    app.listen(PORT, () => {
        logger.success(`Server running on http://localhost:${PORT}${API_PREFIX}`);
    });
}

startServer();
