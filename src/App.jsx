import { useState, useEffect } from 'react';
import styles from './global.module.css';
import './App.css';
import UserData from "../components/UserData";
const API = "https://jsonplaceholder.typicode.com/users";



const App = () => {
  const[users,setUsers] =useState([])

  // GET DATA--->

  const fetchUsers = async (url) => {
    try {
   const res = await fetch(url);
   const data = await res.json();

  //  console.log(data);
  if(data.length >0){
     setUsers(data);
  }
   
    } catch (e) {
    console.error(e);
    }
    }

// WITH THE HELP OF USEEFFECT, 1ST TIME THE PAGE REFRESHES, "fetchUsers" FUNCTION IS CALLED.
useEffect(() => {

  fetchUsers(API);

}, [])

return (
  <>
    <h1 className={styles.head} >REACT TABLE</h1>
    <table className={styles.table} >
      <thead className={styles.hd} >
        <tr className={styles.rw} >
          <th className={styles.cm}>ID</th>
          <th className={styles.cm}>Name</th>
          <th className={styles.cm}>User Name</th>
          <th className={styles.cm}>EMail</th>
          </tr>
      </thead>
      <tbody className={styles.bd}>
        <UserData users={users}/>
      </tbody>
    </table>
  </>
);
}

export default App
