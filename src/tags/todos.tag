<todo>
  <h1>Todo Application Sample - Riot.js</h1>

  <ul>
    <li each={ todo in todos }>{ todo }</li>
  </ul>

  <div id="form-component">
    <input type="text" placeholder="Enter todo description" />
    <button onclick={ handleOnClick }>Add new todo</button>
  </div>

  <script>
    import EventEmitter2 from 'eventemitter2';
    import TodoStore     from '../stores/todo-store';
    import TodoAction    from '../actions/todo-action';

    const dispatcher = new EventEmitter2;
    const action     = new TodoAction(dispatcher);
    const store      = new TodoStore(dispatcher);

    this.todos = store.getAll();

    store.on('DATA_CHANGED', () => {
      this.data = store.getAll();
      console.log(this, this.data);
      this.update();
    });

    /**
     * @description TODO追加時アクション
     * @param {Event} e
     */
    const handleOnClick = e => {
      console.log(e);
      console.log('hoge');
      action.addTodo(e.val());
    };
  </script>
</todo>
