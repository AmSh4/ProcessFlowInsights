import requests

def test_api():
    response = requests.post('http://localhost:5000/api/analyze', files={'file': open('sample.csv', 'rb')})
    assert response.status_code == 200
    print('API test passed')

if __name__ == '__main__':
    test_api()