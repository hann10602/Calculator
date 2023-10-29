import { Action } from "../types/types";

export const temporaryEnterReducer = (state: string, action: Action) => {
  const operator = ["/", "+", "-", "x", "*"];
  const firstChar = state.charAt(0);
  const lastChar = state.charAt(state.length - 1);
  switch (action.type) {
    case "AC":
      return (state = "0");
    case "/":
      if (lastChar !== ".") {
        state = "/";
      }
      return state;
    case "x":
      if (lastChar !== ".") {
        state = "x";
      }
      return state;
    case "-":
      if (lastChar !== ".") {
        state = "-";
      }
      return state;
    case "+":
      if (lastChar !== ".") {
        state = "+";
      }
      return state;
    case "1":
      if (
        (firstChar === "0" && !state.includes(".")) ||
        operator.includes(firstChar) ||
        action.payload === "="
      ) {
        state = "1";
      } else if (
        firstChar !== "0" ||
        (firstChar === "0" && state.includes("."))
      ) {
        state += "1";
      }
      return state;
    case "2":
      if (
        (firstChar === "0" && !state.includes(".")) ||
        operator.includes(firstChar) ||
        action.payload === "="
      ) {
        state = "2";
      } else if (
        firstChar !== "0" ||
        (firstChar === "0" && state.includes("."))
      ) {
        state += "2";
      }
      return state;
    case "3":
      if (
        (firstChar === "0" && !state.includes(".")) ||
        operator.includes(firstChar) ||
        action.payload === "="
      ) {
        state = "3";
      } else if (
        firstChar !== "0" ||
        (firstChar === "0" && state.includes("."))
      ) {
        state += "3";
      }
      return state;
    case "4":
      if (
        (firstChar === "0" && !state.includes(".")) ||
        operator.includes(firstChar) ||
        action.payload === "="
      ) {
        state = "4";
      } else if (
        firstChar !== "0" ||
        (firstChar === "0" && state.includes("."))
      ) {
        state += "4";
      }
      return state;
    case "5":
      if (
        (firstChar === "0" && !state.includes(".")) ||
        operator.includes(firstChar) ||
        action.payload === "="
      ) {
        state = "5";
      } else if (
        firstChar !== "0" ||
        (firstChar === "0" && state.includes("."))
      ) {
        state += "5";
      }
      return state;
    case "6":
      if (
        (firstChar === "0" && !state.includes(".")) ||
        operator.includes(firstChar) ||
        action.payload === "="
      ) {
        state = "6";
      } else if (
        firstChar !== "0" ||
        (firstChar === "0" && state.includes("."))
      ) {
        state += "6";
      }
      return state;
    case "7":
      if (
        (firstChar === "0" && !state.includes(".")) ||
        operator.includes(firstChar) ||
        action.payload === "="
      ) {
        state = "7";
      } else if (
        firstChar !== "0" ||
        (firstChar === "0" && state.includes("."))
      ) {
        state += "7";
      }
      return state;
    case "8":
      if (
        (firstChar === "0" && !state.includes(".")) ||
        operator.includes(firstChar) ||
        action.payload === "="
      ) {
        state = "8";
      } else if (
        firstChar !== "0" ||
        (firstChar === "0" && state.includes("."))
      ) {
        state += "8";
      }
      return state;
    case "9":
      if (
        (firstChar === "0" && !state.includes(".")) ||
        operator.includes(firstChar) ||
        action.payload === "="
      ) {
        state = "9";
      } else if (
        firstChar !== "0" ||
        (firstChar === "0" && state.includes("."))
      ) {
        state += "9";
      }
      return state;
    case "0":
      if (operator.includes(firstChar) || action.payload === "=") {
        state = "0";
      } else {
        state += "0";
      }
      return state;
    case ".":
      state += ".";
      return state;
    case "=":
      const result = action.payload;
      if (result === "" || result === "0") {
        state = "0";
      } else {
        const resultArr: string[] = [];
        let firstIndex = 0;
        result.split("").forEach((item, i) => {
          if (operator.includes(item)) {
            resultArr.push(result.slice(firstIndex, i));
            firstIndex = i + 1;
            resultArr.push(item);
          }
          if (result.length === i + 1) {
            resultArr.push(state);
          }
        });

        state = resultArr[0];
        resultArr.forEach((item, i) => {
          switch (item) {
            case "+":
              return (state = String(Number(state) + Number(resultArr[i + 1])));
            case "-":
              return (state = String(Number(state) - Number(resultArr[i + 1])));
            case "*":
              return (state = String(Number(state) * Number(resultArr[i + 1])));
            case "/":
              return (state = String(Number(state) / Number(resultArr[i + 1])));
          }
        });
      }

      if (/^\d*\.\d+$/.test(state)) {
        if (state.length - state.indexOf(".") - 1 > 8) {
          state = String(Number(state).toFixed(8));
        }
        if (state.indexOf(".") > 10) {
          return `${state.charAt(0)}E+${
            state.slice(0, state.indexOf(".")).length
          }`;
        } else {
          return state;
        }
      } else {
        if (state.length > 12) {
          return `${state.charAt(0)}E+${state.length}`;
        } else {
          return state;
        }
      }
  }
};
