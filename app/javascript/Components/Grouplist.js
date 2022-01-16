import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GroupList = () => {
  const [groups, setGroups] = useState([])
  useEffect(() => {
    axios.get("/api/v1/groups") 
    .then((res) => {
       console.log(res);
       setGroups(res.data.data);
       console.log(groups)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [groups.length]);

  const GroupList = groups && groups.map((groups) => {
    return (
      <ul key={groups.id}>
        <li>
          {groups.attributes.name}
        </li>
        <li>
          {groups.attributes.description}
        </li>
      </ul>
    )
  })

  return (
    <div>
      <h1>Groups</h1>
      <div>
        {GroupList}
      </div>
    </div>
  )
};

export default GroupList;