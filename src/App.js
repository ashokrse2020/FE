//Source https://github.com/atapas/youtube/tree/main/react/20-useTransition/user-finder-transition
//https://blog.greenroots.info/explain-react-18-usetransition-hook-with-examples

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState, useDebugValue, useTransition } from 'react';
import { faker } from '@faker-js/faker';
import './App.css';

const usersList = Array.from(Array(10000), () => {
  return {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    background: faker.image.nature(),
  }
});

console.log("Ashok the entire user list is", usersList);

function UsersDashBoard(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUserList, setFilteredUserList] = useState(usersList);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if(!searchTerm) {
      setFilteredUserList(usersList);
    }
  }, [searchTerm])

  const handleChangge = (event) => {
    const input = event.target.value;
    setSearchTerm(input);
    startTransition(() => {
      const matchedUsersList = filteredUserList.filter(user => user.name.includes(input)) || [];
      console.log(matchedUsersList);
      setFilteredUserList(matchedUsersList);
    })
  }

  return (
    <div>
      <div>
        <h1>{'Use Trantion Hook'}</h1>
        <label>{'Search Input'}</label>
        <input type='text' onChange={handleChangge} value={searchTerm}/>
        <br/>
        <br/>
      </div>
      <div className="cards">
      {
         !isPending ? (filteredUserList || []).map((user) => {
          return (
            <div className='card'>
              <img src={user.avatar} alt={`Avatar image of ${user.name}`} className='avatar' />
              <div>{user?.name}</div>
            </div>
          );
        }) : <br />
      }
      </div>
    </div>
  )
}

export default function App() {

    return (
        <div>
           <UsersDashBoard usersList={usersList} />
        </div>
    )
}