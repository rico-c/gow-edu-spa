import axios from 'axios';

export const fetchCountry = async () => {
  const ipRes = await axios.get('https://api.ipify.org?format=json')
  const ip = ipRes.data.ip;
  const countryRes = await axios.get(`https://api.ipstack.com/${ip}?access_key=2de4bdfdc365f99f9e15ffb6020deb17`)
  return countryRes.data.country_code
}