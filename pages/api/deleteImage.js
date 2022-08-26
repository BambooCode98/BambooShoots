import { prisma } from "lib/prisma.ts";
import { getSession } from "next-auth/react";


export default async function deleteUserPhotos(req,res) {

  if(req.method !== 'DELETE') {
    return res.status(405).json({'message':'You Must Be Logged In To Delete.'})
  }


  const session = await getSession({req});
  let imgId = req.body;
  let userEmail = session.user.email;

  const userImage = await prisma.user.update({
    where: {
      email: userEmail
    },
    data: {
      images: {
        deleteMany: [{
          id: imgId
        }]
      }
    },
  })
  res.end();
}