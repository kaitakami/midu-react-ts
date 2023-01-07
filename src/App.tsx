import { useEffect, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "pibe",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=pibe",
    description: "it's moderator sometimes",
  },
  {
    nick: "jordan",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=jordan",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
