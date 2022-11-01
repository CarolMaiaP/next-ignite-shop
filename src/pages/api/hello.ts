import { NextApiRequest, NextApiResponse } from "next";

export default function handles(req: NextApiRequest, res: NextApiResponse){
  return res.json({ message: 'Hello world' })
}