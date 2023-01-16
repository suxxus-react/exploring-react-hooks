import { useReducer } from "react";

const INITIAL_STATE = { name: "", id: "" };

const userName = (name) => ({
  type: "UserName",
  payload: name,
});

const userId = (id) => ({
  type: "UserId",
  payload: id,
});

function stateReducer(state = {}, action = { type: "" }) {
  switch (action.type) {
    case "UserName":
      return { ...state, name: action.payload };
    case "UserId":
      return { ...state, id: action.payload };
    default:
      return state;
  }
}

export default function ReduceExample() {
  const [state, dispatch] = useReducer(stateReducer, INITIAL_STATE);

  return (
    <>
      <p>state : {JSON.stringify(state)}</p>
      <button
        onClick={() => {
          dispatch(userId("xses222s"));
        }}
      >
        set id
      </button>

      <input
        type="text"
        value={state.name}
        onChange={(evt) => {
          evt.preventDefault();
          dispatch(userName(evt.target.value));
        }}
      />
    </>
  );
}
