import { useEffect, useState, Fragment } from "react";
import { apiRequest } from "../../utils/api-request";
import { dataURL } from "../../utils/apiURL";
import styles from "./styles/snippet-redactor.module.css";
export function SnippetRedactor() {
  const [snippetData, setSnippetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getSnippetData() {
    setIsLoading(true);
    let data;
    try {
      data = await apiRequest(`${dataURL}/snippets`);
      setSnippetData([...data.snippets]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getSnippetData();
  }, []);

  return !isLoading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-8)",
          paddingBlock: "var(--s-8)",
        }}
      >
        {snippetData.map((snippet) => {
          return (
            <Fragment key={snippet.ID}>
              <li
                style={{
                  fontFamily: "'Comfortaa', Arial, Helvetica, Sans-serif",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  textAlign: "center",
                  background: "var(--bg-grey)",
                  borderTop: "solid 2px var(--bg-primary)",
                  width: "1280px",
                }}
              >
                <p style={{ padding: "var(--s-4)" }}> {snippet.title}</p>
                <p style={{ padding: "var(--s-4)" }}>{snippet.code}</p>
                <p style={{ padding: "var(--s-4)" }}>
                  {snippet.platformType === 1 ? "Solana" : "Hyperledger Fabric"}
                </p>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className={`${styles["snippet-redactor_wrapper"]}`}>
      <div className={`${styles["loader"]}`}></div>
    </div>
  );
}
