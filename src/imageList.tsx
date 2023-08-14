import { useEffect, useState } from "react";
import { imageType } from "./api/image";
import Category from "./category";
import Search from "./search";

export default function ImageList() {
  const [images, setImages] = useState<imageType[]>([]);
  const [loading, setLoading] = useState(false);

  const sleep = (second: number) =>
    new Promise((result) => setTimeout(() => result(true), second * 1000));

  useEffect(() => {
    setLoading(true);
    sleep(3);
    fetch("https://frontend-gallery.darkube.app/api/photos")
      .then((res) => res.json())
      .then((x) => {
        setImages(x);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Search setImage={setImages} setLoading={setLoading} />
      <Category setImage={setImages} setLoading={setLoading} />
      {loading ? (
        <h3> Loading ...</h3>
      ) : (
        <>
          <h3> Image Lists :</h3>
          {images?.length === 0 ? (
            <h4 style={{ color: "red", fontStyle: "oblique" }}>
              There are no items to show{" "}
            </h4>
          ) : (
            <div
              style={{
                width: "90%",
                display: "flex",
                justifyContent: "space-around",
                margin: "0 auto",
                flexWrap: "wrap",
              }}
            >
              {images?.map((i, idx) => {
                return (
                  <li
                    key={idx}
                    style={{
                      background: "#F0F0F0",
                      listStyle: "none",
                      margin: 2,
                      padding: 10,
                    }}
                  >
                    <img
                      src={i?.url}
                      alt={i?.alt}
                      width={300}
                      height={200}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </li>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
}
