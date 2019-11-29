from django.db import models
from django.contrib.auth.models import User

class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False)
    surname = models.CharField(max_length=100, blank=False)
    email = models.EmailField(max_length=100,unique=True, blank=False)
    owner = models.ForeignKey(
        User, related_name="employees", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)