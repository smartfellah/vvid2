import { useEffect, useState, Fragment } from "react";
import { apiRequest } from "../../utils/api-request";
import { dataURL } from "../../utils/apiURL";
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
    <div>
      <ul>
        {snippetData.map((snippet) => {
          return (
            <Fragment key={snippet.ID}>
              <li>{snippet.title}</li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  ) : null;
}
