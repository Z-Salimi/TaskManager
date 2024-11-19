import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

export default function Home() {
  return (
    <section className="w-full container max-w-[1600px] mx-auto">
      <header className="p-6 flex justify-between items-center w-full bg-[#624793]">
        <div>
          <h2 className="font-bold text-xl text-violet-200">Task-Manager</h2>
        </div>
        <div>
          <Link href={"/login"}>
            <button className="bg-purple-300 px-6 py-1 rounded-lg text-purple-900 font-semibold hover:bg-purple-400">
              Login
            </button>
          </Link>
        </div>
      </header>

      <div className="w-full bg-[#7748cc] p-8 md:px-28 space-y-8">
        <img src="Screenshot1.png" className="w-[200px]" alt="" />
        <div className="flex justify-between items-center gap-6 flex-wrap">
          <div className="md:pt-44">
            <h2 className="text-white text-3xl md:text-7xl font-semibold">
              To-do List <br /> Template
            </h2>
          </div>
          <div>
            <img src="Screenshot2.png" className="w-[600px]" alt="" />
          </div>
        </div>
        <p className="text-white text-2xl pb-8 pr-10 md:pr-72">
          Enhance individual and team work operations by effectively organizing,
          prioritizing, and optimizing tasks using our To-Do List Template.
        </p>
        <Link href={"/tasks"}>
          <button className="px-16 py-2 bg-yellow-500 rounded-lg text-lg font-semibold flex gap-2 justify-center items-center text-[#491f96] hover:bg-yellow-600">
            Tasks <FiLogIn />
          </button>
        </Link>
      </div>

      <footer className="py-3 bg-violet-950 text-blue-100">
        <div className="space-y-5">
          <ul className="flex justify-center items-center flex-col md:flex-row gap-x-10 gap-y-3">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
          <p className="text-center text-blue-300">
            © 2024 Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
