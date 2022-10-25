import React, { Suspense, lazy } from "react";
import Loading from "../../components/Loading";

const ShowContent = lazy(()=> import("../../components/ShowContent"))   
export default function Index() {
    return (
      <Suspense fallback={<Loading/>}>
        
       <ShowContent/>
      </Suspense>
    );
  }
  