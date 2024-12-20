import React from "react";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";

export default function Ssr(props: { ids: { id: string }[] }) {
  return (
    <div className="flex flex-col items-center pt-20">
      {props.ids.map((value) => (
        <Link key={value.id} href={`http://ec2-18-156-121-203.eu-central-1.compute.amazonaws.com:3000/ssg/${value.id}`}>
          {value.id} SSG
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const ids = await axios.get("http://ec2-18-156-121-203.eu-central-1.compute.amazonaws.com:3000/api/all").then(
    (
      response: AxiosResponse<{
        result: { id: string }[];
      }>
    ) => response.data.result.map((result) => ({ id: result.id }))
  );

  return {
    props: {
      ids, // Wrap the array in an object
    },
  };
}
