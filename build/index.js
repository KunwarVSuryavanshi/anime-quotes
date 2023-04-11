"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const port = +process.env.PORT || 6969;
const server = (0, fastify_1.default)();
server.get("/", (req, res) => {
    res.send("Welcome to anime quotes! 😀");
});
const start = async () => {
    try {
        await server.listen({ port }, (err) => {
            if (err) {
                server.log.error(err);
                process.exit();
            }
            console.log(`API started on ${port}! 🎉`);
        });
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
// fastify.listen(port, () => console.log(`API started on ${port}! 🎉`));
