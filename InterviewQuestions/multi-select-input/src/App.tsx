/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Pill from '../src/components/pill';

function App() {

  const [searchParam, SetSearchParam] = useState("");
  const [searchSuggestions, SetSearchSuggestions] = useState([]);
  const [selectedUser, SetSelectedUser] = useState([]);
  const [selecteduserset, SetSelectedUserSet] = useState(new Set());
  const inputref = useRef(null)

  const handleSearchParamChange = (event) => {
    SetSearchParam(event.target.value);
  }

  const handleUserClick = (user) => {
    console.log("user is selected :: ", user)
    SetSelectedUser([...selectedUser, user])
    SetSearchParam("")
    SetSelectedUserSet(new Set([...selecteduserset, user.email]))
    inputref.current.focus()
  }

  const handleRemoverUser = (user) => {
    const updatedSelectedUser = selectedUser.filter(selectedUser => selectedUser.id !== user.id);
    SetSelectedUser(updatedSelectedUser);
    console.log("updatedSelectedUser ::", updatedSelectedUser)

    const updatedSelectedUserSet = new Set(selecteduserset)
    updatedSelectedUserSet.delete(user.email);
    SetSelectedUserSet(updatedSelectedUserSet);
  }

  useEffect(() => {
    console.log("UseEffect with dependecy")
    const fetchUsers = async () => {
      if (searchParam.trim() === '') {
        SetSearchSuggestions([]);
        return;
      }

      await fetch(`https://dummyjson.com/users/search?q=${searchParam}`)
        .then((result) => result.json())
        .then((data) => SetSearchSuggestions(data))
        .catch((err) => {
          console.log("Error :: ", err);
        });
    }
    fetchUsers();

  }, [searchParam])


  const handleBackspace = (e) => {
    if (e.key === 'Backspace' && e.target.value === "" && selectedUser.length > 0) {
      const lastUser = selectedUser[selectedUser.length - 1]
      handleRemoverUser(lastUser)
      SetSearchSuggestions([])
    }
  }


  return (
    <div className='select-container'>
      <h4>Hello Multi Select Input</h4>
      <div className='user-select-container'>
        <div className='user-select-input'>
          {
            selectedUser.map((user) => {
              return <Pill key={user.email} image={user.image} text={`${user.firstName} ${user.lastName}`} onClick={() => handleRemoverUser(user)} />
            })
          }

          <input
            ref={inputref}
            type="text"
            value={searchParam}
            onChange={handleSearchParamChange}
            placeholder='Search the users...'
            onKeyDown={handleBackspace}
          />
        </div>
        <ul className='suggestions'>
          {searchSuggestions?.users?.map((user) => {
            return (!selecteduserset.has(user.email) ? <li key={user.email} className='suggestesUser' onClick={() => handleUserClick(user)}>
              <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
              <span>{user.firstName} {user.lastName} </span>
            </li> : <></>)
          })

          }
        </ul>
      </div>
    </div>
  )
}

export default App
