import { useState, useEffect } from "react";

export function FormWithFetchData() {
  //
  const USER_DATA_URL = "https://dummyjson.com/http/200";

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function submitUserData() {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({ name, lastName }),
        });
        const data = await response.json();

        if (data.status && data.status === "200") {
          console.log("OK");
        }
        setUrl("");
      } catch (err) {
        console.log(err.message);
      }
    }

    if (url) submitUserData();
  }, [url]);

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        setUrl(USER_DATA_URL);
      }}
    >
      <ul>
        <li>
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(evt) => {
              setName(evt.target?.value || "");
            }}
          />
        </li>
        <li>
          <input
            placeholder="last name"
            type="text"
            value={lastName}
            onChange={(evt) => {
              setLastName(evt.target?.value || "");
            }}
          />
        </li>
        <li>
          <button type="submit">submit</button>
        </li>
      </ul>
    </form>
  );
}
