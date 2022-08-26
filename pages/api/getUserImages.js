import { prisma } from "../../lib/prisma.ts";
import { getSession } from 'next-auth/react'



//needed by nextjs to set response size limit
export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function getImages(req,res) {
  const session = await getSession({req});
  const userSession = await prisma.user.findMany({
    where: {
      email: session.user.email
    },
    include: {
      sessions: {
        select: {
          sessionToken: true
        }
      },
      images: {
        select: {
          url: true,
          id: true
        }
      },
    }
  });
  res.send(userSession)
}