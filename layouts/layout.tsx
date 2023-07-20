import React from 'react'
import Head from "next/head";
import ResponsiveAppBar from "@/components/Navbar";

const layout = () => {
  return (
    <>
     <Head>
      <title>Marvel App</title>
      <meta name="description" content="Marvel App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />


    </Head>
    <ResponsiveAppBar/>
    </>
  )
}

export default layout