import React,{useState, useEffect} from 'react'
import Table from './table'

  // Access data from Local Storage
  const getData = () => {
    const data = localStorage.getItem('entries');
    if(data){
        return JSON.parse(data)
    }
    else{
        return []
    }
  }

const form = () => {
  
  // Array of input entries
  const [entries, setEntries] = useState(getData());

  // States for input form values  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  // Form submit handler function
  const handleFormSubmit = (text) => {
    text.preventDefault();
    let entry={
        name,
        age,
        gender
    }
    setEntries([...entries,entry]);

    //clear form fields after an entry
    setName('');
    setAge('');
    setGender('');
  }

  //save to local storage
  useEffect(()=> {
    localStorage.setItem('entries',JSON.stringify(entries));
    },[entries])

  return (
    <div className="row d-flex align-items-center justify-content-center">
      {/* Form Container */}
      <div className="container col-md-5 shadow p-3 mb-5 bg-white rounded m-5 p-4">
        <form onSubmit={handleFormSubmit}>
            <label for="name">Name</label>
            <input id="name" type="text" className="form-control" onChange={(text)=>setName(text.target.value)} value={name} required></input>
            <br></br>
            <label for="age">Age</label>
            <input id="age" type="number" className="form-control" onChange={(text)=>setAge(text.target.value)} value={age} required></input>
            <br></br>
            <label for="gender">Gender</label>
            <select id="gender" className="form-control" onChange={(text)=>setGender(text.target.value)} value={gender} required>
                <option></option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>
            <br></br>
            <input type="submit" className="form-control" />
        </form>
      </div>

      {/* Table Container */}
      <div className="container col-md-5 shadow p-3 mb-5 bg-white rounded m-5 p-4">
          {entries.length > 0 && 
          <div className="text-center">
            <div className="table-responsive">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Table entries={entries}/>
                    </tbody>
                </table>
            </div>
            <button className="btn btn-danger form-control" onClick={() => setEntries([])}>Clear Table</button>
          </div>}
          {entries.length < 1 && <div className="text-center">No Entries Found!</div>}
      </div>
    </div>
    
  )
}

export default form