"use client";
import { Controller, useForm } from "react-hook-form";
import { Input } from "./input";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/validation/login.validation";
import Link from "next/link";
import client from "@/apis/client";
import { redirect } from "next/navigation";

interface IForm {
  userName: string;
  password: string;
}
interface IFormProps {
  editValues?: IForm;
}

export const LoginForm: React.FC<IFormProps> = ({ editValues }) => {
  const formField = useForm<IForm>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
  });
  const submit = (data: IForm) => console.log(data);

  const [formData, setFormData] = useState<IForm | null>(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let success= false;

  const handleLogin = async () => {
    try {
      const response = await client.post("/login", { username, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      success= true;
    } catch (error) {
      console.error("Login failed", error);
      success= false;
    }finally{
        if(success) redirect("/tasks");
    }
  };

  React.useEffect(() => {
    if (!editValues) return;
    formField.reset(editValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editValues]);

  return (
    <section className="bg-violet-200 flex flex-col justify-center items-center px-6 py-10 w-full md:w-[40vw] rounded-lg">
      <div className=" flex flex-col gap-y-10">
        <h2 className="font-bold text-4xl text-violet-900">Login</h2>
      </div>
      <div className="w-full ">
        <form
          onSubmit={formField.handleSubmit(handleLogin)}
          className="w-full flex flex-col gap-y-10 mt-20"
        >
          <Controller
            control={formField.control}
            name="userName"
            render={({ field, fieldState }) => (
              <Input
                type="text"
                label="userName:"
                placeholder="userName..."
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={formField.control}
            name="password"
            render={({ field, fieldState }) => (
              <Input
                type="password"
                label="password:"
                placeholder="password..."
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />

          <Link href={"/tasks"}>
            <button
              className="bg-violet-700 hover:bg-violet-800  w-full mt-10 text-white font-semibold py-2 rounded-xl"
              type="submit"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};
