"use client";

import {
  useState
} from "react";


export default function ExportActions(
  {
    id
  }:{
    id:string
  }
) {

  const [status,setStatus] =
    useState("");

  const [outputs,setOutputs] =
    useState<string[]>([]);


  async function generate() {

    setStatus(
      "Generating edition..."
    );


    const response =
      await fetch(
        `/api/creator/export/${id}`
      );


    const data =
      await response.json();


    if(data.success){

      setOutputs(
        data.outputs
      );

      setStatus(
        "Edition generated successfully."
      );

    } else {

      setStatus(
        "Generation failed."
      );

    }

  }


  return (

    <div className="space-y-6">

      <div className="flex gap-4">

        <button
          onClick={generate}
          className="border border-neutral-700 rounded-lg px-6 py-3"
        >
          Generate DOCX
        </button>


        <button
          onClick={generate}
          className="border border-neutral-700 rounded-lg px-6 py-3"
        >
          Generate PDF
        </button>

      </div>


      {
        status && (

          <p className="text-neutral-400">
            {status}
          </p>

        )
      }


      {
        outputs.length > 0 && (

          <div className="space-y-2">

            {
              outputs.map(
                file => (

                  <a
                    key={file}
                    href={`/api/creator/artifacts/${file
                      .replace(/^output\//,"")
                      .split("/")
                      .map(encodeURIComponent)
                      .join("/")
                    }`}
                    target="_blank"
                    className="block text-neutral-400 underline"
                  >

                    {file}

                  </a>

                )
              )
            }

          </div>

        )
      }


    </div>

  );

}
