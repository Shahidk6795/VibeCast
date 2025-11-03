// src/data/songs.js
const modules = import.meta.glob("../assets/music/*.mp3", { eager: true });

const songs = Object.keys(modules).map((path) => {
  const fileName = path.split("/").pop();
  const title = decodeURIComponent(fileName.replace(".mp3", ""));
  return {
    title,
    file: modules[path].default,
  };
});

export default songs;
