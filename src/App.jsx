import { Box } from "@mui/material"
import Header from "./compo/Header"
import Hero from "./compo/Hero"
import About from "./compo/About"

function App() {
  return (
    <>
      <Box minHeight="100vh" bgcolor="background.default">
        <Header />
        <Hero />
        <About />


      </Box>
    </>
  )
}

export default App
