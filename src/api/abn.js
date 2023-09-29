import axios from 'axios'

export const fetchAbn = (number) => {
  try {
    return axios.get(
      `https://abr.business.gov.au/json/AbnDetails.aspx?callback=abnCallback&guid=c4915152-6f9b-4e77-b444-cd46c0ae2205&abn=${number}`
    ).then(res => {
      const r = res.data.replace('abnCallback(', '');
      return JSON.parse(r.slice(0, -1))
    })
  } catch (e) {
    alert(e)
  }

}