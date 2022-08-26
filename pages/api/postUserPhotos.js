import { prisma } from "./lib/prisma.ts";
import { getSession } from "next-auth/react";


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
