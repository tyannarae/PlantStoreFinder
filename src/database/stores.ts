//this interface is for a single store in the Stores database
export interface Store {
    id: string,
    city: string,
    state: string,
    lat: number,
    lng: number,
    bussinessName: string,
    website?: string,
    address: string,
    phone?: string,
    igHandle?: string,
    fbHandle?: string,
    blurb: string,
    photos: Array<string>,
}
export interface MapCoordinates {
    lat: number,
    lng: number,
}
//each city will contain corrdinates for our map component plus the list of stores
export interface CityDetails {
    city: string, 
    state: string,
    mapCoordinates: MapCoordinates,
    stores: 
        Array<Store>,
}
//below is our database
export const Stores: Array<CityDetails> = [
  {
    city: "Austin",
    state: "Texas",
    mapCoordinates: {
      lat: 30.2672,
      lng: -97.7431,
    },
    stores: [
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", 
        "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", 
        "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", 
        "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", 
       ],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
      {
        id: 'eas1',
        city: "Austin",
        state: "Texas",
        lat: 30.261270,
        lng: -97.704220,
        bussinessName: "East Austin Succulents",
        website: "https://eastaustinsucculents.com/",
        address: "801 Tillery St, Austin, Texas 78702",
        phone: "(512)701-3448",
        igHandle: "https://www.instagram.com/eastaustinsucculents/",
        fbHandle: "https://www.facebook.com/east.austinsucculents",
        blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
        photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg", "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg"],
      },
      {
        id: 'tgo2',
        city: "Austin",
        state: "Texas",
        lat: 30.234770,
        lng: -97.757650,
        bussinessName: "The Great Outdoors",
        website: "http://gonursery.com/",
        address: "2730 S Congress Ave, Austin, TX 78704",
        phone: "(512)448-2992",
        igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
        fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
        blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
        photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
      },
    ],
  },
];
