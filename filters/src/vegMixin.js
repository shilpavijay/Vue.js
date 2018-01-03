export const vegMixin = {
  data() {
        return {
         veg: ['carrot','cabbage','brinjal','avocado','broccoli'],
         filterText: ''
       }
      },
      computed: {
        filteredVeg() {
          return this.veg.filter((element) => {
            return element.match(this.filterText);
          });
        }
      }
};

