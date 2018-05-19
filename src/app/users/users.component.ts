import {Component, OnInit} from '@angular/core';

import {UsersService} from './services/users.service';
import {User} from './models/user.model';

@Component({
    selector: 'app-users',
    templateUrl: './templates/users.component.html'
})
export class UsersComponent implements OnInit {

    data: User[] = [];
    items: User[] = [];
    pageOptions = {
        page: 1,
        totalItems: 0,
        pageSize: 10
    };

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
                this.loadItems();
            });
    }

    /**
     * Load users list
     */
    // TODO: Always load from server (modify server side)
    loadItems(): void {

        console.log(this.pageOptions);
        const currentPos = (this.pageOptions.page - 1) * this.pageOptions.pageSize;

        this.items = this.data.slice(currentPos, currentPos + this.pageOptions.pageSize);

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

}