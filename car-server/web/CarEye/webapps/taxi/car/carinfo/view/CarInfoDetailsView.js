Ext.define('CarInfoApp.view.CarInfoDetailsView', {
	extend : 'Ext.window.Window',
	alias : 'widget.carInfoDetailsView',
	title : '车辆详细信息',
    width : 900,
	layout : 'fit',
	animCollapse:false,
	constrain : true,  //true则强制此window控制在viewport，默认为false
	constrainHeader : true,
	maximizable : false,
	minimizable : false,
	modal : true,  //modal:true为模式窗口，后面的内容都不能操作，默认为false
	border : false,
	closeAction : 'destroy',
	items :[ {
		xtype : 'form',
		frame : true,
		anchor : '100%',
		collapsible : false,
	"items": [
	          {
	              "xtype": "fieldset",
	              "title": "<b><font style='color:green'>车辆基本信息 </font></b>",
	              fieldDefaults: {
	              	buttonAlign : 'left',
		            labelAlign : 'right',
	  	        	labelWidth: 80
	  	   		 },
	  		   items : [{
	  			layout : 'column',
	  			columnWidth : 1,
	  			border:false,
	              items : [{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
								xtype : 'comboboxtree',
								fieldLabel : '<font color="red">*</font>企业',
								name : 'carInfo.blocid',
								id : 'blocid',
								width:210,
								store: Ext.create('Ext.data.TreeStore', {  
							        autoLoad : false,
							        fields: ['text','id','parentId'], 
									root : {expanded : true,text : '企业' },
									proxy: {
										 type: 'ajax',
										 url: window.BIZCTX_PATH + '/servlet/DeptTree?type=200', 
										 reader: {
											 type: 'json'
										 }
									}
							    }) ,
							    rootVisible: false,
							    editable: true,
								allowBlank : false,
								readOnly : true,
								blankText : '请选择',
								cls : 'x-textfield',
								valueField: 'id', 
								displayField: 'text',
								listeners: {
							        change: {
							            element: 'el', 
							            fn: function(){ 
							            	var store = Ext.getCmp('blocid').store;
											store.clearFilter(true);
											store.on('beforeload', function (store, options) {
									            var new_params = { 
									            	blocname: encodeURI(Ext.getCmp('blocid').getRawValue())
									            };
									            Ext.apply(store.proxy.extraParams, new_params);
									        });
									        store.reload(); 
							            }
							        }
								 }
							},{
								xtype : 'textfield',
								fieldLabel : '<font color="red">*</font>车牌号',
								itemId : 'carnumber',
								id : 'carnumber',
								name : 'carInfo.carnumber',
								width :　210,
								anchor : '100%',
								readOnly : true,
								cls : 'x-textfield',
								regex : /^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{4}[a-zA-Z_0-9_\u4e00-\u9fa5]$|^[a-zA-Z]{2}\d{7}$/,
								regexText : '车牌号格式不正确',
								allowBlank : false
							},{
								xtype : 'combo',
								fieldLabel : '<font color="red">*</font>车牌颜色',
								itemId : 'carnumbercolor',
								id : 'color',
								name : 'carInfo.color',
								width :　210,
								anchor : '100%',
								store : 'CarNumberColorStore',
								editable: false,
								readOnly : true,
								valueField : 'id',
								displayField : 'carnumbercolor',
								cls : 'x-textfield',
								allowBlank : false,
								value:'2'
							},{
								xtype : 'combo',
								fieldLabel : '车身颜色',
								itemId : 'carcolor',
								id : 'carcolor',
								name : 'carInfo.carcolor',
								width :　210,
								anchor : '100%',
								store : 'CarColorStore',
								editable: false,
								readOnly : true,
								valueField : 'id',
								displayField : 'carnumbercolor',
								cls : 'x-textfield',
								value:'2'
							}]
	  				}, {
	  					
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
								xtype : 'combo',
								fieldLabel : '车辆类型',
								width:60,
								name : 'carInfo.cartype',
								id : 'cartype',
								readOnly : true,
								width :　210,
								allowBlank : true,
								store :'CarTypeStore',
								displayField : 'typename',
								valueField : 'id'
							},{
								xtype : 'textfield',
								fieldLabel : '车架号',
								itemId : 'framenumber',
								id : 'framenumber',
								name : 'carInfo.framenumber',
								readOnly : true,
								width :　210,
								allowBlank : true
							},{
									xtype : 'textfield',
									fieldLabel : '密码',
									name : 'carInfo.password',
									itemId : 'password',
									id : 'password',
									readOnly : true,
									width :　210,
									anchor : '100%',
									cls : 'x-textfield',
									minLength :6,
									minLengthText : '最小长度为6为数字!',
									maxLength : 20,
									maxLengthText : '最大长度为20为数字!'
								},{
									xtype : 'combo',
									fieldLabel : '当班司机',
									itemId : 'drivercode',
									id : 'drivercode',
									name : 'carInfo.drivercode',
									readOnly : true,
									width :　210,
									allowBlank : true,
									store : 'DrivercodeStore',
									valueField : 'drivercode',
									displayField : 'drivername',
									cls : 'x-textfield'
								}]
						
	  				}, {
	  					columnWidth : .25,
	  					border:false,
	  					items : [{
								xtype : 'combo',
								fieldLabel : '车辆用途',
								width:60,
								name : 'carInfo.caruse',
								id : 'caruse',
								width :　210,
								editable: false,
								readOnly : true,
								store :'CarUseStore',
								displayField : 'usename',
								valueField : 'id'
							},{
								xtype : 'combo',
									fieldLabel : '车辆归属地省',
									name : 'carInfo.province',
									itemId : 'province',
									id : 'province',
									width :　210,
									editable: false,
									readOnly : true,
									store :'ProvinceStore',
									displayField : 'entryValue',
									valueField : 'entryKey',
									allowBlank : true,
									cls : 'x-textfield'
								},{  
						            xtype : 'combo',
									fieldLabel : '市',
									name : 'carInfo.city',
									itemId : 'city',
									id : 'city',
									width :　210,
									editable: false,
									readOnly : true,
									store :'CityStore',
									displayField : 'entryValue',
									valueField : 'entryKey',
									allowBlank : true,
									cls : 'x-textfield'
								},{  
						            xtype : 'combo',
									fieldLabel : '县',
									name : 'carInfo.district',
									itemId : 'district',
									id : 'district',
									width :　210,
									editable: false,
									readOnly : true,
									store :'DistrictStore',
									displayField : 'entryValue',
									valueField : 'entryKey',
									allowBlank : true,
									cls : 'x-textfield'
								},{
									xtype : 'hidden',
									name : 'carInfo.id',
									id : 'id'
							}]
	  					},{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
	  								xtype : 'textfield',
									fieldLabel : '发动机号',
									name : 'carInfo.enginenumber',
									id : 'enginenumber',
									width :　210,
									cls : 'x-textfield',
									readOnly : true,
									allowBlank : true
								}, {
						            xtype : 'textfield',
									fieldLabel : '车主姓名',
									itemId : 'ownername',
									id : 'ownername',
									name : 'carInfo.ownername',
									width :　210,
									readOnly : true,
									allowBlank : true
								},{
									xtype : 'textfield',
									fieldLabel : '车主手机号',
									name : 'carInfo.phone',
									itemId : 'phone',
									id : 'phone',
									width :　210,
									anchor : '100%',
									cls : 'x-textfield',
									readOnly : true,
									minLength : 11,
									minLengthText : '长度为11为数字!',
									maxLength : 11,
									maxLengthText : '长度为11为数字!',
									allowBlank : true,
									blankText : '手机卡号不能为空',
//									regex : /^[1][358][0-9]{9}$/,
//									regexText : '手机号码不合法',
									validator : vd
						     	}, {
									xtype : 'textfield',
									fieldLabel : '车主地址',
									name : 'carInfo.owneraddress',
									id : 'owneraddress',
									readOnly : true,
									width :　210,
									cls : 'x-textfield',
									allowBlank : true
								},{
									xtype : 'hidden',
									name : 'carInfo.carid',
									id : 'carid'
							}]
						}]
	                }]
	          },
	           {
	              "xtype": "fieldset",
	              "title": "<b><font style='color:green'>设备信息 </font></b>",
	              fieldDefaults: {
	              	buttonAlign : 'left',
		            labelAlign : 'right',
	  	        	labelWidth: 80
	  	   		 },
	  		   items : [{
	  			layout : 'column',
	  			columnWidth : 1,
	  			border:false,
	              items : [{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
								xtype : 'textfield',
								fieldLabel : '<font color="red">*</font>设备号',
								name : 'carInfo.terminal',
								itemId : 'terminal',
								id : 'terminal',
								width :　210,
								anchor : '100%',
								cls : 'x-textfield',
								allowBlank : false,
								readOnly : true,
								blankText : '终端设备号不能为空',
								maxLength : 20,
								minLength:2,
								minLengthText : '最小长度不小于2位!',
								maxLengthText : '最大长度不超过20位!',
								validator : vd
							} ,{
								xtype : 'combo',
								fieldLabel : '<font color="red">*</font>设备类型',
								itemId : 'devicetype',
								id : 'devicetype',
								name : 'carInfo.devicetype',
								width :　210,
								store : 'DeviceTypeStore',
								editable: false,
								valueField : 'typeid',
								displayField : 'typename',
								readOnly : true,
								blankText : '请选择',
								allowBlank : false,
								cls : 'x-textfield'
							}]
	  				}, {
	  					columnWidth : .25,
	  					border:false,
	  					items : [{
							xtype : 'textfield',
							fieldLabel : '设备手机号',
							itemId : 'terphone',
							id : 'terphone',
							name : 'carInfo.terphone',
							width :　210,
//							regex : /^[1][358][0-9]{9}$/,
//							regexText : '手机号码不合法',
							allowBlank : true
						},{
								xtype : 'datefield',
								fieldLabel : '登记日期',
								format:"Y-m-d",
								id : 'registertime',
								maxValue : new Date(),
								name : 'carInfo.registertime',
								width :　210,
								anchor : '100%',
								allowBlank : true,
								cls : 'x-textfield'
							}]
	  					},{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
								xtype : 'textfield',
								fieldLabel : '设备型号',
								itemId : 'devicemodel',
								id : 'devicemodel',
								name : 'carInfo.devicemodel',
								width :　210,
								allowBlank : true
							} ,{
								xtype : 'datefield',
								fieldLabel : '安装日期',
								format:"Y-m-d",
								id : 'installtime',
								maxValue : new Date(),
								name : 'carInfo.installtime',
								width :　210,
								anchor : '100%',
								allowBlank : true,
								cls : 'x-textfield'
							} ]
						},{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
	  							xtype : 'textfield',
								fieldLabel : '视频编号',
								itemId : 'vediono',
								id : 'vediono',
								name : 'carInfo.vediono',
								allowBlank : true
							} ,{
								xtype : 'textfield',
								fieldLabel : '备注',
								name : 'carInfo.remark',
								anchor : '100%',
								itemId : 'remark',
								id : 'remark',
								maxLength : 512,
								maxLengthText : '最大长度不超过512位!',
								cls : 'x-textfield'
							}]
						}]
	                }]
	          },
	           {
	              "xtype": "fieldset",
	              "title": "<b><font style='color:green'>车辆属性信息 </font></b>",
	              fieldDefaults: {
	              	buttonAlign : 'left',
		            labelAlign : 'right',
	  	        	labelWidth: 80
	  	   		 },
	  		   items : [{
	  			layout : 'column',
	  			columnWidth : 1,
	  			border:false,
	              items : [{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
								xtype : 'textfield',
								fieldLabel : '核定载客',
								itemId : 'seatnumber',
								id : 'seatnumber',
								name : 'carInfo.seatnumber',
								readOnly : true,
								width :　210,
								allowBlank : true
							},{
								xtype : 'textfield',
								fieldLabel : '所有权性质',
								itemId : 'ownership',
								id : 'ownership',
								name : 'carInfo.ownership',
								readOnly : true,
								width :　210,
								allowBlank : true
							},{
								xtype : 'combo',
								fieldLabel : '燃料类型',
								itemId : 'fueltype',
								id : 'fueltype',
								name : 'carInfo.fueltype',
								width :　210,
								store : 'FuelTypeStore',
								editable: false,
								valueField : 'id',
								displayField : 'fueltype',
								readOnly : true,
								blankText : '请选择',
								allowBlank : true,
								cls : 'x-textfield'
							},{
								xtype : 'combo',
								fieldLabel : '当前状态',
								itemId : 'nowstatus',
								id : 'nowstatus',
								name : 'carInfo.nowstatus',
								width :　210,
								store : 'NowStatusStore',
								editable: false,
								valueField : 'id',
								displayField : 'nowstatus',
								readOnly : true,
								blankText : '请选择',
								allowBlank : true,
								cls : 'x-textfield'
							}]
	  				}, {
	  					columnWidth : .25,
	  					border:false,
	  					items : [{
								xtype : 'textfield',
								fieldLabel : '发动机排量',
								itemId : 'enginecapacity',
								id : 'enginecapacity',
								name : 'carInfo.enginecapacity',
								readOnly : true,
								width :　210,
								allowBlank : true
							},{
								xtype : 'textfield',
								fieldLabel : '排放标准',
								itemId : 'capacitystandard',
								id : 'capacitystandard',
								name : 'carInfo.capacitystandard',
								readOnly : true,
								width :　210,
								allowBlank : true
							},{
								xtype : 'datefield',
								fieldLabel : '入户日期',
								format:"Y-m-d",
								id : 'entertime',
								maxValue : new Date(),
								name : 'carInfo.entertime',
								readOnly : true,
								width :　210,
								anchor : '100%',
								allowBlank : true,
								cls : 'x-textfield'
							},{
								xtype : 'datefield',
								fieldLabel : '出厂日期',
								format:"Y-m-d",
								id : 'factorytime',
								maxValue : new Date(),
								name : 'carInfo.factorytime',
								readOnly : true,
								width :　210,
								anchor : '100%',
								allowBlank : true,
								cls : 'x-textfield'
							}]
	  					},{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
								xtype : 'textfield',
								fieldLabel : '财产险',
								itemId : 'proinsure',
								id : 'proinsure',
								name : 'carInfo.proinsure',
								readOnly : true,
								width :　210,
								allowBlank : true
							},{
								xtype : 'textfield',
								fieldLabel : '交强险',
								itemId : 'accinsure',
								id : 'accinsure',
								name : 'carInfo.accinsure',
								readOnly : true,
								width :　210,
								allowBlank : true
							},{
								xtype : 'textfield',
								fieldLabel : '乘座险',
								itemId : 'ridinsure',
								id : 'ridinsure',
								name : 'carInfo.ridinsure',
								readOnly : true,
								width :　210,
								allowBlank : true
							},{
								xtype : 'textfield',
								fieldLabel : '三责险',
								itemId : 'cominsure',
								id : 'cominsure',
								name : 'carInfo.cominsure',
								readOnly : true,
								width :　210,
								allowBlank : true
							}]
						},{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
								xtype : 'textfield',
								fieldLabel : '合同承包期(年)',
								itemId : 'contracttime',
								id : 'contracttime',
								name : 'carInfo.contracttime',
								readOnly : true,
								width :　210,
								labelWidth: 90,
								regex : /^[0-9]+$/,
								regexText : '只允许输入数字',
								allowBlank : true
							},{
								xtype : 'textfield',
								fieldLabel : '经营性质',
								itemId : 'management_nature',
								id : 'management_nature',
								name : 'carInfo.management_nature',
								readOnly : true,
								width :　210,
								allowBlank : true
							},{
								xtype : 'textfield',
								fieldLabel : '电子标签状态',
								itemId : 'electagstatus',
								id : 'electagstatus',
								name : 'carInfo.electagstatus',
								readOnly : true,
								width :　210,
								allowBlank : true
							},{
								xtype : 'textfield',
								fieldLabel : '车损险',
								itemId : 'dlwinsure',
								id : 'dlwinsure',
								name : 'carInfo.dlwinsure',
								readOnly : true,
								width :　210,
								allowBlank : true
							}]
						}]
	                }]
	          },
	           {
	              "xtype": "fieldset",
	              "title": "<b><font style='color:green'>营运证信息 </font></b>",
	              fieldDefaults: {
	              	buttonAlign : 'left',
		            labelAlign : 'right',
	  	        	labelWidth: 80
	  	   		 },
	  		   items : [{
	  			layout : 'column',
	  			columnWidth : 1,
	  			border:false,
	              items : [{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
								xtype : 'textfield',
								fieldLabel : '营运证号',
								name : 'carInfo.operatenumber',
								itemId : 'operatenumber',
								id : 'operatenumber',
								width :　210,
								anchor : '100%',
								cls : 'x-textfield',
								allowBlank : false,
								readOnly : true
								
							} ,{
								xtype : 'combo',
								fieldLabel : '营运状态',
								itemId : 'operatestatus',
								id : 'operatestatus',
								name : 'carInfo.operatestatus',
								width :　210,
								store : 'OperateStatusStore',
								editable: false,
								valueField : 'id',
								displayField : 'operatestatus',
								readOnly : true,
								cls : 'x-textfield'
							},{
	  							xtype : 'textfield',
								fieldLabel : '备注',
								itemId : 'entryremark',
								width :　210,
								id : 'entryremark',
								name : 'carInfo.entryremark',
								allowBlank : true
							}]
	  				}, {
	  					columnWidth : .25,
	  					border:false,
	  					items : [{
							xtype : 'textfield',
							fieldLabel : '营运性质',
							itemId : 'operateproperty',
							id : 'operateproperty',
							name : 'carInfo.operateproperty',
							width :　210,
//							regex : /^[1][358][0-9]{9}$/,
//							regexText : '手机号码不合法',
							allowBlank : true
						},{
								xtype : 'datefield',
								fieldLabel : '发证日期',
								format:"Y-m-d",
								id : 'licensetime',
								maxValue : new Date(),
								name : 'carInfo.licensetime',
								width :　210,
								anchor : '100%',
								allowBlank : true,
								cls : 'x-textfield'
							}]
	  					},{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
								xtype : 'textfield',
								fieldLabel : '办证类别',
								itemId : 'certificatetype',
								id : 'certificatetype',
								name : 'carInfo.certificatetype',
								width :　210,
								allowBlank : true
							} ,{
								xtype : 'datefield',
								fieldLabel : '首次登记日期',
								format:"Y-m-d",
								id : 'firstregisttime',
								maxValue : new Date(),
								name : 'carInfo.firstregisttime',
								width :　210,
								anchor : '100%',
								allowBlank : true,
								cls : 'x-textfield'
							} ]
						},{
	  						columnWidth : .25,
	  						border:false,
	  						items : [{
	  							xtype : 'textfield',
								fieldLabel : '录入人',
								itemId : 'entryperson',
								id : 'entryperson',
								name : 'carInfo.entryperson',
								allowBlank : true
							} ,{
								xtype : 'textfield',
								fieldLabel : '录入日期',
								name : 'carInfo.entrytime',
								anchor : '100%',
								itemId : 'entrytime',
								id : 'entrytime',
								maxLength : 512,
								maxLengthText : '最大长度不超过512位!',
								cls : 'x-textfield',
								allowBlank : true
							}]
						}]
	                }]
	          }
	      ]}]
});