(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11df2aac"],{3638:function(a,t,e){},7417:function(a,t,e){"use strict";var s=e("a6a4"),l=e.n(s);l.a},a1dd:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"className"},[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",[a._v("基础表格")])]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,border:""}},[e("el-table-column",{attrs:{prop:"date",label:"日期"}}),e("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1),e("el-card",{staticClass:"mtop30 anoCard"},[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",[a._v("带分页表格")])]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tablePage,border:"",stripe:""}},[e("el-table-column",{attrs:{prop:"num",label:"序号",width:"120"}}),e("el-table-column",{attrs:{prop:"id",label:"ID#"}}),e("el-table-column",{attrs:{prop:"name",label:"产品名称"}}),e("el-table-column",{attrs:{prop:"price",label:"价格"}}),e("el-table-column",{attrs:{prop:"quantity",label:"数量"}}),e("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("el-tag",{attrs:{type:a._f("tagClass")(t.row.status)}},[a._v(a._s(a._f("statusText")(t.row.status)))])]}}])})],1),e("el-pagination",{staticClass:"fyDiv",attrs:{background:"",layout:"total, sizes, prev, pager, next","page-sizes":a.pageSizes,"page-size":a.pageSize,"current-page":a.currentPage,total:a.total},on:{"size-change":a.handleSize,"current-change":a.handlePage}})],1)],1)},l=[],n={data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],currentPage:1,pageSize:10,total:0,pageSizes:[10,20,30,40],tablePage:[]}},created:function(){this._getPageTab1()},filters:{statusText:function(a){if(void 0!==a)return 0===a?"已完成":1===a?"进行中":"已取消"},tagClass:function(a){if(void 0!==a)return 0===a?"success":1===a?"warning":"danger"}},methods:{handleSize:function(a){this.pageSize=a,this._getPageTab1(this.currentPage,a)},handlePage:function(a){this.currentPage=a,this._getPageTab1(a,this.pageSize)},_getPageTab1:function(a,t){window.console.log(a,t),this.total=1,this.tablePage=[{num:11,id:1132,name:"小米",price:100,quantity:99,status:1}]}}},r=n,i=(e("af02"),e("7417"),e("2877")),o=Object(i["a"])(r,s,l,!1,null,"c812a090",null);t["default"]=o.exports},a6a4:function(a,t,e){},af02:function(a,t,e){"use strict";var s=e("3638"),l=e.n(s);l.a}}]);