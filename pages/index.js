import Base from "../components/layout/base"
import Toolbar from "../components/modules/toolbar"
import Header from "../components/modules/header"

export default function Home() {

  return (
    <Base>
      
      {/** Module: Toolbar */}
      <Toolbar />

      {/** Module: Header */}
      <Header />


    </Base>
    
  )
}
