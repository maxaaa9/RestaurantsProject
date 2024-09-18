from rest_framework import serializers
from .models import Restaurants, Product, Ingredients


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)

    class Meta:
        model = Product
        fields = '__all__'


class RestaurantSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)

    class Meta:
        model = Restaurants
        fields = '__all__'
