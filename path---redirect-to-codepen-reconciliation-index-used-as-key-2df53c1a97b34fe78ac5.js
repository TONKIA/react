webpackJsonp([0x9ad3c8890ebd],{829:function(t,n){t.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"const ToDo = props => (\\n  <tr>\\n    <td>\\n      <label>{props.id}</label>\\n    </td>\\n    <td>\\n      <input />\\n    </td>\\n    <td>\\n      <label>\\n        {props.createdAt.toTimeString()}\\n      </label>\\n    </td>\\n  </tr>\\n);\\n\\nclass ToDoList extends React.Component {\\n  constructor() {\\n    super();\\n    const date = new Date();\\n    const todoCounter = 1;\\n    this.state = {\\n      todoCounter: todoCounter,\\n      list: [\\n        {\\n          id: todoCounter,\\n          createdAt: date,\\n        },\\n      ],\\n    };\\n  }\\n\\n  sortByEarliest() {\\n    const sortedList = this.state.list.sort(\\n      (a, b) => {\\n        return (\\n          a.createdAt - b.createdAt\\n        );\\n      }\\n    );\\n    this.setState({\\n      list: [...sortedList],\\n    });\\n  }\\n\\n  sortByLatest() {\\n    const sortedList = this.state.list.sort(\\n      (a, b) => {\\n        return (\\n          b.createdAt - a.createdAt\\n        );\\n      }\\n    );\\n    this.setState({\\n      list: [...sortedList],\\n    });\\n  }\\n\\n  addToEnd() {\\n    const date = new Date();\\n    const nextId =\\n      this.state.todoCounter + 1;\\n    const newList = [\\n      ...this.state.list,\\n      {id: nextId, createdAt: date},\\n    ];\\n    this.setState({\\n      list: newList,\\n      todoCounter: nextId,\\n    });\\n  }\\n\\n  addToStart() {\\n    const date = new Date();\\n    const nextId =\\n      this.state.todoCounter + 1;\\n    const newList = [\\n      {id: nextId, createdAt: date},\\n      ...this.state.list,\\n    ];\\n    this.setState({\\n      list: newList,\\n      todoCounter: nextId,\\n    });\\n  }\\n\\n  render() {\\n    return (\\n      <div>\\n        <code>key=index</code>\\n        <br />\\n        <button\\n          onClick={this.addToStart.bind(\\n            this\\n          )}>\\n          Add New to Start\\n        </button>\\n        <button\\n          onClick={this.addToEnd.bind(\\n            this\\n          )}>\\n          Add New to End\\n        </button>\\n        <button\\n          onClick={this.sortByEarliest.bind(\\n            this\\n          )}>\\n          Sort by Earliest\\n        </button>\\n        <button\\n          onClick={this.sortByLatest.bind(\\n            this\\n          )}>\\n          Sort by Latest\\n        </button>\\n        <table>\\n          <tr>\\n            <th>ID</th>\\n            <th />\\n            <th>created at</th>\\n          </tr>\\n          {this.state.list.map(\\n            (todo, index) => (\\n              <ToDo\\n                key={index}\\n                {...todo}\\n              />\\n            )\\n          )}\\n        </table>\\n      </div>\\n    );\\n  }\\n}\\n\\nReactDOM.render(\\n  <ToDoList />,\\n  document.getElementById(\'root\')\\n);\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-reconciliation-index-used-as-key-2df53c1a97b34fe78ac5.js.map