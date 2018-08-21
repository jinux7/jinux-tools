/**
 * @description 日期的一些操作
 */

/**
 * @name date_moment
 * @description 获取今日，本周，本月的日期
 * @params { type: String} 'today' 'week' 'month'
 * @return { Array } 今日['2018/08/20', '2018/08/20'] 本周['2018/08/19', '2018/08/25'] 本月['2018/08/01', '2018/08/31']
 */
const date_moment = {
  get(type) {
  	// 年月日之间的间隔符
    let splitStr = '/';

    if(type==='today') {
      let date = new Date();
      let y = date.getFullYear(),
          m = date.getMonth()+1>9?(date.getMonth()+1):('0'+(date.getMonth()+1)),
          d = date.getDate()>9?(date.getDate()):('0'+(date.getDate()));
      let dateStr = y + splitStr + m + splitStr + d ;
      return [dateStr, dateStr]
    }else if(type==='week'){
      let date = new Date(), arr = [];
      let y = date.getFullYear(),
          m = date.getMonth()+1>9?(date.getMonth()+1):('0'+(date.getMonth()+1)),
          w = date.getDay(),
          d = date.getDate();
      date.setDate(d-w);
      arr.push(y + splitStr + m + splitStr + date.getDate());
      date.setDate(date.getDate()+6);
      arr.push(y + splitStr + m + splitStr + date.getDate());
      return arr;      
    }else {
      let date = new Date(), arr = [], _m, d;
      let y = date.getFullYear(),
          m = date.getMonth()+1>9?(date.getMonth()+1):('0'+(date.getMonth()+1));
      arr.push(y + splitStr + m + splitStr + '01');
      _m = date.getMonth();
      date.setMonth(_m + 1);
      date.setDate(0);
      d = date.getDate();
      arr.push(y + splitStr + m + splitStr + d);
      return arr;
    }
  }
}

export { date_moment }