import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({});

  const [localState, setLocatSatate] = useState([]);

  useEffect(() => {
    const local_dat = JSON.parse(localStorage.getItem("user_data"));
    console.log(local_dat, "userState.....");
    setLocatSatate(...localState, local_dat);
  }, []);

  function onChangeHandler(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function ON_SUBMIT() {
    let first_name = state.first_name;
    let last_name = state.last_name;
    let email = state.email;

    if (!first_name || !last_name || !email) {
      return alert("please fill the feald...");
    } else {
      const local_data = JSON.parse(localStorage.getItem("user_data"));
      if (local_data) {
        local_data.push(state);
        localStorage.setItem("user_data", JSON.stringify(local_data));
      } else {
        localStorage.setItem("user_data", JSON.stringify([state]));
      }
    }
  }

  return (
    <div className="App py-5">
      <div className="input-feald ">
        <div class="w-full max-w p-5 bg-red-200 shadow-xl">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-2/1 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                // onChange={onChangeHandler}
                onChange={onChangeHandler}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="first Name"
                name="first_name"
                required
              />
            </div>
            <div class="w-full md:w-2/1 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                name="last_name"
                onChange={onChangeHandler}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div class="w-full md:w-2/1 px-3 mb-6 mt-2 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Email
              </label>
              <input
                onChange={onChangeHandler}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="name@gmail.com"
                name="email"
              />
              <button
                onClick={ON_SUBMIT}
                className="border bg-blue-500 py-2 px-3 text-white uppercase rounded"
              >
                submit
              </button>
            </div>
          </div>
        </div>
        <table class="mt-10 w-full max-w">
          <thead>
            <tr className="bg-green-300">
              <th className="border-2 border-purple-900 py-2 uppercase text-lg">
                First Name
              </th>
              <th className="border-2 border-purple-900 py-2 uppercase text-lg">
                Last Name
              </th>
              <th className="border-2 border-purple-900 py-2 uppercase font-bold text-lg">
                Email
              </th>
              <th className="border-2 border-purple-900 uppercase font-bold text-2xl ">👇</th>
            </tr>
          </thead>
          {!localState
            ? ""
            : localState.map((element) => {
                return (
                  <tbody className="bg-emerald-50">
                    <tr>
                      <td className="border-2 border-purple-900 px-2 pt-1 pb-1">
                        {element.first_name}
                      </td>
                      <td className="border-2 border-purple-900 px-2 pt-1 pb-1">
                        {element.last_name}
                      </td>
                      <td className="border-2  border-purple-900 px-2 ">
                        {element.email}
                      </td>
                      <td className="uppercase border-2 border-purple-900 text-center ">
                        <span>
                          <ion-icon class="mt-1 px-1 py-1  rounded-full text-xl text-black hover:bg-red-700 hover:text-white" name="create"></ion-icon>
                        </span>
                        <span>
                          <ion-icon
                            class="px-1 py-1  mt-1 rounded-full text-xl text-black hover:bg-red-700 hover:text-white"
                            name="trash"
                          ></ion-icon>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
        </table>
      </div>
    </div>
  );
}

export default App;
