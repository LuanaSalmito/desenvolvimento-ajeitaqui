from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('AjeitaQui/', include('ajeitaqui.urls')),
    path('', include('ajeitaqui.urls')),  # Substitua 'suaapp' pelo nome do aplicativo que você deseja que a raiz aponte
]