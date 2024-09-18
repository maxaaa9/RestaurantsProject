from django.utils import timezone

from django.db import models


class CreateDateLastUpdatedMixin(models.Model):

    created_date = models.DateTimeField(
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        abstract = True
