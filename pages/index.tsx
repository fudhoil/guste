import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  const [hidden, setHidden] = React.useState(true);

  return (
    <div className="bg-white  h-screen scrollbar scrollbar-thumb-gray-900 scrollbar-thin scrollbar pr-2">
      <Head>
        <title>Coba Guste</title>
        <meta name="description" content="Coba Guste Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="grid grid-cols-1 sticky top-0 z-10 bg-white m-2 mt-0 mb-4 h-[10px]">
        <div className="relative flex flex-grow bg-white items-center h-[7.5vh] mt-2 w-full border-2 border-black">
          <div className="w-[2.8rem] max-w-[64em] h-[7.5vh] border-r-2 border-black">
            oke
          </div>
          <div className="flex pl-2">
            <h1>GUSTÉ.DESIGN</h1>
          </div>
          <button
            className="absolute right-2"
            onClick={() => setHidden(!hidden)}>
            {hidden ? (
              <svg width="36" height="25.5" viewBox="0 0 36 31.5">
                <path
                  d="M32.625,18H3.375a3.375,3.375,0,1,0,0,6.75h29.25a3.375,3.375,0,0,0,0-6.75Zm1.125,9H2.25a1.125,1.125,0,0,0-1.125,1.125V29.25a4.5,4.5,0,0,0,4.5,4.5h24.75a4.5,4.5,0,0,0,4.5-4.5V28.125A1.125,1.125,0,0,0,33.75,27ZM4.123,15.75H31.877c2.431,0,3.84-3.087,2.448-5.335C31.5,5.85,25.281,2.257,18,2.25S4.5,5.85,1.675,10.414C.281,12.663,1.692,15.75,4.123,15.75ZM27,7.875A1.125,1.125,0,1,1,25.875,9,1.125,1.125,0,0,1,27,7.875Zm-9-2.25A1.125,1.125,0,1,1,16.875,6.75,1.125,1.125,0,0,1,18,5.625ZM9,7.875A1.125,1.125,0,1,1,7.875,9,1.125,1.125,0,0,1,9,7.875Z"
                  transform="translate(0 -2.25)"></path>
              </svg>
            ) : (
              <svg width="36" height="25.5" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            )}
          </button>
        </div>
        {!hidden && (
          <>
            <div className="itemnav flex bg-white items-center h-[7.0vh] w-full border-2 border-t-0 border-black">
              <div className="w-[2.8rem] max-w-[64em] h-[7.5vh] border-r-2 border-black">
                oke
              </div>
            </div>
            <div className="itemnav flex bg-white items-center h-[7.0vh] w-full border-2 border-t-0 border-black">
              <div className="w-[2.8rem] max-w-[64em] h-[7.5vh] border-r-2 border-black">
                oke
              </div>
            </div>
            <div className="itemnav flex bg-white items-center h-[7.0vh] w-full border-2 border-t-0 border-black">
              <div className="w-[2.8rem] max-w-[64em] h-[7.5vh] border-r-2 border-black">
                oke
              </div>
            </div>
            <div className="itemnav flex bg-white items-center h-[7.0vh] w-full border-2 border-t-0 border-black">
              <div className="w-[2.8rem] max-w-[64em] h-[7.5vh] border-r-2 border-black">
                oke
              </div>
            </div>
            <div className="itemnav flex bg-white items-center h-[7.0vh] w-full border-2 border-t-0 border-black">
              <div className="w-[2.8rem] max-w-[64em] h-[7.0vh] border-r-2 border-black">
                oke
              </div>
            </div>
          </>
        )}
      </nav>
      <div className="grid grid-flow-row-dense md:grid-cols-2 mx-1">
        <main className="relative sm:col-span-2 flex h-screen border-2 border-black mb-2 mx-1 bg-[#b2e0dd]"></main>
        <main className="flex col-span-2 px-1 border-2 border-black mb-2 mx-1">
          <h1 className="font-semibold sm:text-[1.1rem] md:text-[1.3rem]">
            ABOUT
          </h1>
        </main>
        <main className="relative sm:col-span-2 md:col-span-1 flex h-[60vh] border-2 border-black mb-2 mx-1">
          <Image
            src="https://cdn.sanity.io/images/uq1ipftd/production/8b5c73cc683b3fd621879010e6d8964fb7ecb555-2087x1124.jpg?rect=1,0,2085,1124&w=1024&h=552&auto=format"
            layout="fill"
            objectFit="cover"
          />
        </main>
        <main className="relative sm:col-span-2 md:col-span-1 flex h-[50vh] md:h-[60vh] border-2 border-black mb-2 mx-1 bg-[#fbe462]">
          oke
        </main>
        <main className="flex col-span-2 px-1 border-2 border-black mb-2 mx-1">
          <h1 className="font-semibold sm:text-[1.1rem] md:text-[1.3rem]">
            RECENT PROJECTS
          </h1>
        </main>
        <main className="relative sm:col-span-2 flex md:col-span-2 h-[27.5vh] md:h-[50vh] border-2 border-black mb-2 mx-1">
          <Image
            src="https://cdn.sanity.io/images/uq1ipftd/production/d1d4ab05e6d5f36063a00c548b45807ed0dd46c6-3855x2169.png?rect=0,0,3855,2167&w=1366&h=768&auto=format"
            layout="fill"
            objectFit="cover"
          />
        </main>
        <main className="flex col-span-2 px-2 border-2 border-black mb-2 mx-1">
          <h1 className="font-semibold" style={{ fontSize: "1.2rem" }}>
            ABOUT ORIGINAL ART
          </h1>
        </main>
        <main className="relative sm:col-span-2 flex h-screen border-2 border-black mb-2 mx-1">
          <Image
            src="https://cdn.sanity.io/images/uq1ipftd/production/959b9311b27759a0a309e3e34f66565d4e4a8ea1-3966x3966.jpg?w=1366&h=1366&auto=format"
            layout="fill"
            objectFit="cover"
          />
        </main>
      </div>
    </div>
  );
};

export default Home;
