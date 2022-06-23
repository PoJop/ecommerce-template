import { Footer } from "../components/layers/footer";
import { Header } from "../components/layers/header/header";
import { Main } from "../components/layers/main";


export default function Home() {
  return (
    <>
      <Header />
      <Main >
        <div className="h-[100vh]">
            <h1 className="pt-[25vh] text-5xl text-center text-gray-600">404</h1>
        </div>
      </Main >
      <Footer />
    </>
  )
}
