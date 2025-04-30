import json
from http.server import BaseHTTPRequestHandler


class SampleServer(BaseHTTPRequestHandler):

    def get_post_data(self):
        # Read the length of the body, as supplied in the request, so the program knows how much to read.
        content_length = int(self.headers['Content-Length'])
        # Call in-built (parent) function to get HTTP posted content. Read up to supplied content length.
        post_data = self.rfile.read(content_length)
        # From bytes to a JSON string.
        return json.loads(post_data)

    def send_post_response(self, data):
        self._set_response()
        # Convert any response to string, and then to bytes.
        self.wfile.write(str(data).encode())

    def _set_response(self):
        # Sending a '200' response is code for everything is OK.
        self.send_response(200)
        # Inform the requester that the response type is text.
        # Really we should also return JSON for consistency, but for simplicity we shall respond in text.
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
