import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";
import App from "./app/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

//* -----------------------------------------------------------------------
//? 브라우저 환경에서는 접근하지 못하지만 리액트를 사용하면 노드JS 개발환경에 접근할 수 있다

// client script
// process 객체 ❌

// server script
// process 객체 ⭕️

// console.log(process.env.NODE_ENV.includes("development")); //true

let isDevelopment = process.env.NODE_ENV.includes("development");
let isProduction = !isDevelopment;

// React 애플리케이션의 성능을 향상시키는 방법 중 하나가 code splitting
// code splitting의 핵심기술이 동적 불러오기 (dynamic import)

if (isProduction) {
  import("./reportWebVitals").then(({ default: reportWebVitals }) => {
    reportWebVitals(console.log);
  });
}
