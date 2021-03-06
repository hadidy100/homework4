// add this file in  the index html file

(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var	SERVER_URL	=	'http:/localhost:2403/coffeeorders';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var	RemoteDataStore	=	App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var	Validation	=	App.Validation;
  var CheckList = App.CheckList;
  var	remoteDS	=	new	RemoteDataStore(SERVER_URL);
  var	webshim	=	window.webshim;
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var myTruck = new Truck('ncc-1701',new	DataStore());
  window.myTruck = myTruck; // to make available outside
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function	(data)	{
				return	myTruck.createOrder.call(myTruck,	data)
						.then(function	()	{
								checkList.addRow.call(checkList,	data);
						});
		});

  formHandler.addInputHandler(Validation.isCompanyEmail);
  myTruck.printOrders(checkList.addRow.bind(checkList));
  webshim.polyfill('forms	forms-ext');
  webshim.setOptions('forms',	{	addValidators:	true,	lazyCustomMessages:	true	});
})(window);
