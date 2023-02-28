import { useEffect } from "react";
import styles from "./code-block.module.css";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export function CodeBlock({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={`${styles["code"]}`}>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
