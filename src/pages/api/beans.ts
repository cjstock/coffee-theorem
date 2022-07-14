import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const beans = async (req: NextApiRequest, res: NextApiResponse) => {
  const beans = await prisma.bean.findMany();
  res.status(200).json(beans);
};

export default beans;
