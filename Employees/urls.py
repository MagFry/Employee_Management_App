"""
from django.conf.urls import url
from django.urls import path
from . import views

app_name = 'emp'

urlpatterns = [
    # Adding employee
    path('api/employees', views.add_employee),
    # Showing all employees
    path('api/employees/all', views.employees_list_all),
]
"""

from rest_framework import routers
from .api import EmployeeViewSet

router = routers.DefaultRouter()
router.register('api/employees', EmployeeViewSet, 'employees')

urlpatterns = router.urls
