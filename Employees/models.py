from django.db import models

class Employee(models.Model):
    employee_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100,unique=True)
    created_at = models.DateTimeField(auto_now_add=True)