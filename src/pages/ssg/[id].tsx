import axios, { AxiosResponse } from "axios";
import { GetStaticProps } from "next";
import React from "react";
import { itemType } from "../cs/[id]";
import Image from "next/image";

interface PageProps {
  result: itemType;
}

export default function index({ result }: PageProps) {
  return (
    <div className="flex flex-col gap-2 items-center pt-20">
      <span> Id: {result?.id} </span>
      <span>Name: {result?.title} </span>
      <span>Render mode: SSG</span>
      <Image
        src={result?.image ?? ""}
        alt=""
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!; // Retrieve the id from the URL

  const props = await axios
    .get(`http://ec2-18-156-121-203.eu-central-1.compute.amazonaws.com:3000/api/${id}`)
    .then((response: AxiosResponse<itemType>) => response.data);

  return {
    props: props,
  };
};

export const getStaticPaths = async () => {
  const paths = await axios
    .get("http://ec2-18-156-121-203.eu-central-1.compute.amazonaws.com:3000/api/all")
    .then(
      (
        response: AxiosResponse<{
          result: { id: string }[];
        }>
      ) => response.data.result.map((result) => ({ params: { id: result.id } }))
    );

  return { paths, fallback: false };
};
