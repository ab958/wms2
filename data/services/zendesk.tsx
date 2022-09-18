import axios from "axios";


export const createZendeskTicket = async (ticketData: object) => {
  try {
    const headers = {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem("url")}`,
      "Access-Control-Allow-Origin": "*"
    };

    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_ZENDESK_URL}/api/v2/tickets.json`, ticketData,{
      headers
    })
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

    const {data} = await axios.put(`${process.env.NEXT_PUBLIC_ZENDESK_URL}/api/v2/tickets/${ticketID}.json`, ticketData,{
      headers
    })
    return {success: true, data};
  } catch (error) {
    console.log(error);
    return {success: false};
  }
};

