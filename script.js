// Sample property data
const properties = [
    {
        id: 1,
        title: "Modern Villa in Beverly Hills",
        price: "$2,500,000",
        address: "123 Sunset Blvd, Beverly Hills, CA",
        image: "assets/property1.jpg",
        type: "For Sale",
        beds: 4,
        baths: 3,
        sqft: 3200
    },
    {
        id: 2,
        title: "Luxury Penthouse with Ocean View",
        price: "$1,850,000",
        address: "456 Ocean Ave, Santa Monica, CA",
        image: "assets/property2.jpg",
        type: "For Sale",
        beds: 3,
        baths: 2.5,
        sqft: 2400
    },
    {
        id: 3,
        title: "Contemporary Downtown Loft",
        price: "$3,200/month",
        address: "789 Downtown St, Los Angeles, CA",
        image: "assets/property3.jpg",
        type: "For Rent",
        beds: 2,
        baths: 2,
        sqft: 1800
    },
    {
        id: 4,
        title: "Family Home with Garden",
        price: "$1,200,000",
        address: "321 Maple Dr, Pasadena, CA",
        image: "assets/property4.jpg",
        type: "For Sale",
        beds: 5,
        baths: 4,
        sqft: 3800
    }
];

// Sample agent data
const agents = [
    {
        id: 1,
        name: "Emily Johnson",
        title: "Senior Real Estate Agent",
        image: "assets/agent.jpg",
        phone: "+1 (555) 123-4567",
        email: "emily@luxuryestates.com"
    },
    {
        id: 2,
        name: "Michael Rodriguez",
        title: "Luxury Property Specialist",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        phone: "+1 (555) 987-6543",
        email: "michael@luxuryestates.com"
    },
    {
        id: 3,
        name: "Sophia Williams",
        title: "Commercial Real Estate",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        phone: "+1 (555) 456-7890",
        email: "sophia@luxuryestates.com"
    },
    {
        id: 4,
        name: "David Chen",
        title: "Property Investment Advisor",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        phone: "+1 (555) 234-5678",
        email: "david@luxuryestates.com"
    }
];

// DOM elements
const propertiesGrid = document.querySelector('.properties-grid');
const agentsGrid = document.querySelector('.agents-grid');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProperties();
    renderAgents();
    setupMobileMenu();
});

// Render properties to the page
function renderProperties() {
    propertiesGrid.innerHTML = '';
    
    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <div class="property-badge">${property.type}</div>
            </div>
            <div class="property-info">
                <h3 class="property-price">${property.price}</h3>
                <p class="property-title">${property.title}</p>
                <p class="property-address">${property.address}</p>
                <div class="property-features">
                    <div class="property-feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.beds} Beds</span>
                    </div>
                    <div class="property-feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.baths} Baths</span>
                    </div>
                    <div class="property-feature">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.sqft} sq.ft.</span>
                    </div>
                </div>
            </div>
        `;
        propertiesGrid.appendChild(propertyCard);
    });
}

// Render agents to the page
function renderAgents() {
    agentsGrid.innerHTML = '';
    
    agents.forEach(agent => {
        const agentCard = document.createElement('div');
        agentCard.className = 'agent-card';
        agentCard.innerHTML = `
            <div class="agent-image">
                <img src="${agent.image}" alt="${agent.name}">
            </div>
            <div class="agent-info">
                <h3>${agent.name}</h3>
                <p>${agent.title}</p>
                <div class="contact-info">
                    <p><i class="fas fa-phone"></i> ${agent.phone}</p>
                    <p><i class="fas fa-envelope"></i> ${agent.email}</p>
                </div>
                <div class="agent-social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        `;
        agentsGrid.appendChild(agentCard);
    });
}

// Setup mobile menu toggle
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('nav');
    
    mobileToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
}

// Sample search functionality
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box .btn');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        const filteredProperties = properties.filter(property => 
            property.title.toLowerCase().includes(searchTerm) ||
            property.address.toLowerCase().includes(searchTerm)
        );
        
        if (filteredProperties.length > 0) {
            // In a real app, we would update the properties grid
            alert(`Found ${filteredProperties.length} properties matching "${searchTerm}"`);
        } else {
            alert(`No properties found matching "${searchTerm}"`);
        }
    }
});