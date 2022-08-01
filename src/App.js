import { useState } from 'react';
import './App.css';

const App = () => {
  const [ post, setPost ] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPost = event.target.getPosts.value;
    setPost([ ...post , newPost]);
    event.target.getPosts.value = "";
  }

  const removePost = (event) => {
    let removeId = event.target.id;
    post.splice(removeId, 1);
    setPost([...post]);
  }

  return (
    <div className="App">
      <h2>Post Comments</h2>
      <form style={{padding : '10px'}} onSubmit={handleSubmit}>
        <input type="text" name="getPosts"/> {" "}
        <input type="submit" value="Post"/>
      </form>
      <table>
        <tbody>
          {
            post.map((p, index) => 
              <tr key={index} style={{listStyleType:'none', textAlign:'left'}}>
                <td>{index+1}. {p}</td> 
                <td>
                  <button onClick={removePost} id={index}>Remove</button>
                </td>
              </tr>
            )
          }
        </tbody>
        </table>
    </div>
  );
}

export default App;
