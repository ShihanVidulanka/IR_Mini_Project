"use client"
import { log } from "console"
import Image from "next/image"
import { useState } from "react"
import PoemDTO from "./PoemDTO.dto"
import Poem from "./poem"
import React from "react";
import { TERipple } from "tw-elements-react";



export default function Page(props: any) {


  "use client"
  const [METAPHORS, SetMETAPHORS] = useState(false);
  const [POETRY, SetPOETRY] = useState(false);
  const [POET, SetPOET] = useState(false);
  const [TITLE, SetTITLE] = useState(false);
  const [QUERY, SetQUERY] = useState('');
  const [POEMS, SetPOEMS] = useState([
    {
          "book_or_article": "යසෝදරාවත",
          "year": null,
          "poet": null,
          "poem_name": "යසෝදරාවත",
          "poem": "මගේ ඇත්‌ රජුනි හිමි අද කොතැනක ද?",
          "metaphors": [
              {
                  "metaphor": "ඇත්‌ රජුනි හිමි",
                  "target": "සැමියා",
                  "source": "ඇත්‌ රජු"
              }
          ]
      }
]);

  let mypoems: Array<String> = ['a', 'b', 'c', 'd', 'e']
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      const data = res.json().then((data)=>{
        const searchresults= new Array();
    data.forEach((source:any) => {
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
            <a href="https://flowbite.com/" className="flex items-center">
              <Image src="https://flowbite.com/docs/images/logo.svg" width={30} height={10} className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div className="flex md:order-1">
              <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" onChange={(event) => { SetQUERY(event.currentTarget.value.toString()) }} className="block  lg:min-w-[520px] p-2 pl-10 lg:px-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>

              </div>
              <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-full h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <button type="button" onClick={() => getMetaphors()} className=" ml-[10px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>

            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="text" id="search-navbar" className="block   p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </div>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input id="vue-checkbox-list" disabled={METAPHORS || POET} type="checkbox" onClick={(event) => {
                      event.currentTarget.checked == true ? SetPOETRY(true) : SetPOETRY(false)
                    }} value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">POETRY</label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input id="react-checkbox-list" disabled={METAPHORS || TITLE || POETRY} type="checkbox" onClick={(event) => { event.currentTarget.checked == true ? SetPOET(true) : SetPOET(false) }} value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label htmlFor="react-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">POET</label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input id="angular-checkbox-list" disabled={METAPHORS || POET} type="checkbox" onClick={(event) => { event.currentTarget.checked == true ? SetTITLE(true) : SetTITLE(false) }} value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label htmlFor="angular-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">TITLE</label>
                  </div>
                </li>
                <li className="w-full dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input name="metaphors" disabled={POET || TITLE || POETRY} type="checkbox" onClick={(event) => { event.currentTarget.checked == true ? SetMETAPHORS(true) : SetMETAPHORS(false) }} value="" className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label id="laravel-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">METAPHORS</label>
                  </div>
                </li>
           
              </ul>
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