from rest_framework import routers
from .api import ProjectViewSet

# urlpatterns = [
# Podemos crearlo manualmente pero restframework ya tiene integrado un sistema de rutas
# ]

router = routers.DefaultRouter()

router.register('api/projects', ProjectViewSet, 'projects')

# Router crea los urls para get put post y demas
urlpatterns = router.urls



