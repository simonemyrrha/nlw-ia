import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPromptsRoute(app: FastifyInstance) {
  console.log(process.env.DATABASE_URL);
  app.get('/prompts', async () => {
    const prompts = await prisma.prompt.findMany()
    console.log(prompts)
    return prompts
  })
}
