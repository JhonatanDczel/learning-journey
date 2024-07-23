from .models import Project
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
  # Que datos servirá la api
  queryset = Project.objects.all()
  # Quinenes van a poder llamar a la api
  permission_classes = [permissions.AllowAny]
  # Cómo obtendremos los datos
  serializer_class = ProjectSerializer