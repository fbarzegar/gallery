import { useEffect, useState } from "react";

export default function Category({
  setImage,
  setLoading,
}: {
  setImage: (x: any) => void;
  setLoading: (x: any) => void;
}) {
  const [allCategories, setAllCategories] = useState([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://frontend-gallery.darkube.app/api/categories")
      .then((res) => res.json())
      .then((x) => {
        setAllCategories(x);
        setLoading(false);
      });
  }, []);

  const handleClick = (category: string) => {
    setLoading(true);
    fetch(
      `https://frontend-gallery.darkube.app/api/categories/${category}/photos`
    )
      .then((res) => res.json())
      .then((x) => {
        setImage(x);
        setLoading(false);
      })
      .then((x) => setActive(category));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <h5> Category :</h5>
      {allCategories?.map((i, idx) => {
        return (
          <button
            onClick={() => handleClick(i)}
            key={idx}
            style={{
              padding: 10,
              margin: 5,
              background: active === i ? "#2980B9" : "#D6EAF8",
              color: active === i ? "white" : "black",
              border: 0,
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            {i}
          </button>
        );
      })}
    </div>
  );
}
