from google.appengine.ext import ndb



class Messages(ndb.Model):
	created = ndb.DateTimeProperty(auto_now_add = True)
	updated = ndb.DateTimeProperty(auto_now = True)
	email = ndb.StringProperty()
	subject = ndb.StringProperty()
	body = ndb.TextProperty()