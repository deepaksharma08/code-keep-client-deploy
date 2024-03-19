import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { SaveSnippetDialogComponent } from './save-snippet-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
let SaveSnippetDialogModule = class SaveSnippetDialogModule {
};
SaveSnippetDialogModule = __decorate([
    NgModule({
        declarations: [SaveSnippetDialogComponent],
        imports: [
            CommonModule,
            DialogModule,
            ReactiveFormsModule
        ],
        exports: [
            SaveSnippetDialogComponent,
            ReactiveFormsModule
        ]
    })
], SaveSnippetDialogModule);
export { SaveSnippetDialogModule };
//# sourceMappingURL=save-snippet-dialog.module.js.map