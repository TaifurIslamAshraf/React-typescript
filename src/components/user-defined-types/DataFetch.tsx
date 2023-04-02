type dataFetchProps = {
  status: "success" | "error" | "loding";
};

const DataFetch = ({ status }: dataFetchProps) => {
  if (status === "loding") {
    return <h2>Data is loding...</h2>;
  } else if (status === "error") {
    return <h2>Error. data could not found</h2>;
  }

  return (
    <div>
      <h2>Data fetch successfully</h2>
    </div>
  );
};

export default DataFetch;
