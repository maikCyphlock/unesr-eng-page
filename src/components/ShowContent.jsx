import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const Error = () => {
  return(
    <h1 className="text-1xl md:text-3xl font-bold">
      Ups.. parece que haz intentado acceder a un sitio que no existe
    </h1>
  )
}

export default function ShowContent() {
  let { id } = useParams();
  const [Content, setContent] = useState({});
  const [error, SetError] = useState()

  async function get() {
    const module = await import(`../content/${id}.md`);
    return module;
  }

  useEffect(() => {
    const result = get().then(e => setContent({ attributes: e.attributes, html: e.html })).catch(err => SetError(err));

    return () => {
      result;
    };
  }, []);

  return (
    <div className="h-min-screen flex justify-center items-center ">
      {
        error ? <Error/> : <article className="prose lg:prose-xl mt-20" dangerouslySetInnerHTML={{ __html: Content?.html }}></article>
      }
      
    </div>
  );
}
