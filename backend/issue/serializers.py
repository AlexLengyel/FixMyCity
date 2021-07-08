from django.db.models import Avg
from rest_framework import serializers
from issue.models import Issue
from user.serializers import UserSerializer


class IssueSerializer(serializers.ModelSerializer):
    # like_count = serializers.SerializerMethodField(read_only=True)
    user = UserSerializer(read_only=True)

    def get_issue_count(obj):
        return obj.issue.count()

    class Meta:
        model = Issue
        fields = ['id', 'title', 'content', 'user', 'longitude', 'latitude', 'city', 'zip', 'image',
                  'created', 'modified']
        read_only_fields = ['id', 'created', 'modified', 'user', 'liked_by']


class CreateIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ['id', 'title', 'longitude', 'latitude', 'city', 'zip', 'image', 'created', 'modified']
        read_only_fields = ['id', 'created', 'modified']