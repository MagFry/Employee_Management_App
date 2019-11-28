from django.db import models

class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False)
    surname = models.CharField(max_length=100, blank=False)
    email = models.EmailField(max_length=100,unique=True, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)