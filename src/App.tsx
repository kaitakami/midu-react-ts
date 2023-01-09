import { useEffect, useRef, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";

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
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const newSub = (newSub: Sub): void => {
    setSubs(prevSubs => [...prevSubs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
      <List subs={subs} />
      <Form onNewSub={newSub} />
    </div>
  );
}

export default App;
