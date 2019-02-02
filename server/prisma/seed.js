const { prisma } = require("../src/generated/prisma-client");

async function main() {
  await prisma.createUser({
    name: "Pepito",
    type: "CLIENT"
  });

  await prisma.createPost({
    type: "NEWS",
    title: "Candelaria 2019",
    image: "",
    description: "El 2 de Febrero en el poligono a las 19:00 "
  });
}

main().catch(e => console.error(e));
