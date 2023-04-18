import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import animeQuotes from 'animequotes';

const port: number = Number(process.env.PORT) || 6969;

const server: FastifyInstance = fastify();

server.get("/", (req: FastifyRequest, res: FastifyReply) => {
	res.send("Welcome to anime quotes! 😀");
});

server.get("/random", (req: FastifyRequest, res: FastifyReply) => {
	res.send(animeQuotes.randomQuote());
})

server.get("/:name", (req: FastifyRequest, res: FastifyReply) => {
	console.log(req)
	const namedQuote = animeQuotes.getQuotesByAnime(req.params.name);
	
})

const start = async () => {
	try {
		await server.listen({ port }, (err) => {
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
