import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handleUserProfilePic(req,res) {

  if(req.method !== 'POST') {
    return res.status(405).json({'message':'You Must Be Logged In To Post.'})
  }

  const session = await getSession({req});
  let newImage = req.body;
  let userEmail = session.user.email;

  const userImage = await prisma.user.update({
    where: {
      email: userEmail
    },
    data: {
      image: newImage
    },
  })

  res.end();
}


