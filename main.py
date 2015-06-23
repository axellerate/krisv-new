from initialization import *
from models import *

class HomePage(MainHandler):
    def get(self):
        self.render('index.html')

class CurrentProjects(MainHandler):
    def get(self):
        self.render('current-projects.html')

class PastProjects(MainHandler):
    def get(self):
        self.render('past-projects.html')

class Coding(MainHandler):
    def get(self):
        self.render('coding.html')

class Science(MainHandler):
    def get(self):
        self.render('science.html')

class Environment(MainHandler):
    def get(self):
        self.render('environment.html')

class Future(MainHandler):
    def get(self):
        self.render('future.html')

class Contact(MainHandler):
    def get(self):
        self.render('contact.html')

class AboutMe(MainHandler):
    def get(self):
        self.render('about-me.html')

app = webapp2.WSGIApplication([
	('/', HomePage),
	('/current-projects', CurrentProjects),
	('/past-projects', PastProjects),
	('/coding', Coding),
	('/science', Science),
	('/environment', Environment),
	('/future', Future),
	('/contact', Contact),
	('/about-me', AboutMe)
], debug=True)