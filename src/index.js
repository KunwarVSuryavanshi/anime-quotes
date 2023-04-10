import fastify from "fastify";
const port = process.env.PORT || 6969;

const app = fastify();

app.get("/", (req, res) => {
	res.send("Welcome to anime quotes! 😀");
});

const start = async () => {
	try {
    await app.listen(port, (err) => {
      if (err) {
        app.log.error(err);
        process.exit();
      }
      console.log(`API started on ${port}! 🎉`);
    });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();

// fastify.listen(port, () => console.log(`API started on ${port}! 🎉`));
