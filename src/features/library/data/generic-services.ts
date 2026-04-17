import type { ServiceDefinition } from '@/shared/types';

export const genericServices: ServiceDefinition[] = [
    { id: 'generic-server', label: 'Server', provider: 'generic', serviceType: 'Server', icon: 'generic-server', category: 'compute', defaultColor: '#3b82f6' },
    { id: 'generic-database', label: 'Database', provider: 'generic', serviceType: 'Database', icon: 'generic-database', category: 'database', defaultColor: '#3b82f6' },
    { id: 'generic-network', label: 'Network', provider: 'generic', serviceType: 'Network', icon: 'generic-network', category: 'networking', defaultColor: '#3b82f6' },
    { id: 'generic-storage', label: 'Storage', provider: 'generic', serviceType: 'Storage', icon: 'generic-storage', category: 'storage', defaultColor: '#3b82f6' },
    { id: 'generic-compute', label: 'Compute', provider: 'generic', serviceType: 'Compute', icon: 'generic-compute', category: 'compute', defaultColor: '#3b82f6' },
    { id: 'generic-computer', label: 'Computer', provider: 'generic', serviceType: 'Computer', icon: 'generic-computer', category: 'compute', defaultColor: '#3b82f6' },
    { id: 'generic-users', label: 'Users', provider: 'generic', serviceType: 'Users', icon: 'generic-users', category: 'actors', defaultColor: '#3b82f6' },
    { id: 'generic-react', label: 'React', provider: 'generic', serviceType: 'React', icon: 'generic-react', category: 'other', defaultColor: '#3b82f6' },
    { id: 'generic-json', label: 'JSON', provider: 'generic', serviceType: 'JSON', icon: 'generic-json', category: 'other', defaultColor: '#3b82f6' },
    { id: 'generic-mobile-app', label: 'Mobile App', provider: 'generic', serviceType: 'Mobile App', icon: 'generic-mobile-app', category: 'clients', defaultColor: '#3b82f6' },
    { id: 'generic-web-app', label: 'Web App', provider: 'generic', serviceType: 'Web App', icon: 'generic-web-app', category: 'clients', defaultColor: '#3b82f6' },
    { id: 'generic-iot-device', label: 'IoT Device', provider: 'generic', serviceType: 'IoT Device', icon: 'generic-iot-device', category: 'clients', defaultColor: '#3b82f6' },
    { id: 'generic-external-api', label: 'External API', provider: 'generic', serviceType: 'External API', icon: 'generic-external-api', category: 'clients', defaultColor: '#3b82f6' },
    { id: 'generic-developer', label: 'Developer', provider: 'generic', serviceType: 'Developer', icon: 'generic-developer', category: 'actors', defaultColor: '#3b82f6' },
    { id: 'generic-admin', label: 'Admin', provider: 'generic', serviceType: 'Admin', icon: 'generic-admin', category: 'actors', defaultColor: '#3b82f6' },
    { id: 'generic-internet', label: 'Internet', provider: 'generic', serviceType: 'Internet', icon: 'generic-internet', category: 'other', defaultColor: '#3b82f6' },
    { id: 'generic-cloud', label: 'Cloud', provider: 'generic', serviceType: 'Cloud', icon: 'generic-cloud', category: 'other', defaultColor: '#3b82f6' },
    { id: 'generic-text', label: 'Text', provider: 'generic', serviceType: 'Text', icon: 'generic-text', category: 'other', defaultColor:'#3b82f6'},
    { id: 'generic-note', label: 'Note', provider: 'generic', serviceType: 'Note', icon: 'generic-note', category: 'other', defaultColor: '#facc15' },
];
