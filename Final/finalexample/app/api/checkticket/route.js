import { getWinningNumbers } from "../../../lib/lottery";

const prizesByMatchCount = {
        0: "You Lose",
        1: "$5",
        2: "$10",
        3: "$15",
        4: "$100",
        5: "$100000",
};

function isValidTicket(numbers) {
        if (!Array.isArray(numbers) || numbers.length !== 5) {
                return false;
        }

        const unique = new Set(numbers);
        if (unique.size !== 5) {
                return false;
        }

        return numbers.every((n) => Number.isInteger(n) && n >= 1 && n <= 15);
}

export async function POST(request) {
        const winningNumbers = getWinningNumbers();
        let body;

        try {
                body = await request.json();
        } catch {
                return Response.json(
                        { error: "Request body must be valid JSON." },
                        { status: 400 },
                );
        }

        const { numbers } = body ?? {};

        if (!isValidTicket(numbers)) {
                return Response.json(
                        {
                                error:
                                        "numbers must be an array of 5 unique integers between 1 and 15.",
                        },
                        { status: 400 },
                );
        }

        const matches = numbers.filter((n) => winningNumbers.includes(n)).length;
        const prize = prizesByMatchCount[matches];

        return Response.json({ matches, prize });
}