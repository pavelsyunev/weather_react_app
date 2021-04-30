import logingGif from "../assets/Lightning.gif";

const Spinner = () => {
  return (
    <div className="h-full bg-white flex flex-col mx-auto space-y-10 justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white w-96 shadow-xl rounded p-5">
        <img src={logingGif} alt="loading spinner" />
        <p>...we are loading weather</p>
      </div>
    </div>
  );
};

export default Spinner;
