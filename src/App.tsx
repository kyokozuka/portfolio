import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";


function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <Header />
          <main className="flex-grow flex flex-col items-center max-w-5xl mx-auto mt-20">
            <Routes>
              <Route path="/portfolio/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
