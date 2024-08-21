from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def calculate(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        water_usage = float(data['water_usage'])
        energy_usage = float(data['energy_usage'])

        # Dummy calculations (replace with actual rates and calculations)
        water_cost = water_usage * 0.01  # $0.01 per gallon
        energy_cost = energy_usage * 0.12  # $0.12 per kWh
        total_cost = water_cost + energy_cost
        potential_savings = total_cost * 0.2  # Assume 20% potential savings

        return JsonResponse({
            'water_cost': round(water_cost, 2),
            'energy_cost': round(energy_cost, 2),
            'total_cost': round(total_cost, 2),
            'potential_savings': round(potential_savings, 2)
        })

    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def get_usage_history(request):
    if request.method == 'GET':
        # Dummy data (replace with database query)
        history = [
            {'month': 'January', 'water_usage': 50000, 'energy_usage': 10000},
            {'month': 'February', 'water_usage': 48000, 'energy_usage': 9500},
            {'month': 'March', 'water_usage': 52000, 'energy_usage': 10500},
        ]
        return JsonResponse({'history': history})

    return JsonResponse({'error': 'Invalid request method'}, status=400)
