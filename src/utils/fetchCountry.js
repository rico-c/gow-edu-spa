import axios from 'axios';

export const fetchCountry = async () => {
  const ipRes = await axios.get('https://api.ipify.org?format=json')
  const ip = ipRes.data.ip;
  try {
    const countryRes = await axios.get(`https://api.ipstack.com/${ip}?access_key=2de4bdfdc365f99f9e15ffb6020deb17`, {timeout: 1500})
    return countryRes.data.country_code
  } catch (e) {
    return 'AU';
  }
}