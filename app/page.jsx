import { Presentation } from "./components/Presentation";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Presentation/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
    </main>
  )
}
