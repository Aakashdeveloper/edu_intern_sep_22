import React,{Component} from 'react';

class MenuDisplay extends Component{

    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id) > -1){
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({menuData}) => {
        if(menuData){
            return menuData.map((item) => {
                return(
                    <div key={item.menu_id}>
                        <div className="col-md-7">
                            <b>{item.menu_id}</b>
                            <img src={item.menu_image} alt={item.menu_name} style={{height:80,width:80}}/> &nbsp;
                            {item.menu_name} - Rs.{item.menu_price}
                        </div>
                        <div className='col-md-4'>
                            <button className="btn btn-success"
                            onClick={() => {this.placeOrder(item.menu_id)}}>
                                <span className='glyphicon glyphicon-plus'></span>
                            </button>&nbsp;
                            <button className="btn btn-danger"
                             onClick={() => {this.removeOrder(item.menu_id)}}>
                                <span className='glyphicon glyphicon-minus'></span>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div>
                <div className="col-md-12 bg-success">
                    <h2>Item Added</h2>
                    Item Number {this.renderCart(this.orderId)} Added
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }

}

export default MenuDisplay;