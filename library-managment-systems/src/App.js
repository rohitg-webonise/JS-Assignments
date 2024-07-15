// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./Details/SignInPage";
import BookListPage from "./Details/BookListPage";
import BookDetailPage from "./Details/BookDetailPage";
import NotFound from "./Components/NotFound";
import "./style.css";

const App = () => {
  const [user, setUser] = useState(null); // or use localStorage to persist login state
  const [books] = useState([
    {
      id: "1",
      name: "Kalki: Avatar of Vishnu",
      summary:
        "Born in the quiet village of Shambala, Kalki Hari, son of Vishnuyath and Sumati, has no idea about his heritage until he is pitted against tragedies and battles.Whisked into the province of Keekatpur, which is under the fist of Lord Kali, Kalki sees the ignominy of death trumping life all around him. He learns that he has been born to cleanse the world he lives in, for which he must journey to the North and learn the ways of Lord Vishnu’s Avatar, from an immortal who wields an axe.But trapped in the midst of betrayals, political intrigue and forces that seek to decimate him, will he be able to follow his destiny before the Kaliyug begins?",
    },
    {
      id: "2",
      name: "Rashmirathi",
      summary:
        "Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kinds of books. You can carry this book where ever you want. It is easy to carry. It can be an ideal gift to yourself and to your loved ones. Care instruction keep away from fire.",
    },
    {
      id: "3",
      name: "India that is Bharat",
      summary:
        "India, That Is Bharat, the first book of a comprehensive trilogy, explores the influence of European 'colonial consciousness' (or 'coloniality'), in particular its religious and racial roots, on Bharat as the successor state to the Indic civilisation and the origins of the Indian Constitution. It lays the foundation for its sequels by covering the period between the Age of Discovery, marked by Christopher Columbus' expedition in 1492, and the reshaping of Bharat through a British-made constitution-the Government of India Act of 1919",
    },
    {
      id: "4",
      name: "India, Bharat and Pakistan",
      summary:
        "India, Bharat and Pakistan, the second book of the Bharat Trilogy, takes the discussion forward from its bestselling predecessor, India That Is Bharat. It explores the combined influence of European and Middle Eastern colonialities on Bharat as the successor state to the Indic civilisation, and on the origins of the Indian Constitution",
    },
    {
      id: "5",
      name: "Hidden Hindu",
      summary:
        "Prithvi, a twenty-one-year-old, is searching for a mysterious middle-aged aghori (Shiva devotee), Om Shastri, who was traced more than 200 years ago before he was captured and transported to a high-tech facility on an isolated Indian island",
    },
    {
      id: "6",
      name: "The Naga Warriors",
      summary:
        "To prepare for the future, our ancestors created the Naga sadhus―a clan of warriors for the protection of Dharma, as proclaimed by Adi Guru Shankaracharya in the eighth century. This sect of Shiva devotees has stood firm, living selflessly and fighting fearlessly. For centuries, they have died the death of heroes, serving and saving Dharma and the temples.",
    },
    {
      id: "7",
      name: "Musafir Café",
      summary:
        "हम सभी की जिंदगी में एक लिस्ट होती है। हमारे सपनों की लिस्ट, छोटी-मोटी खुशियों की लिस्ट। सुधा की जिंदगी में भी एक ऐसी ही लिस्ट थी। हम सभी अपनी सपनों की लिस्ट को पूरा करते-करते लाइफ गुज़ार देते हैं। ",
    },
  ]);

  const handleSignIn = (username) => {
    setUser(username);
  };

  return (
    <Router>
      <header>
        <h1>Library Management System</h1>
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInPage onSignIn={handleSignIn} />} />
          <Route
            path="/books"
            element={<BookListPage user={user} books={books} />}
          />
          <Route
            path="/books/:id"
            element={<BookDetailPage user={user} books={books} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
