
from django.urls import path, include

urlpatterns = [
    # path('api/core/', include('core.urls')),
    path('api/admin/', include('Admin.urls')),
    path('api/placements/', include('PlacmentService.urls')),
    path('api/view/', include('view.urls')),

]