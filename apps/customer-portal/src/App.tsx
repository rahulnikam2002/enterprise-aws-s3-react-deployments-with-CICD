import './App.css'
import {Button} from "@repo/ui"
import {formatCurrency} from "@repo/utils"

function App() {

  return (
    <>
      <section>
        <Button onClick={() => alert(formatCurrency(12345))} />
      </section>
    </>
  )
}

export default App


