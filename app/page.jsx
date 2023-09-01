import { Presentation } from "./components/Presentation";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from "./components/Portfolio";

export default function Home() {
  return (
    <main>
      <Presentation/>
      <AboutMe/>
      <Portfolio/>
    </main>
  )
}
