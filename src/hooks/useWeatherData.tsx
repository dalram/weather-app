import { useCallback, useState } from "react";

export const useWeatherData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchIssues = useCallback(async (city: string) => {
    setIsLoading(true);
    console.log("gaunamas miestas:", city);

    try {
      const response = await fetch(
        `https://api.github.com/repos/${accountName}/${accountRepository}/issues`
      );
      const issues = await response.json();
      if (issues.message === "Not Found") {
        setIssuesData([]);
      } else {
        setIssuesData(issues.slice(0, 250));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsUrlProvided(true);
    }
  }, []);

  return { fetchIssues, isLoading };
};
