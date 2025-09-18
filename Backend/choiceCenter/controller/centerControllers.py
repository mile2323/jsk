from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from choiceCenter.models import ChoiceCenter
from choiceCenter.serializers import ChoiceCenterSerializer


@api_view(['GET', 'POST'])
def center_list(request,uid):
    if request.method == 'GET':
        centers = ChoiceCenter.objects.filter(id=uid)
        serializer = ChoiceCenterSerializer(centers , many=True)
        # print("Raw emails:", [supplier.taxInfo for supplier in suppliers])
        # print("Suppliers data:", serializer.data)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        data=request.data
        data['user']=uid


        serializer   = ChoiceCenterSerializer(data=data)
        print("Request data:", serializer.initial_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("Serializer errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def center_detail(request, pk):
    try:
        center = ChoiceCenter.objects.get(pk=pk)
    except ChoiceCenter.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ChoiceCenterSerializer(center)
        print("Center data:", serializer.data)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ChoiceCenterSerializer(center, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        center.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
