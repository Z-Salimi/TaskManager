"use client";
import client from "@/apis/client";
import { LoginForm } from "@/components/loginForm";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let success = false;
  const handleLogin = async () => {
    try {
      const response = await client.post("/login", { username, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      success = true;
    } catch (error) {
      success = false;
      console.error("Login failed", error);
    } finally {
      if (success) {
        redirect("/tasks");
      }
    }
  };

  return (
    <section className="w-full px-4 h-screen bg-violet-300 flex justify-center items-center">
      {/* <div className="w-[40vw] h-[50vh] shadow-2xl rounded-lg bg-violet-200 p-8 flex flex-col items-center gap-8">
        <h1 className="text-2xl text-violet-900 font-bold">Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Login</button>
      </div> */}
      <LoginForm />
    </section>
  );
};

export default LoginPage;
