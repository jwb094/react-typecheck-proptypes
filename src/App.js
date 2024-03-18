import React, { Component } from 'react';
import PropTypes, { array } from 'prop-types';
import './App.css';

const Test = (props) =>{
  return(
    <div>
      <h1>{props.str}</h1>
      <h1>{props.bool ? 'bool' : 'no bool'}</h1>
      <h1>{props.strOrNum }</h1>
      <div>
        {
          props.ary.map((val)=>{
          return(<li key={val}>{val}</li>)
          })
        }
      </div>
      <div>
        {
          props.aryOfObjects.map((val)=>{
          return(<li key={val.age}>{val.name}</li>)
          })
        }
      </div>
      <h1>{props.children}</h1>
    </div>
    
  )
}

Test.propTypes = {
str:PropTypes.string,
bool:PropTypes.bool,
strOrNum:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
ary:PropTypes.arrayOf(PropTypes.number),
aryOfObjects:PropTypes.arrayOf(PropTypes.shape({
  name:PropTypes.string,
  age:PropTypes.number
})),
children:PropTypes.element.isRequired
}


class  App extends Component {
  render(){
    return (
      <div className="App">
    <Test str={'Tech'}
          bool
          strOrNum={10}
          ary={[1,2,3]}
          aryOfObjects={
            [{name:'john',age:10 },{name:'peter',age:30 }]
          }
         ><div>children</div><div>children</div></Test>
      </div>
    );
  }
}
export default App;
