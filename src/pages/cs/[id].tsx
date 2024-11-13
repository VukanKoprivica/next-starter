import SpinnerIcon from "@/icons/SpinerIcon";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export type itemType = {
  id: string;
  image: string;
  title: string;
};

export default function index() {
  const [props, setProps] = useState<itemType>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchData = (id: string) => {
    axios
      .get(`http://ec2-18-156-121-203.eu-central-1.compute.amazonaws.com:3000/api/${id}`)
      .then((response: AxiosResponse<{ result: itemType }>) => {
        setProps(response.data.result);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (router.isReady && router.query.id) fetchData(router.query.id as string);
  }, [router]);

  return (
    <div className="flex flex-col gap-2 items-center pt-20">
      {!loading && (
        <>
          <span> Id: {props?.id} </span>
          <span>Name: {props?.title} </span>
          <span>Render mode: CS</span>
          <Image
            src={props?.image ?? ""}
            alt=""
            width={500}
            height={500}
            priority
          />
        </>
      )}
      {loading && <SpinnerIcon className="w-20 h-20" />}
    </div>
  );
}
