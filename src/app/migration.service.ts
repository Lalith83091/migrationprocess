import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MigrationService {
  migrationStarted = new Subject<void>();

  constructor(private toastr: ToastrService) {}

  startMigration() {
    this.migrationStarted.next();
  }

  completeMigration() {
    this.toastr.success('Migration applied successfully.', 'Success');
  }
}