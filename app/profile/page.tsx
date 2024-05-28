import Image from "next/image";
import Main from "./components/main/main";
import Header from "./components/header";
import Footer from "./components/footer";
import './profile.css';


export default function Home() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css" />
      </head>
      <body>
        <Header/>
        <Main/>
        <Footer/>
        <a href="" className="scrollup" id="scroll-up">
          <i className="ri-arrow-up-double-fill"></i>
        </a>
      </body>
    </html>
  );
}
