"use client"
import React from "react";
import { render } from "react-dom";

let mypoems: Array<number> = [1, 2, 3, 4, 5];

export default function Poem(props: any) {
  console.log("+++++++++before++++++++++")
  console.log(props);
  console.log("++++++++after+++++++++")
  return (

    // <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-1 mx-auto my-[20px] space-y-[10px] justify-center">
    //   {newArray.map((poem: any) => {
    //     return (
    <figure
      className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <div className="flex  space-x-[200px]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-[#9AD32F]">Book or Article : {props.serachResults.book_or_article}</h3>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-[#9AD32F]">Poem Name : {props.serachResults.poem_name}</h3>
        </div>
        {/* <h3 className="text-lg font-semibold mt-[15px] text-gray-900 dark:text-[#E19C12]">Poem</h3> */}
        <p className="my-4 inline-block dark:text-[#aff8af]">{props.serachResults.poem.split('\n').map((line: any, index: any) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center space-x-3">
        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
          <div>{props.serachResults.poet != null ? props.serachResults.poet : 'Unknown Poet'}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
        </div>
      </figcaption>
      <table className="text-[white] mt-[20px] border-separate border-spacing-2 min-w-[400px] border border-slate-500 ...">
        <thead className="text-[yellow]">
          <tr>
            <th className="border border-slate-600 ...">metaphor</th>
            <th className="border border-slate-600 ...">target</th>
            <th className="border border-slate-600 ...">source</th>
          </tr>
        </thead>
        <tbody>
  {props.serachResults.metaphors.map((element: any, index: number) => (
    <tr key={index}>
      <td className="border border-slate-700 ...">{element.metaphor}</td>
      <td className="border border-slate-700 ...">{element.target}</td>
      <td className="border border-slate-700 ...">{element.source}</td>
    </tr>
  ))}
</tbody>
      </table>
    </figure>
    //     )
    //   })}
    // </div>
  )
}