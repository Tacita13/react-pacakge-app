import React from 'react';
import Header from '../Header';
import InputBox from '../create/InputBox';

class PackageList extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     count: 0
   };
 }

 render() {
   return (
     <div className="createlist">
        <Header/>
        <form action="http://localhost:5000/submit-data" method="post">
          <label for="fname">Package name</label><br></br>
          <input type="text" id="pname" name="pname" size='50'/><br></br>

          <label for="pfiles">Package Files</label><br></br>
          <input type="file" id="pfile" name="pfile" multiple/>

          <label for="rquantities">Requested Quantities</label><br></br>
          <select name="units" id="units">
             <option value="five">5</option>
             <option value="ten">10</option>
             <option value="twenty">20</option>
           </select> <br></br>

           <label for="start">Due Date:</label>
           <input type="date" id="due" name="ddate"
                 min="2021-06-15"/><br></br>

          <label for="description">Description & Notes</label><br></br>
          <textarea type="text" id="desc" name="desc"  rows="6" cols="50"></textarea><br></br>

          <input type="submit" value="Submit"/>
        </form>
     </div>
   );
 }
}
export default PackageList;
