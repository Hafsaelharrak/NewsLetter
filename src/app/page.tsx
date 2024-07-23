"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email submitted:", email);

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Email submitted:", email);

        console.log("Email sent successfully");
        setEmail("");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between  p-24 bg-orange-100 bg-cover bg-center"
      style={{ backgroundImage: "url(/mosque.png)" }}
    >
      <div
        className=" items-center justify-between text-center font-mono bg-white p-10 rounded-xl bg-opacity-80"
        dir="rtl"
      >
        <h1 className=" text-neutral-800  text-2xl">
          SIGN UP NOW AND DONATE TO HELP
        </h1>
        <p className="text-neutral-500 pt-8 pb-8">
          {" "}
          Support our mosque by making a donation. Your generosity enables us to
          maintain our facilities and offer various community services.
          Together, we can continue to serve our community with compassion and
          care.
        </p>
        <form
          className="flex flex-col justify-between p-10 text-lg border-2 border-orange-100"
          onSubmit={handleSubmit}
        >
          <label className=" text-neutral-800 text-xl ">
            <i>Email</i>
          </label>
          <br></br>
          <input
            type="email"
            className=" text-neutral-500 bg-orange-50 pt-2 pb-2 text-center rounded-xl"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <div className="flex justify-end">
            <button
              type="submit"
              className=" text-neutral-800  bg-orange-100 rounded-xl border-2 border-double border-stone-800 w-24"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
