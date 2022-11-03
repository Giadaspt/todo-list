import React, {useState} from "react";

function UserInput(props){
  const [form, setForm] = useState(
    {
      name: '',
      username: ''
    }); 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({form});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="Label">Nome</label>
        <div className="control">
          <input 
          type="text"
          className="input"
          placeholder="es. Patrizio"
          name="name"
          value={form.name}
          onChange={handleChange}
          />
        </div>
        <label className="Label">Nickname</label>
        <div className="control">
          <input 
          type="text"
          className="input"
          placeholder="es. Puccio"
          name="username"
          value={form.username}
          onChange={handleChange}
          />
        </div>
      </div>
      <button className="button is-info" type="submit" >Aggiungi</button>
    </form>
  )
};

export default UserInput;