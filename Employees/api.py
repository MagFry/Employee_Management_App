from .models import Employee
from rest_framework import viewsets, permissions
from .serializers import EmployeeSerializer

# Lead Viewset


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeSerializer