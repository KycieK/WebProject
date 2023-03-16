import http from '../http-common'
class EventDataService {
  getAll () {
    return http.get('/sportevent')
  }

  create (data) {
    return http.post('/sportevent', data)
  }

  get (id) {
    return http.get(`/sportevent/${id}`)
  }

  update (id, data) {
    return http.put(`/sportevent/${id}`, data)
  }

  delete (id) {
    return http.delete(`/sportevent/${id}`)
  }
}
export default new EventDataService()
