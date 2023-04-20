import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import animeQuotes from 'animequotes';

const port: number = Number(process.env.PORT) || 6969;

const server: FastifyInstance = fastify();

interface AnimeQuery {
	anime: string
}

interface Random {
	QueryString: AnimeQuery
}

server.get("/", (req: FastifyRequest, res: FastifyReply) => {
	res.send("Welcome to anime quotes! 😀");
});

server.get("/random", (req: FastifyRequest, res: FastifyReply) => {
	// const { anime } = req.query;

	res.send(animeQuotes.randomQuote());
})

server.get("/name:name", (req: FastifyRequest<{ Params: { name: string } }>, res: FastifyReply) => {
	// const { name } = req.params;
	const namedQuote = animeQuotes.getQuotesByAnime(req.params.name);
	res.send(namedQuote);
})

server.get("/character:character", (req: FastifyRequest<{ Params: { character: string } }>, res: FastifyReply) => {
	const charQuotes = animeQuotes.getQuotesByCharacter(req.params.character)
	res.send(charQuotes);
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
