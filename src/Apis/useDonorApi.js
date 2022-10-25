import { useState } from "react";
import axios from "axios";
const useDonorsApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [donors, setDonors] = useState();
  const getDonors = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://glacial-badlands-90755.herokuapp.com/api/Donor");
      console.log(response)
      if (response.status !== 200) {
        throw new Error(`Something went wrong!: ${response.status}`);
      }
      const data = await response.data.json();
      if (data) setDonors(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, error, donors, getDonors };
};
export { useDonorsApi };












