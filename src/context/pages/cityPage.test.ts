import {mapStoreIdsToIndex} from "./cityPage";

    describe("mapStoreIdsToIndex function call", () => {
      let stores = [
        {
          id: 'eas1',
          city: "Austin",
          state: "Texas",
          lat: 30.261270,
          lng: -97.704220,
          bussinessName: "East Austin Succulents",
          website: "https://eastaustinsucculents.com/",
          address: "801 Tillery St, Austin, Texas 78702",
          phone: "+15127013448",
          igHandle: "https://www.instagram.com/eastaustinsucculents/",
          fbHandle: "https://www.facebook.com/east.austinsucculents",
          blurb: "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
          photos: ["https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg", "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/145499779_2747114298833410_4804550472908776278_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=m8GKm03jtM8AX9BoqT8&_nc_ht=scontent-dfw5-2.xx&oh=d035251d68c89d247ed4a24064897527&oe=606D4915", "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/132018400_2717071651837675_1105403803744973353_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_ohc=cC970Oqm4UMAX886NpF&_nc_ht=scontent-dfw5-2.xx&oh=e97c74040dac84243723c2350fe3a228&oe=606B8735"],
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
          phone: "+15124482992",
          igHandle: "https://www.instagram.com/greatoutdoorsaustin/",
          fbHandle: "https://www.facebook.com/GreatOutdoorsNursery",
          blurb: "Under a sprawling canopy of oaks, we’ve been supplying South Austin with all manner of succulents, cacti, veggies, herbs, pottery, plants and more.",
          photos: ["https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/ba45a66f1f6c4205bb84140f9a0b2a34/1/4SoifmQp45JMgBnHp7ed2/download-3.jpg", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d67265fd14e1494c84307a2973d0d8e7/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0041.jpg?dpr=2", "https://static.spacecrafted.com/d078d55d64e54701ae679f035f8e1ebf/i/d0d307d842c24b12a91fd6363e42b329/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0294.jpg?dpr=2"],
        },
      ]
      it("calling mapStoreIdsToIndex function returns object of store ids and index to context", () => {
        const storeIdsObject = mapStoreIdsToIndex(stores); //pass the stores array here.
        const value = {"eas1": 0, "tgo2": 1}
        expect(storeIdsObject).toEqual(value);

      });
    });