"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import PoemDTO from "./PoemDTO.dto"
import Poem from "./poem"
import React from "react";




export default function Page(props: any) {


  "use client"
  const [METAPHORS, SetMETAPHORS] = useState('');
  const [POETRY, SetPOETRY] = useState('');
  const [POET, SetPOET] = useState('');
  const [TITLE, SetTITLE] = useState('');
  const [QUERY, SetQUERY] = useState('');
  const [POEMS, SetPOEMS] = useState(new Array<PoemDTO>);

  let mypoems: Array<String> = ['a', 'b', 'c', 'd', 'e']
  // eslint-disable-next-line react-hooks/rules-of-hooks

  useEffect(() => {
    getMetaphors();

  }, []);

  async function getMetaphors() {
    console.log('working');

    const res = await fetch('http://localhost:3000/metaphors', {
      method: 'POST',
      headers: {

        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "searchPhrase": QUERY, "metaphor": METAPHORS, "poetry": POETRY, "poet": POET, "title": TITLE }),
    }).then((res) => {
      const data = res.json().then((data) => {
        const searchresults = new Array();
        data.forEach((source: any) => {
          searchresults.push(source._source);
        })
        SetPOEMS(searchresults);
      })


      return data;
    }).catch((err) => {
      console.log(err);

    })

  }

  return (
    <section>
      <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="poem-metaphor-high-resolution-logo-transparent.png" className="flex items-center">
              <Image src="/find-metaphor-llogo.png.png" width={30} height={10} className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Find Metaphor</span>
            </a>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="text" id="search-navbar" className="block   p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </div>
              <div>
                <img src="fmLogo.png" className="w-[100px]" alt="" />
              </div>
            </div>
          </div>
          <div className="flex-column  items-center">

            <div className="flex justify-center space-x-[20px]">
              <div>
                <div className="flex justify-center  mt-10px mx-auto ">
                  <div>
                    <div className="flex items-center pl-3 mt-[10px] ">

                      <div className="z-[5] -mr-[35px] w-9 h-9">
                        <img src="poetry.png" alt="" />
                      </div>
                      <input type="text" id="poetry" onChange={(event) => { SetPOETRY(event.currentTarget.value.toString()) }} className="block  lg:min-w-[520px] p-2 pl-10 lg:px-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by the Poetry"></input>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-[10px] mx-auto">
                  <div>
                    <div className="flex items-center pl-3 ">

                      <div className="z-[5] -mr-[35px] w-9 h-8">
                        <img src="poem.png" alt="" />
                      </div>

                      <input type="text" id="title" onChange={(event) => { SetTITLE(event.currentTarget.value.toString()) }} className="block  lg:min-w-[520px] p-2 pl-10 lg:px-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Poem Name"></input>
                    </div>
                  </div>
                </div>

              </div>


              <div>
                <div className="flex justify-center  mt-10px mx-auto ">
                  <div>
                    <div className="flex items-center pl-3 mt-[10px] ">

                      <div className="z-[5] -mr-[35px] w-9 h-9">
                        <img src="author.png" alt="" />
                      </div>

                      <input type="text" id="poet" onChange={(event) => { SetPOET(event.currentTarget.value.toString()) }} className="block  lg:min-w-[520px] p-2 pl-10 lg:px-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by the Poet"></input>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-[10px] mx-auto">
                  <div>
                    <div className="flex items-center pl-3 ">

                      <div className="z-[5] -mr-[35px] w-9 h-9">
                        <img src="metaphor1.png" alt="" />
                      </div>

                      <input type="text" id="metaphor" onChange={(event) => { SetMETAPHORS(event.currentTarget.value.toString()) }} className="block  lg:min-w-[520px] p-2 pl-10 lg:px-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Metaphor"></input>
                    </div>
                  </div>
                </div>

              </div>



            </div>

            <div className="flex justify-center">
              <button type="button" onClick={() => getMetaphors()} className="w-[300px] mt-[10px] mb-[10px] ml-[10px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>

          </div>
        </nav>


        <div>
          <div className="grid mb-8  border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-1 mx-auto my-[20px] space-y-[10px] justify-center">
            {
              POEMS.map((poem: any) => (
                <div key={poem.index} className="w-[80%] justify-center mx-auto"> { /* Replace 'someKey' with a unique key for each element */}

                  <Poem serachResults={poem} ></Poem>

                </div>
              ))
            }

          </div>
        </div>

      </div>
    </section>
  )
}