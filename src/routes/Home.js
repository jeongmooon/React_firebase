import { authService } from "fbase";
import { useState } from "react";

function Home() {
  const [msg, setMsg] = useState("");

  function onSubmit(e) {
    e.preventDefault();
  }

  function onChange(event) {
    event.preventDefault();
    setMsg(event.target.value);
  }

  return (
    <div>
      <h3>Home page</h3>
      <form onSubmit={onSubmit}>
        <input
        value={msg}
        onChange={onChange} 
        type="text" 
        placeholder="무슨 생각을 하고 있나요" 
        maxLength={120} />
        <input type="submit" value="기록하기" />
      </form>
    </div>
  );
}

export default Home;