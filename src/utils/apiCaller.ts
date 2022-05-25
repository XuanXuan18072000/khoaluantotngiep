import * as Config from '../constants/Config'
import axios from 'axios'

const apiCaller = async (endpoint: string, method: any, body?: any, page?:number) => {
  try {
    const res = await axios(`${Config.API_URL}/${endpoint}?page=${page}&limit=5`, {
      method: method,
      data: body,
    })
    return res
  } catch (err) {
    console.error(err)
  }
}

export default apiCaller
