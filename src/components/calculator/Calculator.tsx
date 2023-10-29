import React, { useState, useReducer, useEffect } from "react";
import Buttons from "./Buttons";
import { temporaryEnterReducer } from "../../reducer/temporaryEnter";

const operator = ["/", "+", "-", "x", "*"];

const Calculator = () => {
  const [result, setResult] = useState<string>("");
  const [isNumberExceed, setIsNumberExceed] = useState<boolean>(false);
  const [temporaryEnter, temporaryEnterDispatch] = useReducer(
    temporaryEnterReducer,
    "0"
  );

  useEffect(() => {
    let id: any;
    if (temporaryEnter.length === 15) {
      setIsNumberExceed(true);

      id = setTimeout(() => {
        setIsNumberExceed(false);
      }, 1000);
    }

    return () => {
      clearTimeout(id);
    };
  }, [temporaryEnter]);

  const firstChar = temporaryEnter.charAt(0);
  const lastChar = temporaryEnter.charAt(temporaryEnter.length - 1);

  return (
    <div className="border-2 flex flex-col items-end border-x-zinc-700 bg-black p-1">
      <div className="w-64 min-h-28px text-right break-all text-yellow-custom font-digital text-xl">
        {result}
      </div>
      <div className="w-60 h-9 text-end text-white font-digital text-3xl overflow-hidden">
        {isNumberExceed ? <p>DIGIT LIMIT MET</p> : <p>{temporaryEnter}</p>}
      </div>
      <div className="w-full flex-1">
        <div className="h-full w-full grid grid-cols-4 grid-rows-4">
          <Buttons
            size="horizontal"
            color="red"
            title="AC"
            onClick={() => {
              setResult("");
              temporaryEnterDispatch({ type: "AC" });
            }}
          />
          <Buttons
            color="gray"
            title="/"
            onClick={() => {
              if (isNumberExceed === false) {
                if (result.includes("=")) {
                  setResult(temporaryEnter + "/");
                  temporaryEnterDispatch({ type: "/" });
                } else if (operator.includes(lastChar)) {
                  setResult(result.slice(0, -1) + "/");
                  temporaryEnterDispatch({ type: "/" });
                } else if (lastChar !== "." && temporaryEnter !== "0") {
                  setResult((prev) => prev + "/");
                  temporaryEnterDispatch({ type: "/" });
                }
              }
            }}
          />
          <Buttons
            color="gray"
            title="x"
            onClick={() => {
              if (isNumberExceed === false) {
                if (result.includes("=")) {
                  setResult(temporaryEnter + "*");
                  temporaryEnterDispatch({ type: "x" });
                } else if (operator.includes(lastChar)) {
                  setResult(result.slice(0, -1) + "*");
                  temporaryEnterDispatch({ type: "x" });
                } else if (lastChar !== "." && temporaryEnter !== "0") {
                  setResult((prev) => prev + "*");
                  temporaryEnterDispatch({ type: "x" });
                }
              }
            }}
          />
          <Buttons
            title="7"
            onClick={() => {
              if (result.includes("=")) {
                setResult("7");
                temporaryEnterDispatch({ type: "7", payload: "=" });
              } else if (temporaryEnter.length !== 15) {
                setResult((prev) => prev + "7");
                temporaryEnterDispatch({ type: "7" });
              }
            }}
          />
          <Buttons
            title="8"
            onClick={() => {
              if (result.includes("=")) {
                setResult("8");
                temporaryEnterDispatch({ type: "8", payload: "=" });
              } else if (temporaryEnter.length !== 15) {
                setResult((prev) => prev + "8");
                temporaryEnterDispatch({ type: "8" });
              }
            }}
          />
          <Buttons
            title="9"
            onClick={() => {
              if (result.includes("=")) {
                setResult("9");
                temporaryEnterDispatch({ type: "9", payload: "=" });
              } else if (temporaryEnter.length !== 15) {
                setResult((prev) => prev + "9");
                temporaryEnterDispatch({ type: "9" });
              }
            }}
          />
          <Buttons
            color="gray"
            title="-"
            onClick={() => {
              if (isNumberExceed === false) {
                if (result.includes("=")) {
                  setResult(temporaryEnter + "-");
                  temporaryEnterDispatch({ type: "-" });
                } else if (operator.includes(lastChar)) {
                  setResult(result.slice(0, -1) + "-");
                  temporaryEnterDispatch({ type: "-" });
                } else if (lastChar !== "." && temporaryEnter !== "0") {
                  setResult((prev) => prev + "-");
                  temporaryEnterDispatch({ type: "-" });
                }
              }
            }}
          />
          <Buttons
            title="4"
            onClick={() => {
              if (result.includes("=")) {
                setResult("4");
                temporaryEnterDispatch({ type: "4", payload: "=" });
              } else if (temporaryEnter.length !== 15) {
                setResult((prev) => prev + "4");
                temporaryEnterDispatch({ type: "4" });
              }
            }}
          />
          <Buttons
            title="5"
            onClick={() => {
              if (result.includes("=")) {
                setResult("5");
                temporaryEnterDispatch({ type: "5", payload: "=" });
              } else if (temporaryEnter.length !== 15) {
                setResult((prev) => prev + "5");
                temporaryEnterDispatch({ type: "5" });
              }
            }}
          />
          <Buttons
            title="6"
            onClick={() => {
              if (result.includes("=")) {
                setResult("6");
                temporaryEnterDispatch({ type: "6", payload: "=" });
              } else if (temporaryEnter.length !== 15) {
                setResult((prev) => prev + "6");
                temporaryEnterDispatch({ type: "6" });
              }
            }}
          />
          <Buttons
            color="gray"
            title="+"
            onClick={() => {
              if (isNumberExceed === false) {
                if (result.includes("=")) {
                  setResult(temporaryEnter + "+");
                  temporaryEnterDispatch({ type: "+" });
                } else if (operator.includes(lastChar)) {
                  setResult(result.slice(0, -1) + "+");
                  temporaryEnterDispatch({ type: "+" });
                } else if (lastChar !== "." && temporaryEnter !== "0") {
                  setResult((prev) => prev + "+");
                  temporaryEnterDispatch({ type: "+" });
                }
              }
            }}
          />
          <Buttons
            title="1"
            onClick={() => {
              if (result.includes("=")) {
                setResult("1");
                temporaryEnterDispatch({ type: "1", payload: "=" });
              } else if (temporaryEnter.length !== 15) {
                setResult((prev) => prev + "1");
                temporaryEnterDispatch({ type: "1" });
              }
            }}
          />
          <Buttons
            title="2"
            onClick={() => {
              if (result.includes("=")) {
                setResult("2");
                temporaryEnterDispatch({ type: "2", payload: "=" });
              } else if (temporaryEnter.length !== 15) {
                setResult((prev) => prev + "2");
                temporaryEnterDispatch({ type: "2" });
              }
            }}
          />
          <Buttons
            title="3"
            onClick={() => {
              if (result.includes("=")) {
                setResult("3");
                temporaryEnterDispatch({ type: "3", payload: "=" });
              } else if (temporaryEnter.length !== 15) {
                setResult((prev) => prev + "3");
                temporaryEnterDispatch({ type: "3" });
              }
            }}
          />
          <Buttons
            size="vertical"
            color="blue"
            title="="
            onClick={() => {
              if (result.includes("=")) {
                console;
              } else if (!operator.includes(lastChar) && lastChar !== ".") {
                setResult((prev) => prev + "=");
                temporaryEnterDispatch({ type: "=", payload: result });
              }
            }}
          />
          <Buttons
            size="horizontal"
            title="0"
            onClick={() => {
              if (temporaryEnter.length !== 15) {
                if (result.includes("=")) {
                  setResult("");
                  temporaryEnterDispatch({ type: "0", payload: "=" });
                } else if (
                  (firstChar === "0" && temporaryEnter.includes(".")) ||
                  operator.includes(firstChar)
                ) {
                  setResult((prev) => prev + "0");
                  temporaryEnterDispatch({ type: "0" });
                } else if (firstChar !== "0") {
                  setResult((prev) => prev + "0");
                  temporaryEnterDispatch({ type: "0" });
                }
              }
            }}
          />
          <Buttons
            title="."
            onClick={() => {
              if (
                !temporaryEnter.includes(".") &&
                !operator.includes(lastChar) &&
                temporaryEnter.length !== 14 &&
                !result.includes("=")
              ) {
                if (firstChar !== "0") {
                  setResult((prev) => prev + ".");
                  temporaryEnterDispatch({ type: "." });
                } else if (firstChar === "0" && result.length > 2) {
                  setResult((prev) => prev + ".");
                  temporaryEnterDispatch({ type: "." });
                } else {
                  setResult("0.");
                  temporaryEnterDispatch({ type: "." });
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
