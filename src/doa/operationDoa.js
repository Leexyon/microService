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

/*
*修改banner
*/ 
commonDoa.changeBanner = (params) => {
	
	let _changeSql =  'UPDATE banner SET title = ?,bannerUrl = ?,bannerLink = ? WHERE Id = ?'
	let _changeSqlParams =   [params.title,params.bannerUrl,params.bannerLink,params.id]
	return mysqlUtils.updataSql(_changeSql,_changeSqlParams )
}
/*
	
*/ 
commonDoa.addDuanzi = (params) =>{
	let _addSql =  'INSERT INTO duanzi(english,chinaese,datatime) VALUES(?,?,?)'
	let _addSqlParams =   [params.english,params.chinaese,params.datatime]
	return mysqlUtils.addSql(_addSql,_addSqlParams )
}
commonDoa.getDuanzi = () => {
	let _sql = `SELECT * FROM duanzi`
	return mysqlUtils.querySql(_sql)
}
commonDoa.deleteDuanzi = (params) => {
	var idDet = params.id
	console.log(idDet)
	let _delSql =  'DELETE FROM duanzi where id='+idDet
	return mysqlUtils.deleteSql(_delSql )
}
commonDoa.changeDuanzi = (params) => {
	let _delSql =  'UPDATE duanzi SET english = ?,chinaese = ?,datatime = ? WHERE Id= ?';
	let _changeSqlParams =  [params.english,params.chinaese,params.datatime,params.id]
	return mysqlUtils.updataSql(_delSql,_changeSqlParams)
}

/*
* 获取推荐
*/
commonDoa.findReference = () => {
	let _sql = `SELECT * FROM reference`
  	return mysqlUtils.querySql( _sql)
}
/*
*添加推荐
*/ 
commonDoa.addReference = (params) => {
	let _addSql =  'INSERT INTO reference(title,courseUrl,courseLink,courseId,members) VALUES(?,?,?,?,?)'
	let _addSqlParams =   [params.title,params.courseUrl,params.courseLink,params.courseId,params.members]
	return mysqlUtils.addSql(_addSql,_addSqlParams )
}
/*
*删除推荐
*/ 
commonDoa.deleteReference = (params) => {
	var idDet = params.id
	let _delSql =  'DELETE FROM reference where id='+idDet
	return mysqlUtils.deleteSql(_delSql )
}

/*
*修改推荐
*/ 
commonDoa.changeReference = (params) => {
	
	let _changeSql =  'UPDATE reference SET title = ?,courseUrl = ?,courseLink = ?,courseId = ?,members = ? WHERE Id = ?'
	let _changeSqlParams =   [params.title,params.courseUrl,params.courseLink,params.courseId,params.members,params.id]
	return mysqlUtils.updataSql(_changeSql,_changeSqlParams )
}


// 暴露对象ｕｓｅｒＤｏａ
module.exports = commonDoa