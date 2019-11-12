from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .models import Employee
from .serializers import EmployeeSerializer


@csrf_exempt
def employees_list_all(request):
    """
    List all employees.
    """
    if request.method == 'GET':
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(serializer.data, safe=False)