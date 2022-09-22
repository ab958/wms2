import axios from "axios";


export const createZendeskTicket = async (ticketData: object) => {
  try {
    const headers = {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem("url")}`,
      "Access-Control-Allow-Origin": "*"
    };

    let body ={
      headers,
      ticketData
    }

    const {data} = await axios.post('/api/zendex/createticket', body)

    console.log(data.response,"bbb")
    return {success: true, data};
  } catch (error) {
    console.log(error);
    return {success: false};
  }
};


export const updateZendeskTicket = async (ticketID: number, ticketData: object) => {

  try {
    const headers = {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem("url")}`,
      "Access-Control-Allow-Origin": "*"
    };

    let body ={
      headers,
      ticketData,
      ticketID
    }

    const {data} = await axios.post('/api/zendex/updateticket', body)
    console.log(data,"aaaaa")
    return {success: true, data};
  } catch (error) {
    console.log(error);
    return {success: false};
  }
};

