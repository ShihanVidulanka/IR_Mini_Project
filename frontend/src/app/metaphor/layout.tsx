"use client"
import Poem from "./poem";

let mypoems: Array<String> = ['a', 'b', 'c', 'd', 'e']

export default function Dashboard( {
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
      </section>
  )
}