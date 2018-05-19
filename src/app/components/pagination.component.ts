import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from "lodash";

@Component({
    selector: 'pagination',
    template: `
        <nav aria-label="pagination" *ngIf="totalPages > 1">
            <ul class="pagination">
                <li class="page-item" [ngClass]="{'disabled': page == 1}">
                    <a class="page-link" tabindex="-1" href="#" (click)="setPage(page - 1, $event)">
                        &laquo;
                    </a>
                </li>
                <li class="page-item" *ngFor="let number of pagesNumbers" [ngClass]="{'active': number === page}">
                    <a class="page-link" href="#" (click)="setPage(number, $event)">{{number}}</a>
                </li>
                <li class="page-item" [ngClass]="{'disabled': page == totalPages}">
                    <a class="page-link" href="#" (click)="setPage(page + 1, $event)">
                        &raquo;
                    </a>
                </li>
            </ul>
        </nav>
    `
})
export class PaginationComponent implements OnInit {

    protected _pageSize: number;
    protected _totalItems = 0;
    protected _page = 1;
    protected _totalPages = 0;
    pagesNumbers: number[] = [];

    @Input()
    get pageSize(): number {
        return this._pageSize;
    }

    set pageSize(pageSize: number) {
        this._pageSize = pageSize;
        this.updateTotalPages();
    }

    @Input()
    get totalPages(): number {
        return this._totalPages;
    }

    set totalPages(totalPages: number) {
        this._totalPages = totalPages;
    }

    @Input()
    get totalItems(): number {
        return this._totalItems;
    }

    set totalItems(totalItems: number) {
        this._totalItems = totalItems;
        this.updateTotalPages();
    }

    @Input()
    set page(page: number) {
        this._page = page;
    }

    get page(): number {
        return this._page;
    }

    @Output() pageChanged = new EventEmitter<number>();

    ngOnInit(): void {
        this.updateTotalPages();
    }

    /**
     * Set current page
     * @param page
     * @param event
     */
    setPage(page: number, event?: MouseEvent): void {
        if (event) {
            event.preventDefault();
        }
        if (page >= 1 && page <= this._totalPages) {
            this.page = page;
            this.pageChanged.emit(page);
        }
    }

    /**
     * Update total pages number
     */
    updateTotalPages(): void {
        this._totalPages = Math.ceil(this._totalItems / this._pageSize);
        this.pagesNumbers = _.range(1, this._totalPages + 1);
    }
}

