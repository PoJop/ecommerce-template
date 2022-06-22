import { Footer } from "../components/layers/footer";
import { Header } from "../components/layers/header/header";
import { Main } from "../components/layers/main";


export default function Home() {
  return (
    <>
      <Header />
      <Main >
        <div className="h-[100vh]"></div>
      </Main >
      <Footer />
    </>
  )
}
