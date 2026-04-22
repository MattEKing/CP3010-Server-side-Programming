"use client";

import { useState } from "react";

export default function CheckTicketPage() {
  const [values, setValues] = useState(["", "", "", "", ""]);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function updateValue(index, nextValue) {
    const copy = [...values];
    copy[index] = nextValue;
    setValues(copy);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setResult("");

    const numbers = values.map((v) => Number(v));
    const hasInvalid = numbers.some((n) => !Number.isInteger(n) || n < 1 || n > 15);
    const uniqueCount = new Set(numbers).size;

    if (hasInvalid || uniqueCount !== 5) {
      setError("Enter 5 unique whole numbers between 1 and 15.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/checkticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numbers }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Unable to check ticket.");
        return;
      }

      setResult(`Prize: ${data.prize} (${data.matches} matches)`);
    } catch {
      setError("Network error while checking ticket.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 px-6 py-10 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-6 rounded-xl bg-white p-8 shadow-sm dark:bg-zinc-900">
        <h1 className="text-3xl font-semibold tracking-tight">Check ticket</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
            {values.map((value, index) => (
              <input
                key={index}
                type="number"
                min={1}
                max={15}
                value={value}
                onChange={(event) => updateValue(index, event.target.value)}
                className="rounded-md border border-zinc-300 px-3 py-2"
                placeholder={`#${index + 1}`}
                required
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-60"
          >
            {isLoading ? "Checking..." : "Check Ticket"}
          </button>
        </form>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {result ? <p className="text-sm font-medium text-green-700">{result}</p> : null}
      </main>
    </div>
  );
}
