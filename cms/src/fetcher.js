
const exports = {}

exports.handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
exports.parseResponse = (response) => response.text().then(text => JSON.parse(text))

exports.get = (url) => fetch(url, {method: 'GET'})
                                .then(exports.handleErrors)
                                .then(response => exports.parseResponse(response))
                                .catch(error => {
                                  console.log(error)
                                })
exports.post = (url, body, headers) => fetch(url, {method: 'POST', body: JSON.stringify(body), headers})
                                .then(exports.handleErrors)
                                .then(response => exports.parseResponse(response))
                                .catch(error => {
                                  console.log(error)
                                })

export default exports
