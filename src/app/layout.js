import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "@/components/CartProvider";
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position='top-right'/>
        <CartProvider id='products'>
         
        <Navbar/>
        
        {children}
        </CartProvider>
    </body>
    </html>
  );
}
