import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../../src/Components/Footer/Footer";

import "./globals.css";
// import Home from "./page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>

       <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
