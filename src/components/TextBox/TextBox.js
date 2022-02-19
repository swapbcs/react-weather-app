export default function TextBox({ getWeatherData }) {
  const processCity = (e) => {
    const city = document.getElementById("cityNameTxt").value;
    if (e.code === "Enter") {
      getWeatherData(city);
    }
  };

  return (
    <>
      <input
        type="text"
        style={{
          width: "30%",
          border: "none",
          textAlign: "center",
          padding: "1rem",
          borderRadius: "1rem",
        }}
        placeholder="Enter City name"
        id="cityNameTxt"
        onKeyUp={processCity}
        onBlur={() =>
          getWeatherData(document.getElementById("cityNameTxt").value)
        }
      ></input>
    </>
  );
}
