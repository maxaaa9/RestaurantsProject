from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from djangoRestaurantsProject.Restaurants.custom_mixins import CreateDateLastUpdatedMixin


# Create your models here.
class Restaurants(CreateDateLastUpdatedMixin):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    capacity = models.PositiveIntegerField()
    rating = models.DecimalField(
        max_digits=3,
        decimal_places=2,
        validators=[
            MinValueValidator(0.00),
            MaxValueValidator(5.00)]
    )
    restaurant_menu = models.ManyToManyField(to='Product')

    def __str__(self):
        return self.name


class Product(CreateDateLastUpdatedMixin):
    restaurant = models.ForeignKey(to=Restaurants, on_delete=models.CASCADE, default=None)
    name = models.CharField(
        max_length=100,
        unique=True)
    pack_capacity = models.PositiveIntegerField()
    ingredients = models.ForeignKey(
        to='Ingredients',
        on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Ingredients(models.Model):
    ingredient = models.TextField()
    protein = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        validators=[MinValueValidator(0.00)],
        blank=True,
        null=True
    )
    carbohydrate = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        validators=[MinValueValidator(0.00)],
        blank=True,
        null=True
    )
    fats = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        validators=[MinValueValidator(0.00)],
        blank=True,
        null=True
    )

