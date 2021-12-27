import { useSelector, useDispatch } from "react-redux"
import Layout from "../components/templates/layout"
import { setTest } from "../store/testSlice"

export default function Home() {

  const dispath = useDispatch()
  const { test } = useSelector(state => state.test)

  return (
    <Layout
      className={`p-5`}
    >
      <h1 className="mb-5 text-lg font-semibold">React, Next.js, Tailwind css, Redux toolkit boilerplate</h1>
      <p><button className="bg-gray-300 p-1" onClick={()=>dispath(setTest(test ? false : true))}>Toggle value</button> {test ? `Test is true` : `Test is false`}</p>
    </Layout>
    
  )
}
