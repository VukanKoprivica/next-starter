// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result: {
    id: string;
  }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await axios
    .post(
      "https://demo-api.demo-b.vantagediscovery.com/v1/search/fbliss/ff4u-mt-asos-ssense-patched-1536/semantic",
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
            "f81b1c338da8df421dc907d5a7cd9fba3fcd8995d3b2512be0b3e28503a68a509dd7bae4881370252656ef4949b9ac23ddd92574caf158b6fcf86942dcd658b9e32683cba81efef715c61394c89a949ee829d1b32128026cde1ad2101a2f49b23e80d8b4af84a85cb4aeae89bbe3dac25a9b1c36afd166dff65ea736920cee5a634d57887233f20082c0357514110f2b43d66b71a0951d85b70e1986",
        },
      }
    )
    .then(
      (
        response: AxiosResponse<{
          results: { id: string }[];
        }>
      ) => {
        return response.data.results;
      }
    );

  res.status(200).json({ result });
}
