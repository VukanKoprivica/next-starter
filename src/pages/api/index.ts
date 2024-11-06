// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await axios
    .post(
      "https://api.dev-a.dev.vantagediscovery.com/v1/search/vukanvukanvukan/football-players/semantic",
      {
        request_id: 123,
        collection: {
          accuracy: 1,
        },
        filter: {
          boolean_filter: "",
        },
        pagination: {
          page: 0,
          count: 10,
        },
        text: "search text",
      },
      {
        headers: {
          Authorization:
            "$2a$10$HEmpplGV7bzwtVZ6NgVLIum2GhB.seipIKRvLWM5gSGIT1PLzUFha",
        },
      }
    )
    .then(
      (
        response: AxiosResponse<{
          results: { id: string }[];
        }>
      ) => {
        return response.data.results[0].id;
      }
    );

  res.status(200).json({ name: result });
}
