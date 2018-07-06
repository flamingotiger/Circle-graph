import React,{Component} from 'react';
import Circle from './Circle';
import Test from './Test';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      times:[20,30,50]
    }
  }
  render(){
    const {times} = this.state;
    const timesCopy = [...times]
    const timeSort = timesCopy.sort(function(a,b){
      return b - a
    })
    const topTime = timeSort[0];
    return (
      <div>
      {timeSort.map(time =>
        <Circle time={time} topTime={topTime} key={time}/>
      )}
      {timeSort.map(time =>
        <Test time={time} topTime={topTime} key={time}/>
      )}
      </div>
    );
  }
}
export default App;
