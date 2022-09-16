"""
GCP uses flask to run a python webserver in python runtime cloud function
"""

def main(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    request_json = request.get_json()
    if request.args and 'data' in request.args:
        data = request.args.get('data')
    elif request_json and 'data' in request_json:
        data = request_json['data']
    else:
        return f'Invalid request!'
    x1, x2, x3 = data[0], data[1], data[2]
    prediction = add(x1, x2, x3)
    return {"sum": prediction}

def add(x1, x2, x3):
  return int(x1) + int(x2) + int(x3)
  