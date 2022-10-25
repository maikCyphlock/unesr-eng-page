import React, { Suspense, lazy } from "react";


const ShowContent = lazy(()=> import("../../components/ShowContent"))   
export default function Child() {
  
    return (
      <Suspense fallback={<div className="flex justify-content items-center h-screen">cargando</div>}>
       <ShowContent/>
      </Suspense>
    );
  }
  