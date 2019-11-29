from .models import Employee
from rest_framework import viewsets, permissions
from .serializers import EmployeeSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = EmployeeSerializer

    def get_queryset(self):
        return self.request.user.employees.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)