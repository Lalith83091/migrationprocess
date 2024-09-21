import { Component, OnInit } from '@angular/core';
import { MigrationService } from '../migration.service';

@Component({
    selector: 'app-migration',
    templateUrl: './migration.component.html',
    styleUrls: ['./migration.component.css']
})
export class MigrationComponent implements OnInit {
    isVisible = false;
    progress = 0;

    constructor(private migrationService: MigrationService) {}

    ngOnInit() {
        this.migrationService.migrationStarted.subscribe(() => {
            this.isVisible = true;
            this.startProgressAnimation();
        });
    }

    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }

    private startProgressAnimation() {
        const interval = setInterval(() => {
            this.progress += 1;
            if (this.progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    this.isVisible = false;
                    this.migrationService.completeMigration();
                }, 500);
            }
        }, 50);
    }
}
