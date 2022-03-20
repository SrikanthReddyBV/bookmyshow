import { Navbar } from "../components/navbar/navbar";
import { Mc } from "../components/mc/mc";

const movies = [
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },

  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
];

const events = [
  {
    title: "Sunburn Arena ft. ALAN WALKER - Bengaluru  ",
    genre: "Venue To Be Announced : Bengaluru",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323854-xpamqetghp-portrait.jpg",
    link: "https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00323854",
  },
  {
    title: "Sunburn Arena ft. ALAN WALKER - Bengaluru  ",
    genre: "Venue To Be Announced : Bengaluru",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323854-xpamqetghp-portrait.jpg",
    link: "https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00323854",
  },
  {
    title: "Sunburn Arena ft. ALAN WALKER - Bengaluru  ",
    genre: "Venue To Be Announced : Bengaluru",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323854-xpamqetghp-portrait.jpg",
    link: "https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00323854",
  },
  {
    title: "Sunburn Arena ft. ALAN WALKER - Bengaluru  ",
    genre: "Venue To Be Announced : Bengaluru",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323854-xpamqetghp-portrait.jpg",
    link: "https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00323854",
  },
  {
    title: "Sunburn Arena ft. ALAN WALKER - Bengaluru  ",
    genre: "Venue To Be Announced : Bengaluru",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323854-xpamqetghp-portrait.jpg",
    link: "https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00323854",
  },
  {
    title: "Sunburn Arena ft. ALAN WALKER - Bengaluru  ",
    genre: "Venue To Be Announced : Bengaluru",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323854-xpamqetghp-portrait.jpg",
    link: "https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00323854",
  },
  {
    title: "Sunburn Arena ft. ALAN WALKER - Bengaluru  ",
    genre: "Venue To Be Announced : Bengaluru",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323854-xpamqetghp-portrait.jpg",
    link: "https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00323854",
  },
  {
    title: "Sunburn Arena ft. ALAN WALKER - Bengaluru  ",
    genre: "Venue To Be Announced : Bengaluru",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323854-xpamqetghp-portrait.jpg",
    link: "https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00323854",
  },
  {
    title: "Sunburn Arena ft. ALAN WALKER - Bengaluru  ",
    genre: "Venue To Be Announced : Bengaluru",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323854-xpamqetghp-portrait.jpg",
    link: "https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00323854",
  },
  {
    title: "Sunburn Arena ft. ALAN WALKER - Bengaluru  ",
    genre: "Venue To Be Announced : Bengaluru",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323854-xpamqetghp-portrait.jpg",
    link: "https://in.bookmyshow.com/events/sunburn-arena-ft-alan-walker-bengaluru/ET00323854",
  },
];
const Homepage = () => {
  return (
    <>
      <Navbar />
      <Mc movies={movies} header="Recomended Movies" />
      <Mc header="Popular Events" movies={events} />
    </>
  );
};

export { Homepage };
