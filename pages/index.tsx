import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      TEMPLATE STARTER PROJECT
    </div>
  );
};

export default Home;
