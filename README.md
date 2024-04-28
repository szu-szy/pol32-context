# Zadania redux

1. Implementacja prostego licznika:

Stwórz aplikację React, która będzie zawierać prosty licznik. Wykorzystaj Redux do przechowywania stanu licznika oraz do obsługi akcji zwiększania i zmniejszania wartości licznika.

2. Lista zadań do zrobienia:
Utwórz aplikację, która będzie zawierać listę zadań do wykonania. Zaimplementuj Redux, aby przechowywać stan listy zadań oraz obsługiwać dodawanie, usuwanie i oznaczanie zadań jako zakończone.

3. Formularz logowania z uwierzytelnianiem:
Stwórz formularz logowania w aplikacji React. Użyj Redux do przechowywania stanu zalogowanego użytkownika oraz do obsługi akcji logowania i wylogowywania.

# Zadania context

Aplikacja do zarządzania playlistą muzyczną:
Utwórz aplikację, która pozwoli użytkownikowi zarządzać własną playlistą muzyczną. Wykorzystaj React Context API do przechowywania listy utworów muzycznych oraz informacji o aktualnie odtwarzanym utworze. Dodaj funkcje takie jak dodawanie utworów, zmiana kolejności odtwarzania i odtwarzanie/pauzowanie utworów. Dodaj również możliwość dodania listy do ulubionych, która będzie wyświetlana w innym komponencie (liczba ulubionych wwystarczy). - Pracujemy na statycznej liscie dlatego:

const songs = [
  {
    id: 1,
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: "3:53",
    album: "÷ (Divide)"
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:20",
    album: "After Hours"
  },
  {
    id: 3,
    title: "Dance Monkey",
    artist: "Tones and I",
    duration: "3:30",
    album: "The Kids Are Coming"
  },
  {
    id: 4,
    title: "Someone Like You",
    artist: "Adele",
    duration: "4:45",
    album: "21"
  },
  {
    id: 5,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    duration: "4:30",
    album: "Uptown Special"
  },
  {
    id: 6,
    title: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    duration: "3:56",
    album: "Trolls: Original Motion Picture Soundtrack"
  },
  {
    id: 7,
    title: "Havana",
    artist: "Camila Cabello ft. Young Thug",
    duration: "3:36",
    album: "Camila"
  },
  {
    id: 8,
    title: "Believer",
    artist: "Imagine Dragons",
    duration: "3:24",
    album: "Evolve"
  },
  {
    id: 9,
    title: "Shallow",
    artist: "Lady Gaga, Bradley Cooper",
    duration: "3:35",
    album: "A Star Is Born Soundtrack"
  },
  {
    id: 10,
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    duration: "2:54",
    album: "Fine Line"
  }
];