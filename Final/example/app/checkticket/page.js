"use client";

import { useState } from "react";

export default function CheckTicketPage() {
    const [values, setValues] = useState(["", "", "", "", ""]);
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function updateValue(index, next) {
        const copy = [...values];
        copy[index] = next;
        setValues(copy);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setResult("");

        const numbers = values.map((v) => Number(v));
        const uniqueCount = new Set(numbers).size;
        const hasInvalid = numbers.some((n) => !Number.isInteger(n) || n < 1 || n > 15);

        if (uniqueCount !== 5 || hasInvalid) {
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
        <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl items-center justify-center px-6 py-10">
            <section className="w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h1 className="mb-4 text-2xl font-semibold">Check your ticket</h1>

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
                                placeholder={`#${index + 1}`}
                                className="rounded-md border border-zinc-300 px-3 py-2"
                                required
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-60"
                    >
                        {isLoading ? "Checking..." : "Check ticket"}
                    </button>
                </form>

                {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
                {result ? <p className="mt-4 text-sm font-medium text-green-700">{result}</p> : null}
            </section>
        </main>
    );
}