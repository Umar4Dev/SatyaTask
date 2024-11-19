import { ClipLoader } from "react-spinners";

export default function LazyLoading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "5rem auto",
        textAlign: "center",
      }}
    >
      <ClipLoader color="#094bf1" />
    </div>
  );
}
