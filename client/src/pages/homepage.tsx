import React from "react";
import { Navbar } from "../components/navbar/navbar";
import { MovieCard } from "../components/movieCard/movieCard";
import { Container } from "../components/movieCard/movieCardStyles";
const movies = [
  {
    url: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
    image_url:
      "	https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-624,ow-40:ote-OTUlICAxMmsgdm90ZXM%3D,ots-40,otc-FFFFFF,oy-614,ox-80:q-80/et00312373-pbuugrzltv-portrait.jpg",
    title: "James",
  },
  {
    url: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
    image_url:
      "	https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-624,ow-40:ote-OTUlICAxMmsgdm90ZXM%3D,ots-40,otc-FFFFFF,oy-614,ox-80:q-80/et00312373-pbuugrzltv-portrait.jpg",
    title: "James",
  },
  {
    url: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
    image_url:
      "	https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-624,ow-40:ote-OTUlICAxMmsgdm90ZXM%3D,ots-40,otc-FFFFFF,oy-614,ox-80:q-80/et00312373-pbuugrzltv-portrait.jpg",
    title: "James",
  },
  {
    url: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
    image_url:
      "	https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-624,ow-40:ote-OTUlICAxMmsgdm90ZXM%3D,ots-40,otc-FFFFFF,oy-614,ox-80:q-80/et00312373-pbuugrzltv-portrait.jpg",
    title: "James",
  },
  {
    url: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
    image_url:
      "	https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-624,ow-40:ote-OTUlICAxMmsgdm90ZXM%3D,ots-40,otc-FFFFFF,oy-614,ox-80:q-80/et00312373-pbuugrzltv-portrait.jpg",
    title: "James",
  },
  {
    url: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
    image_url:
      "	https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-624,ow-40:ote-OTUlICAxMmsgdm90ZXM%3D,ots-40,otc-FFFFFF,oy-614,ox-80:q-80/et00312373-pbuugrzltv-portrait.jpg",
    title: "James",
  },
  {
    url: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
    image_url:
      "	https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-624,ow-40:ote-OTUlICAxMmsgdm90ZXM%3D,ots-40,otc-FFFFFF,oy-614,ox-80:q-80/et00312373-pbuugrzltv-portrait.jpg",
    title: "James",
  },
  {
    url: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
    image_url:
      "	https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-624,ow-40:ote-OTUlICAxMmsgdm90ZXM%3D,ots-40,otc-FFFFFF,oy-614,ox-80:q-80/et00312373-pbuugrzltv-portrait.jpg",
    title: "James",
  },
  {
    url: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
    image_url:
      "	https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-624,ow-40:ote-OTUlICAxMmsgdm90ZXM%3D,ots-40,otc-FFFFFF,oy-614,ox-80:q-80/et00312373-pbuugrzltv-portrait.jpg",
    title: "James",
  },
  {
    url: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
    image_url:
      "	https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-624,ow-40:ote-OTUlICAxMmsgdm90ZXM%3D,ots-40,otc-FFFFFF,oy-614,ox-80:q-80/et00312373-pbuugrzltv-portrait.jpg",
    title: "James",
  },
];
const Homepage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="movies_cont">
          <div style={{ display: "flex" }}>
            <div
              style={{
                margin: "0px auto 0px 0px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  wordBreak: "break-word",
                  color: "rgb(51,51,51)",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "1.17",
                  fontFamily: "Roboto",
                }}
              >
                Recommended movies
              </div>
            </div>
            <div className="see-all">See All ›</div>
          </div>
          <div className="movies_wrapper">
            {movies.map((el) => (
              <MovieCard movie={el} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export { Homepage };
