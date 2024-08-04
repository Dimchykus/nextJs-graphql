import { getClient } from "@/lib/apollo";
import { DataStructure } from "@/types";
import { DocumentNode, OperationVariables, QueryOptions } from "@apollo/client";

const useServerQuery = async <T>(
  query: DocumentNode,
  params?: Omit<QueryOptions<OperationVariables, T>, "query">
) => {
  const data: DataStructure<T> = await getClient().query({
    query,
    ...params,
  });

  return data;
};

export default useServerQuery;
