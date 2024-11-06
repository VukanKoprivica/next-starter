// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result: {
    id: string;
    image: string;
    title: string;
  };
};

export type ItemDTO = {
  id: string;
  noopMeta: {
    title: string;
    description: string;
    url: string;
    image_url: string;
    text: string;
  };
} & object;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await axios
    .get("https://demo-api.demo-b.vantagediscovery.com/api/v1/items", {
      params: {
        ids: [req.query.id as string],
        clientId: "nick-nov9",
        clientNamespace: "ff4u-mt-asos-ssense-patched-1536-2",
      },
      headers: { Authorization: "9dbc429f-d258-4357-aa61-95b4d9e2b973" },
    })
    .then((response: AxiosResponse<ItemDTO[]>) => {
      return {
        id: response.data[0].id,
        image: response.data[0].noopMeta.image_url,
        title: response.data[0].noopMeta.title,
      };
    });

  res.status(200).json({ result });
}
