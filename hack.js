// Initialize additional functionality for the page

// Function to update weather (simulated)
function updateWeather() {
    const weatherConditions = ['Clear', 'Storm', 'Flood'];
    const currentWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    document.getElementById('weather-status').textContent = currentWeather;
}

// Function to calculate the nearest resource (simulated for now)
function findNearestResource(resources, userLocation) {
    let nearest = null;
    let shortestDistance = Infinity;

    resources.forEach(resource => {
        const distance = Math.sqrt(
            Math.pow(resource.lat - userLocation.lat, 2) + Math.pow(resource.lng - userLocation.lng, 2)
        );

        if (distance < shortestDistance) {
            shortestDistance = distance;
            nearest = resource;
        }
    });

    return nearest;
}

// Simulated user location
const userLocation = { lat: 51.505, lng: -0.09 };

// Update nearest resources
function updateNearestResources() {
    const foodResources = [{ type: 'Food', lat: 51.509, lng: -0.08 }];
    const medicineResources = [{ type: 'Medicine', lat: 51.510, lng: -0.085 }];

    const nearestFood = findNearestResource(foodResources, userLocation);
    const nearestMedicine = findNearestResource(medicineResources, userLocation);

    
}

// Escape plan functionality
document.getElementById('escape-plan-btn').addEventListener('click', () => {
    alert('Escape plan coming soon!');
    // Integrate escape route logic here if needed
});

// Periodic updates
setInterval(updateWeather, 10000); // Update weather every 10 seconds
setInterval(updateNearestResources, 5000); // Update nearest resources every 5 seconds
