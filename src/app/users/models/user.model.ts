export class User {
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