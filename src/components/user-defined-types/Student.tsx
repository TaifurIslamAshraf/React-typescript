type StudentProps = {
  students: {
    name: string;
    age: number;
    isRegisterd: boolean;
    lang: string[];
  }[];
};

const Student = ({ students }: StudentProps) => {
  return (
    <div>
      <h2>Student Details</h2>
      <br />
      {students?.map((value, index) => {
        return (
          <article key={index}>
            <h3>{value.name}</h3>
            <h4>{value.age}</h4>
            {value.isRegisterd ? (
              <h4>Students is reginsterd</h4>
            ) : (
              <h4>Students is not registerd</h4>
            )}
            <h4>
              {value.lang.map((value, index) => {
                return <span key={index + 1}>{value} </span>;
              })}
            </h4>
          </article>
        );
      })}
    </div>
  );
};

export default Student;
