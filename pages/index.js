import Base from "../components/layout/base"
import Toolbar from "../components/modules/globals/toolbar"
import Header from "../components/modules/globals/header"
import Footer from "../components/modules/globals/footer"

export default function Home() {

  return (
    <Base>
      
      {/** Module: Toolbar */}
      <Toolbar />

      {/** Module: Header */}
      <Header />


      {/** Module: Footer */}
      <Footer />

    </Base>
    
  )
}
