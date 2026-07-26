"use client";

import {
  useState
} from "react";

import {
  useRouter
} from "next/navigation";


export default function GenerateEditionButton(
  {
    collection
  }:{
    collection:string;
  }
) {

  const router =
    useRouter();


  const [loading,setLoading] =
    useState(false);


  const [message,setMessage] =
    useState("");


  async function generate() {

    setLoading(true);

    setMessage("");

    try {

      const response =
        await fetch(
          `/api/publishing/${encodeURIComponent(collection)}`
        );


      const data =
        await response.json();


      if (!response.ok) {

        throw new Error(
          JSON.stringify(data)
        );

      }


      setMessage(
        "Edition generated successfully."
      );


      router.refresh();


    } catch(error:any) {

      setMessage(
        `Generation failed: ${error.message}`
      );

    }


    setLoading(false);

  }


  return (

    <div>

      <button

        onClick={generate}

        disabled={loading}

        className="border border-neutral-700 bg-neutral-900 rounded-lg px-6 py-3 hover:border-neutral-400 transition"

      >

        {
          loading
            ? "Generating Edition..."
            : "Generate Edition"
        }

      </button>


      {
        message && (

          <p className="mt-4 text-sm text-neutral-400">
            {message}
          </p>

        )
      }

    </div>

  );

}
