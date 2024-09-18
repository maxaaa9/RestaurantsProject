from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.views import APIView
from .models import *
from .serializers import RestaurantSerializer, ProductSerializer, IngredientSerializer
from rest_framework.response import Response


# Create your views here.
class RestaurantView(APIView):
    def get(self, request):

        restaurant = Restaurants.objects.get(id=1)
        output = [{
            "id": restaurant.id,
            "name": restaurant.name,
            "address": restaurant.address,
            "capacity": restaurant.capacity,
            "rating": restaurant.rating,
        }]
        return Response(output)

    def post(self, request):
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


class ProductView(APIView):
    def get(self, request):
        output = [{'id': output.id,
                   'name': output.name,
                   'pack_capacity': output.pack_capacity,
                   'ingredients': output.ingredients_id}
                  for output in Product.objects.all()]
        return Response(output)


class IngredientView(APIView):
    def get(self, request):
        output = [{'ingredient': output.ingredient,
                   'protein': output.protein,
                   'carbohydrate': output.carbohydrate,
                   'fats': output.fats}
                  for output in Ingredients.objects.all()]
        return Response(output)


