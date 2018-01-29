Ext.define("OtaApp.model.OtaListModel",{
	extend : 'Ext.data.Model',  
    fields : [{  
                name : 'id',  
                type : 'int',  
                useNull : true//这样数字如果值为空则不会自动转成0,则提交时注意后台bean类中的属性int要用对象类型，否则解析出错  
            }, {  
                name : 'blocid',  
                type : 'int',
            },  {  
                name : 'blocname',  
                type : 'string'  
            }, {  
                name : 'carnumber',  
                type : 'string'  
            }, {  
                name : 'carid',  
                type : 'int'  
            }, {  
                name : 'inlinetime',  
                type : 'string'  
            }, {  
                name : 'offlinetime',  
                type : 'string'  
            }, {  
                name : 'passengertime',  
                type : 'string'  
            }, {  
                name : 'drivertime',  
                type : 'string'  
            }, {  
                name : 'drivermile',  
                type : 'string'  
            }, {  
                name : 'emptymile',  
                type : 'string'  
            }, {  
                name : 'passengermile',  
                type : 'string'  
            }, {  
                name : 'alarmcount',  
                type : 'string'  
            }, {  
                name : 'sumdrivermila',  
                type : 'string'  
            }, {  
                name : 'waittime',  
                type : 'string'  
            }, {  
                name : 'feetime',  
                type : 'string'  
            }, {  
                name : 'passengercount',  
                type : 'string'  
            }, {  
                name : 'createtime',  
                type : 'string'  
            }, {  
                name : 'income',  
                type : 'string'  
            }],  
    idProperty : 'id'// 极为重要的配置。关系到表格修改数据的获取 
 });