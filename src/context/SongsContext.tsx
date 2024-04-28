// krok 1 - tworzenie typu kontekstu

import { createContext, useState } from "react";
import { defaultSongs } from "./data";

type Song = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  album: string;
};

type SongsContextType = {
  songs: Song[];
  favSongs: Song[];
  addToFav: (song: Song) => void;
};

// krok 2 - tworzymy context na bazie typu

export const SongsContext = createContext<SongsContextType>(
  {} as SongsContextType
);

// krok 3 - tworzenie naszego providera z propsami

type Props = {
  children: JSX.Element;
};

export const SongsContextProvider = ({ children }: Props) => {
  const [songs, setSongs] = useState<Song[]>(defaultSongs);
  const [favSongs, setFavSongs] = useState<Song[]>([]);

  const addToFav = (song: Song) => {
    // mozna dodac sprawdzanie czy piosenka sie juz tam znajduje
    setFavSongs((prev) => [...prev, song]);
  };

  return (
    <SongsContext.Provider
      value={{
        songs,
        favSongs,
        addToFav,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
};

// krok 4 - należy owrappować naszą aplikacje <App /> w pliku index.tsx

// krok 5 - jakoś odczytać nasz stan z poziomu komponentu za pomoca useContext(naszContext)
