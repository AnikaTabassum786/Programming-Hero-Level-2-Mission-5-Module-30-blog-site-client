
// export default async function SendMailClient() {
// return (
//     <>
//     Send Email !!!!
//     </>
// );
// }

"use client";

import { createMail } from "@/action/mail.action";
import { useState } from "react";


export default function SendMailClient() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    const res = await createMail({ subject, message });

    if (res?.error) {
      alert("Failed to send email ❌");
    } else {
      alert("Email sent successfully ✅");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col gap-3 max-w-md">
      <input
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="border p-2 rounded"
      />

      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={handleSend}
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
      >
        Send Email
      </button>
    </div>
  );
}