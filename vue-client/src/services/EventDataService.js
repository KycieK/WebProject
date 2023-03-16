import http from '../http-common'
class EventDataService {
  getAll () {
    return http.get('/sportEvent')
  }

  create (data) {
    return http.post('/sportEvent', data)
  }

  get (id) {
    return http.get(`/sportEvent/${id}`)
  }

  update (id, data) {
    return http.put(`/sportEvent/${id}`, data)
  }

  delete (id) {
    return http.delete(`/sportEvent/${id}`)
  }
}
export default new EventDataService()
