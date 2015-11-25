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

class Technology(MainHandler):
    def get(self):
        self.render('technology.html')

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

class AboutContact(MainHandler):
    def get(self):
        self.render('about-contact.html')

    def post(self):
        m = Messages()
        email = self.request.get("email")
        subject = self.request.get("subject")
        body = self.request.get("body")
        m.email = email
        m.subject = subject
        m.body = body
        m.put()
        self.redirect("/")
        
class Four_Month_Anniversary(MainHandler):
    def get(self):
        self.render('heart.html')

app = webapp2.WSGIApplication([
	('/', HomePage),
	('/current-projects', CurrentProjects),
	('/past-projects', PastProjects),
	('/coding', Coding),
	('/science', Science),
	('/environment', Environment),
	('/future', Future),
	('/contact', Contact),
	('/about-me', AboutMe),
    ('/four_month_anniversary', Four_Month_Anniversary),
    ('/technology', Technology),
    ('/about-contact', AboutContact)
], debug=True)