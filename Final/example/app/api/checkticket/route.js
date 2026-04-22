function generateWinningNumbers() {
    const pool = Array.from({ length: 15 }, (_, i) => i + 1);

    for (let i = pool.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool.slice(0, 5);
}

const winningNumbers = generateWinningNumbers();
console.log("Eric's Lottery winning sequence:", winningNumbers);

const prizesByMatchCount = {
    0: "You Lose",
    1: "$5",
    2: "$10",
    3: "$15",
    4: "$100",
    5: "$100000",
};

function isValidTicket(ticketNumbers) {
    if (!Array.isArray(ticketNumbers) || ticketNumbers.length !== 5) {
        return false;
    }

    const unique = new Set(ticketNumbers);
    if (unique.size !== 5) {
        return false;
    }

    return ticketNumbers.every(
        (n) => Number.isInteger(n) && n >= 1 && n <= 15,
    );
}

export async function POST(request) {
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

    return Response.json({ prize, matches });
}