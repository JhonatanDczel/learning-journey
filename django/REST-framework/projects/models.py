from django.db import models


# Create your models here.

class Project(models.Model):
  title = models.CharField(max_length=200)
  description = models.TextField()
  tecnology = models.CharField(max_length=200)
  createdAdd = models.DateTimeField(auto_now_add=True)
