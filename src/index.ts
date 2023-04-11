import fastify, { FastifyInstance } from "fastify";

const port: number = Number(process.env.PORT) || 6969;

const server : FastifyInstance = fastify();

server.get("/", (req, res) => {
	res.send("Welcome to anime quotes! 😀");
});

const start = async () => {
	try {
		await server.listen({port}, (err) => {
			if (err) {
				server.log.error(err);
				process.exit();
			}
			console.log(`API started on ${port}! 🎉`);
		});
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};
start();

// fastify.listen(port, () => console.log(`API started on ${port}! 🎉`));
