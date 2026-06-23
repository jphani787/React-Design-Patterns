import { useMemo, useState } from "react";
import { useSearchJobsQuery } from "./queries.generated";

const useSearchJobs = () => {
  const [search, setSearch] = useState("");

  const { data, loading } = useSearchJobsQuery({
    variables: {
      input: {
        query: search
      }
    }
  });

  const results = useMemo(() => {
    return data?.searchJobs || []
  }, [data?.searchJobs]);
  return { search, setSearch, results, isLoading: loading };
};

export default useSearchJobs;
