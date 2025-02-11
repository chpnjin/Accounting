import axios from "./_axios";
//模擬讀取等待
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default {
  //取得傳票清單
  async getVoucherList(searchCondition) {
    let response = await axios.post("Voucher/List", searchCondition);
    let data;

    if (response.statusText == "OK") {
      data = response.data;

      data.forEach(item => {
        item.entry_date = item.entry_date.split('T')[0];
      });

      return data;
    } else {
      return [];
    }
  },//取得交易明細
  async getVoucherDetail(no) {
    let result = await axios.get(`Voucher/GetDetail?no=${no}`);

    if (result.data.master && result.data.detail) {
      //日期轉換
      let entry_date = result.data.master.entry_date.split('T')[0];
      result.data.master.entry_date = entry_date;
      return result.data;
    } else {
      console.error(result.statusText);
      return null;
    }
  },//編輯傳票
  async editVoucher(data) {
    let result;
    //新增|編輯寫入
    result = await axios.post("Voucher/Edit", data);

    return result.data;
  }
}
