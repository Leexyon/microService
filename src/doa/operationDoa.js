/*
@lixiang
*/
const mysqlUtils = require('../../model/mysqlUtil.js');
let commonDoa = {}


/*
  查询banner
*/
commonDoa.findBannerList = () => {
	let _sql = `SELECT * FROM banner`
  	return mysqlUtils.querySql( _sql)
}
/*
*插入banner
*/ 
commonDoa.addBanner = (params) => {
	let _addSql =  'INSERT INTO banner(title,bannerUrl,bannerLink) VALUES(?,?,?)'
	let _addSqlParams =   [params.title,params.bannerUrl,params.bannerLink]
	return mysqlUtils.addSql(_addSql,_addSqlParams )
}
/*
*删除banner
*/ 
commonDoa.deleteBanner = (params) => {
	var idDet = params.id
	console.log(idDet);
	let _delSql =  'DELETE FROM banner where id='+idDet
	return mysqlUtils.deleteSql(_delSql )
}


// 暴露对象ｕｓｅｒＤｏａ
module.exports = commonDoa