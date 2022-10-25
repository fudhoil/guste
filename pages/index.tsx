import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Coba Guste</title>
        <meta name="description" content="Coba Guste Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex sticky top-0 z-10 bg-white m-2 mt-0 mb-4 h-[10px]">
        <div className="flex bg-white h-[7.5vh] mt-2 w-full border-2 border-black" />
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
