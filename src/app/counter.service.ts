import { EventEmitter } from "@angular/core";

export class CounterService {
    toInactiveChangeNumber: number = 0;
    toActiveChangeNumber: number = 0;

    // event of active/inactive change to emit here and listen in counter service
    onChange = new EventEmitter<string>();

    addToInactiveChangeNumber() {
        this.toInactiveChangeNumber++;
    }

    addToActiveChangeNumber() {
        this.toActiveChangeNumber++;
    }
}