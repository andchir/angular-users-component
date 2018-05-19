export class User {

    /**
     * Get user value for filter
     * @param filterName
     * @param item
     * @returns {string}
     */
    static getValueForFilter(filterName: string, item: User): string {
        let value = '';
        switch (filterName) {
            case 'lastName':
                value = item.name.last;
                break;
            case 'phone':
                value = item.phone;
                break;
            case 'city':
                value = item.location.city;
                break;
            case 'dateOfBirth':
                value = item.dob;
                break;
        }
        return value;
    }

    constructor(
        public id: {
            name: string,
            value: string
        },
        public cell: string,
        public dob: string,
        public email: string,
        public gender: string,
        public phone: string,
        public name: {
            first: string
            last: string
            title: string
        },
        public location: {
            city: string,
            postcode: string,
            state: string,
            street: string
        }
    ) { }
}