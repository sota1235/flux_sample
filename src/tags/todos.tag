<todo>
  <h1>Todo Application Sample - Riot.js</h1>

  <ul>
    <li each={ todo in todos }>{ todo }</li>
  </ul>

  <div id="form-component">
    <input type="text" placeholder="Enter todo description">
    <button onClick={ handleOnClick }>Add new todo</button>
  </div>
</todo>
