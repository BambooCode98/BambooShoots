import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();


//needed by nextjs to set request size limit
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1gb',
    },
  },
}


export default async function postUserPhotos(req,res) {
  const session = await getSession({req});
  const imageURL = req.body;
  
  let userEmail = session.user.email;

  const userImage = await prisma.user.update({
    where: {
      email: userEmail
    },
    data: {
      images: {
        create: {
          url: imageURL
        }
      }
    },
  })
    
    
  res.end();
}
