"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [randomNum, setRandomNum] = useState(0);
  function generateExponentialRandom(lambda: number) {
    if (lambda <= 0) {
      throw new Error("Параметр lambda должен быть больше 0");
    }

    const U = Math.random();

    setRandomNum(-Math.log(1 - U) / lambda);
  }

  const lambda = 1;
  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl">Генерация случайного числа</h1>
      <Button
        className="text-xl p-5"
        onClick={() => generateExponentialRandom(lambda)}
      >
        {randomNum > 0 ? "Сгенерировать еще" : "Сгенерировать"}
      </Button>
      {randomNum > 0 && (
        <div className="flex gap-1 text-lg">
          <p>Результат:</p>
          <span>{randomNum}</span>
        </div>
      )}
    </div>
  );
}
