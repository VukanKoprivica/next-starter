import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import SpinnerIcon from "@/icons/SpinerIcon";

export default function CS() {
  const [props, setProps] = useState<{ id: string }[]>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await axios
      .get("https://coruscating-hotteok-f9463e.netlify.app/api/all")
      .then(
        (
          response: AxiosResponse<{
            result: { id: string }[];
          }>
        ) =>
          response.data.result.map((result) => ({
            id: result.id,
          }))
      );
    setProps(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center pt-20">
      {!loading &&
        props?.map((value) => (
          <Link
            key={value.id}
            href={`https://coruscating-hotteok-f9463e.netlify.app/cs/${value.id}`}
          >
            {value.id} CS
          </Link>
        ))}
      {loading && <SpinnerIcon className="w-20 h-20" />}
    </div>
  );
}
