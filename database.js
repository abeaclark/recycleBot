// JSON mock-up of a few resources
var database = {
  locations: [
    {
      Name: 'Household Hazardous Waste Collection',
      City: 'Redwood City',
      State: 'CA',
      Address: '1458 El Camino Real',
      Zip:  '94063',
      Phone: '(650) 363-4718',
      Appointment: 'http://events.smhealth.org/events/EditContact.aspx,',
      URL: 'http://www.smchealth.org/hhw',
      Accepts: [
        'paint',
        'thinner',
        'varnish',
        'stain',
        'garden',
        'pool chemicals',
        'hobby chemicals',
        'cleaner',
        'aerosol',
        'bulbs',
        'propane',
        'gasoline',
        'thermometers',
        'mercury'
      ],
      Fee: null,
      Hours: null
    },
    {
      Name: 'Firestone Store',
      City: 'Redwood City',
      State: 'CA',
      Address: '1458 El Camino Real',
      Zip:  '94064',
      Phone: '(650) 364-1900',
      Appointment: null,
      URL: 'http://www.smchealth.org/hhw',
      Accepts: [
        'bateries',
        'parts',
        'tires',
        'oil',
        'filters'
      ],
      fee: null,
      Hours: '8am to 5pm, Everyday'
    }
  ],
  users = {}
]

module.exports = database


