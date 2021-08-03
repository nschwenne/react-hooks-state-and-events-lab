import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, lightSwitch] = useState(false)
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light"
  function backgroundSwitcher() {
    lightSwitch((mode) => !mode);
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={backgroundSwitcher}>{mode ? "Dark Mode" : "Light Mode" }</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
