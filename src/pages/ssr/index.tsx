import React from "react";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";

export default function Ssr(props: { ids: { id: string }[] }) {
  return (
    <div className="flex flex-col items-center pt-20">
      {props.ids.map((value) => (
        <Link key={value.id} href={`http://ec2-18-156-121-203.eu-central-1.compute.amazonaws.com:3000/ssr/${value.id}`}>
          {value.id} SSR
        </Link>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const ids = await axios.get("http://ec2-18-156-121-203.eu-central-1.compute.amazonaws.com:3000/api/all").then(
    (
      response: AxiosResponse<{
        result: { id: string }[];
      }>
    ) => response.data.result.map((result) => ({ id: result.id }))
  );

  return {
    props: {
      ids,
    },
  };
}
