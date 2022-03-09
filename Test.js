import React, { Component } from 'react'

	
class Test extends Component {
constructor(props){
	super(props)
		
	
	this.state = {test : 1 , name : "Charu"};
   
		

	this.updateState = this.updateState.bind(this)  
    this.prevState = this.prevState.bind(this)
}
	
updateState(){
	// Changing state
	this.setState({
	test: 2 ,
	name: 'Rue'

	})
}
prevState(){  

	this.setState({
        test: 1 ,
        name: 'Charu'
	})
}


render(){
    const {test,name} = this.state   
	return (
	<div>
		<h2>TOGGLE</h2>	
        <table>
            <tr>
              <th> TEST </th>
              <th> NAME </th> 
            </tr>
            <tr>
   
              <td>{test}</td> 
              <td>{name}</td>
             
              </tr>
          </table>
          <span>
             
                 <button onClick={this.updateState}>next</button>
                 <button onClick={this.prevState}>prev</button>
          </span>
	
	    	
		
	</div>
	)
}
}
	
export default Test;