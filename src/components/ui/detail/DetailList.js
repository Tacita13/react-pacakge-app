import React from 'react';
import {useParams} from 'react-router-dom';
import Header from '../Header';

class DetailList extends React.Component {
 constructor(props) {
   super(props);
 }

 render() {
   console.log(this.props);
   const id = window.location.href.slice(-1)-1;

   return (
     <div className="detaillist">
        <Header/>

        <h3>{this.props.data.list[id].text}</h3>
        <h5>Due Date: {this.props.data.list[id].date}</h5>
        <form action="...">

          <label for="pfiles">Package Files</label><br></br>
          <input type="text" value={this.props.data.list[id].files} multiple/><br></br>

          <label for="rquantities">Requested Quantities</label><br></br>
          <input type="text" value={this.props.data.list[id].units} /><br></br>

          <label for="description">Description & Notes</label><br></br>
          <p>{this.props.data.list[id].description}</p>
        </form>
     </div>
   );
 }
}
export default DetailList;
