(function (window){
'use strict';
var App = window.App || {}; // if not defined then new empty object

function Truck (truckId, db){
  this.truckId = truckId;
  this.db= db;
}

Truck.prototype.createOrder = function (order) {
   console.log('Adding order for ' + order.emailAddress);
   return this.db.add(order.emailAddress, order);
 };

 App.Truck = Truck;
 window.App = App;

})(window);


Truck.prototype.deliverOrder = function (customerId) {
    console.log('Delivering order for ' + customerId);
    return this.db.remove(customerId);
  };

  App.Truck = Truck;
  window.App = App;

})(window);

// deliver order and print order

Truck.prototype.printOrders	=	function	(printFn)	{
				return	this.db.getAll()
						.then(function	(orders)	{
								var	customerIdArray	=	Object.keys(orders);
								console.log('Truck	#'	+	this.truckId	+	'	has	pending	orders:');
								customerIdArray.forEach(function	(id)	{
										console.log(orders[id]);
                    if	(printFn)	{
                      printFn(orders[id]);
                  }
								}.bind(this));
						}.bind(this));
		};

App.Truck = Truck;
window.App = App;

})(window);
