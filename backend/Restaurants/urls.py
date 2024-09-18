from django.urls import path, include
from .views import *

urlpatterns = [
    path('/restaurants/1/products/', RestaurantView.as_view(), name='restaurant'),
    path('products', ProductView.as_view(), name='products'),
    path('ingredient', IngredientView.as_view(), name='ingredient'),
]
