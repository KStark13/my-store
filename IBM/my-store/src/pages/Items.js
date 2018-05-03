import React, {Component} from'react';
import API from '../utils/API';
import Input from '../components/Input/Input';
import FormBtn from '../components/FormButton/FormButton';
import List from '../components/List/List';
import Listitem from '../components/List/Listitem';
class Items extends Component {
	state = {
		items:[
		{
			"id": 1,
			"name": "Heels",
			"description": "Womens high heel shoes",
			"related": "",
			"image": "",
		},
		{
			"id": 2,
			"name": "Womens Ballet Flats",
			"description": "Womens black ballet flat shoes",
			"related": "" ,
			"image": "",
		},
		]
	};

	componentDidMount() {
		this.loadItems();
	}

	loadItems = () => {
		API.getItem()
		.then(res=> this.setState({items: res.data}))
		.catch(err=> console.log(err));
	};

	render() {
		return(
			<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="panel panel-primary">
								<div className="panel-heading">
									<h1>Product Inventory</h1>
								</div>
								<div className="panel-body">
									<form>
										<Input name="Qty" placeholder="Quantity"/>
										<Input name="Item" placeholder="Item id"/>
										<Input name="Sales-Rep" placeholder="Sales Rep"/>
										<FormBtn> Submit Item </FormBtn>
									</form>
								</div>
							</div>
						</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1>Added Items</h1>
							</div>
							<div className="panel-body">
								<div className="table-responsive>">
									    <table className="table table-striped">
                            				<thead>
                                				<tr>
                                    				<th scope="col">Edit Entry</th>
                                    				<th scope="col">Delete Entry</th>
                                    				<th scope="col">Item Number</th>
                                    				<th scope="col">Item Description</th>
                                    				<th scope="col">Item Amount</th>
                                				</tr>
                            				</thead> 
                            			      <tr>
                            			       {this.state.items.length ? (
              										<List>
               											 {this.state.items.map(item => (
                 										 <Listitem key={item._id}>
                    										<a href={"/items/" + item._id}>
                     										 <strong>
                       										{item.id} {item.description} 
                      										</strong>
                   											 </a>
                   											
                 										</Listitem>
              										  ))}
             										</List>
           											 ) : (
              										<h3>No Results to Display</h3>
           											)}

													}
												</tr>
                            			</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			)

	}
}

export default Items;