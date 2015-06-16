from initialization import *
from models import *

class HomePage(MainHandler):
    def get(self):
    	if self.user:
        	self.render('index.html', username = self.user.username)
        else:
        	self.render('index.html')

    def post(self):
			username = self.request.get('username').lower()
			password = self.request.get('password')

			u = User.login(username, password)
			if u:
				self.login(u)
				self.redirect('/')
			else:
				msg = 'error'
				self.render('index.html', error = msg)


app = webapp2.WSGIApplication([
	('/', HomePage)
], debug=True)