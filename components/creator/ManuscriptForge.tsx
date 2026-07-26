"use client";

import {
  useState
} from "react";

import {
  useRouter
} from "next/navigation";


export default function ManuscriptForge() {

  const router =
    useRouter();


  const [title,setTitle] =
    useState("");

  const [content,setContent] =
    useState("");

  const [message,setMessage] =
    useState("");

  const [loading,setLoading] =
    useState(false);



  async function createDraft() {

    setLoading(true);
    setMessage("");


    const response =
      await fetch(
        "/api/creator/manuscripts",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            title,
            content
          })
        }
      );


    const data =
      await response.json();


    if(data.success){

      router.push(
        `/creator/publishing/${data.manuscript.id}`
      );

    } else {

      setMessage(
        data.error ??
        "Creation failed"
      );

    }


    setLoading(false);

  }



  return (

    <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-8">


      <h2 className="text-2xl font-semibold mb-6">
        Create New Manuscript
      </h2>



      <div className="space-y-6">


        <div>

          <label className="block text-sm text-neutral-400 mb-2">
            Title
          </label>


          <input

            value={title}

            onChange={
              e =>
                setTitle(e.target.value)
            }

            className="w-full bg-black border border-neutral-800 rounded-lg p-3"

            placeholder="Book title"

          />

        </div>



        <div>

          <label className="block text-sm text-neutral-400 mb-2">
            Manuscript
          </label>


          <textarea

            value={content}

            onChange={
              e =>
                setContent(e.target.value)
            }

            className="w-full h-72 bg-black border border-neutral-800 rounded-lg p-4"

            placeholder="Paste raw manuscript here..."

          />

        </div>



        <button

          onClick={createDraft}

          disabled={loading}

          className="border border-neutral-700 bg-neutral-900 rounded-lg px-6 py-3"

        >

          {
            loading
              ? "Creating Draft..."
              : "Create Draft"
          }

        </button>



        {
          message && (

            <p className="text-neutral-400">
              {message}
            </p>

          )
        }


      </div>


    </section>

  );

}
