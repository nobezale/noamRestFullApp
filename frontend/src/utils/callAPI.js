import axios from "axios";
export default async function callAPI(method, url, requestParams, typeRequest) {
  let isFinishedAPI = false;
  let isFinishedSuccessfuly = false;
  let apiData = null;
  let serverError = null;
  let status = 404;

  const fetchData = async () => {
    if (url !== "" && typeRequest === "form") {
      try {
        const resp = await axios({
          method: method,
          url: url,
          data: requestParams,
          headers: { "Content-Type": "multipart/form-data" },
        });
        const data = await resp?.data;
        if (resp !== null) {
          status = resp.status;
        }
        apiData = data;
        isFinishedAPI = true;
        isFinishedSuccessfuly = true;
      } catch (error) {
        serverError = error;
        isFinishedAPI = true;
        isFinishedSuccessfuly = false;
      }
    } else if (url !== "" && typeRequest === "json" && method === "post") {
      try {
        const resp = await axios.post(url, requestParams, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        });
        const data = await resp?.data;
        if (resp !== null) {
          status = resp.status;
        }

        apiData = data;
        isFinishedAPI = true;
        isFinishedSuccessfuly = true;
      } catch (error) {
        serverError = error;
        isFinishedAPI = true;
        isFinishedSuccessfuly = false;
      }
    } else if (url !== "" && method === "get") {
      try {
        const resp = await axios.get(url, {
          requestParams,
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        });
        const data = await resp?.data;
        if (resp !== null) {
          status = resp.status;
        }

        apiData = data;
        isFinishedAPI = true;
        isFinishedSuccessfuly = true;
      } catch (error) {
        serverError = error;
        isFinishedAPI = true;
        isFinishedSuccessfuly = false;
      }
    }
  };

  await fetchData();

  return { apiData, isFinishedSuccessfuly, serverError };
}
