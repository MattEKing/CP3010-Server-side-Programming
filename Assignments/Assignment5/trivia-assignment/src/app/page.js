import Image from "next/image";

export default async function Home() {

    let response = await fetch('https://rickandmortyapi.com/api/character/1');
    let data = await response.json();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Rick and Morty Character Database
          </h1>
          <img src={data.image}
          width={200}
          height={40}
          ></img>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Welcome the Rick and Morty Character Database<br/>
            Check out some of the characters!
          </p>
        </div>
      </main>
    </div>
  );
}
