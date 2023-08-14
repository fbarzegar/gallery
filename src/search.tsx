import { useState } from "react";

export default function Search({
  setImage,
  setLoading,
}: {
  setImage: (x: any) => void;
  setLoading: (x: any) => void;
}) {
  const [text, setText] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (text !== "") {
      setLoading(true);
      fetch(`https://frontend-gallery.darkube.app/api/photos?search=${text}`)
        .then((res) => res.json())
        .then((x) => setImage(x));
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h5 style={{ marginRight: 5 }}>Search With Text : </h5>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search Text"
          style={{ padding: 8, width: 300 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          style={{
            padding: 10,
            margin: 5,
            background: "#2980B9",
            color: "white",
            border: 0,
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
