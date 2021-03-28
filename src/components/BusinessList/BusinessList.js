import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render(){
        return(
            <div className="BusinessList">
            {
                //Passing a prop from App.js which is an array (businesses). I render all the items. When I return <Business /> component with a prop 
                //& pass it down to the <Business />. The propr business={business} will let me passdown the key values of the obj.
                this.props.businesses.map(business => {
                    return <Business key={business.id} business={business} />
                })
            }
          
            </div>
        )
    }
}
 
export default BusinessList;