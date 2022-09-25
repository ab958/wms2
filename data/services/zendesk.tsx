import axios from 'axios';

export const updateZendeskTicket = async (
  ticketID: number,
  ticketData: object
) => {
  try {
    const headers = {
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
