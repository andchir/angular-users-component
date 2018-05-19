import {Component, OnInit} from '@angular/core';

import {UsersService} from './services/users.service';
import {User} from './models/user.model';

@Component({
    selector: 'app-users',
    templateUrl: './templates/users.component.html'
})
export class UsersComponent implements OnInit {

    data: User[] = [];
    filteredData: User[] = [];
    items: User[] = [];
    pageOptions = {
        page: 1,
        totalItems: 0,
        pageSize: 10
    };
    filters = {
        lastName: '',
        phone: '',
        city: '',
        dateOfBirth: ''
    };
    filtersTimer: any;

    constructor(
        private dataService: UsersService
    ) { }

    ngOnInit() {
        this.getList();
    }

    /**
     * Get data
     */
    getList(): void {
        this.dataService.getItemsList()
            .subscribe((res) => {
                this.data = res.results;
                this.pageOptions.page = res.info.page;
                this.pageOptions.totalItems = res.info.results;
                this.filterItems(this.data);
                this.loadItems();
            });
    }

    /**
     * Load users list
     */
    loadItems(): void {
        this.pageOptions.totalItems = this.filteredData.length;
        const currentPos = (this.pageOptions.page - 1) * this.pageOptions.pageSize;
        this.items = this.filteredData.slice(currentPos, currentPos + this.pageOptions.pageSize);
    }

    onChangePageSize(): void {
        this.pageOptions.pageSize = parseInt(String(this.pageOptions.pageSize));
        this.pageOptions.page = 1;
        this.loadItems();
    }

    onChangePage(page: number): void {
        this.pageOptions.page = page;
        this.loadItems();
    }

    /**
     * Filter items
     */
    filterItems(items: User[]): void {
        this.filteredData = [];
        items.forEach((item) => {
            if (this.filtersValidation(item)) {
                this.filteredData.push(item);
            }
        });
    }

    /**
     * Validation by filter
     * @param item
     * @returns {boolean}
     */
    filtersValidation(item: User): boolean {
        let filterValue, result = true;
        for (let name in this.filters) {
            if (this.filters.hasOwnProperty(name)) {
                filterValue = this.filters[name];
                if (!filterValue) {
                    continue;
                }
                switch (name) {
                    case 'lastName':
                    case 'phone':
                    case 'city':
                        result = (new RegExp(`^${filterValue}`, 'i')).test(User.getValueForFilter(name, item));
                        break;
                }
                if (!result) {
                    break;
                }
            }
        }
        return result;
    }

    filtersUpdate(): void {
        clearTimeout(this.filtersTimer);
        this.filtersTimer = setTimeout(() => {
            this.pageOptions.page = 1;
            this.filterItems(this.data);
            this.loadItems();
        }, 700);
    }

    filtersClear(): void {
        for (let name in this.filters) {
            if (this.filters.hasOwnProperty(name)) {
                this.filters[name] = '';
            }
        }
        this.pageOptions.page = 1;
        this.filterItems(this.data);
        this.loadItems();
    }

}