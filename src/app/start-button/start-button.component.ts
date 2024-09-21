import { Component } from '@angular/core';
import { MigrationService } from '../migration.service';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.css']
})
export class StartButtonComponent {
  constructor(private migrationService: MigrationService) {}

  startMigration() {
    this.migrationService.startMigration();
  }
}