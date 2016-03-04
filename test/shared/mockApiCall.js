import nock from 'nock';

/**
 * Test utility function that mocks a specific API call, and allows returning a status code and
 * value.
 */
export default function mockApiCall({
  method,
  path,
  params,
  returnCode = 200,
  returnValue = '{}',
}) {
  if (method === 'get') {
    if (params) {
      return nock('http://localhost:5000')
        .get(path).query(params).reply(returnCode, returnValue);
    }
    return nock('http://localhost:5000')
      .get(path).reply(returnCode, returnValue);
  }
  return nock('http://localhost:5000')[method.toLowerCase()](path, params)
    .reply(returnCode, returnValue);
}
