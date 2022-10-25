import { useState } from "react";
import axios from "axios";
const useRequestApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [request, setRequest] = useState();
  const getRequest = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://glacial-badlands-90755.herokuapp.com/api/Request/");
      console.log(response)
      if (response.status !== 200) {
        throw new Error(`Something went wrong!: ${response.status}`);
      }
      const data = await response.data.json();
      if (data) setRequest(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, error, request, getRequest };
};
export  default useRequestApi;
white_check_mark
eyes
raised_hands












