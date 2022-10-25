import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const Error = () => {
  return(
    <h1 className="mx-auto text-1xl md:text-3xl font-bold">
      Ups.. parece que haz intentado acceder a un sitio que no existe
    </h1>
  )
}

export default function ShowContent() {
  let { id } = useParams();
  const [Content, setContent] = useState({});
  const [error, SetError] = useState()

  async function ReadContentFromMd() {
    const module = await import(`../content/${id}.md`);
    return module;
  }

  useEffect(() => {
    const result = ReadContentFromMd().then(Markdown => setContent({ attributes: Markdown.attributes, html: Markdown.html })).catch(errByReadingMd => SetError(errByReadingMd));

    return () => {
      result;
    };
  }, []);

  return (
    <div className="h-min-screen  ">
      {
        error ? <Error/> : <article className="px-1 mx-auto prose prose-sm md:prose-lg  lg:prose-xl mt-20" dangerouslySetInnerHTML={{ __html: Content?.html }}></article>
      }
      
    </div>
  );
}
