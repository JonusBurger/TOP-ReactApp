import { useState } from 'react'

function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Bernd" });

  function handleChangeFisrtName(e) {
    setPerson(prevPerson => ({ ...prevPerson, firstName: e.target.value }));
  }
  function handleChangeLastName(e) {
    setPerson(prevPerson => ({ ...prevPerson, lastName: e.target.value }));
  }

  return (
    <>
      <h1>{person.firstName + " " + person.lastName}</h1>
      <div>
        <input
          value={person.firstName}
          onChange={handleChangeFisrtName}
        />
      </div>
      <div>
        <input
          value={person.lastName}
          onChange={handleChangeLastName}
        />
      </div>
    </>
  );
}

export{ Person };