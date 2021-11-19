import { useSelector, useDispatch } from "react-redux"
import { setTest } from "../store/testSlice"

export default function Home() {

  const dispath = useDispatch()
  const { test } = useSelector(state => state.test)

  return (
    <div className="p-5">
      <p><button className="bg-gray-300 p-1" onClick={()=>dispath(setTest(test ? false : true))}>Toggle value</button> {test ? `Test is true` : `Test is false`}</p>
    </div>
  )
}
