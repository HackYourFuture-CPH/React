# Lesson Plan Week 4.5 - Roundup

- Recap exercises
- 1. useState
- 2. useEffect
- 3. useContext
- Cat app features - group work
- Shifts app - group work

## Simple Context example

```js
// catApp.js

import React, { useState, useEffect } from 'react';
import { CatForm } from './catForm';
import { CatList } from './catList';

export function CatApp() {
  const [cats, setCats] = useState([]);

  return (
    <div>
      <CatForm setCats={setCats}></CatForm>
      <CatList cats={cats}></CatList>
    </div>
  );
}

// catForm.js

import React, { useState, useEffect } from 'react';

export function CatForm({ setCats }) {
  const [name, setName] = useState('');

  function updateName(e) {
    setName(e.target.value);
  }

  function submitName() {
    setCats((prev) => {
      return [...prev, name];
    });
  }

  return (
    <div>
      <input type='text' value={name} onChange={updateName} />
      <button onClick={() => submitName()}>Submit</button>
    </div>
  );
}

// catList.js

import React, { useState, useEffect } from 'react';

export function CatList({ cats }) {
  function catNamesInLis() {
    return cats.map((cat) => <li>{cat}</li>);
  }

  return <ul>{catNamesInLis()}</ul>;
}
```

### Cat app Feature 1 - add age 

FEATURE: add both the name and the age of the cat

### Cat app Feature 2 - update the age of a cat

FEATURE: update previously added cat age

### Cat app Feature 3 - filter by name 

FEATURE: filter the cats by name

### Cat app Feature 4 - sort by name and age 

FEATURE: sort the list by name and age

### Cat app Feature 5 - toggle sort and filter

FEATURE: only show filter and sort functionality when there are more than 5 cats

