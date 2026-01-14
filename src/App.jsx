import { BrowserRouter, Routes, Route} from "react-router"
import "./App.css"
import Home from "./Pages/Home.jsx"
import Register from "./Pages/Register.jsx"
import NotFound from "./Pages/NotFound.jsx"
import Header from "./Components/Header.jsx"
import Container from "./Components/Container.jsx"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
