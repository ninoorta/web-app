//Angular module
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";



//component
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { HeaderComponent } from "./components/header/header.component";

import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
  declarations: [
    MenuBarComponent,
    HeaderComponent,
    // NotificationsComponent,
    LoaderComponent,
    // UserComponent,
    // DialogComponent,
    // SharedTableComponent,
    // ChartTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // MatIconModule,
    // MatSidenavModule,
    // MatDialogModule,
    // MatCardModule,
    // MatFormFieldModule,
    FormsModule,
    // MatMenuModule,
    // MatProgressSpinnerModule,
    // MatTabsModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatProgressSpinnerModule,
    // MatToolbarModule,
    // MatTableModule,
    // MatTreeModule,
    // MatStepperModule,
  ],

  exports: [
    ReactiveFormsModule,
    // HttpClientModule,
    // MatAutocompleteModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatCheckboxModule,
    // MatCheckboxModule,
    // MatInputModule,
    // MatTableModule,
    // MatPaginatorModule,
    MenuBarComponent,
    HeaderComponent,
    // MatSidenavModule,
    // MatIconModule,
    // MatDialogModule,
    // MatCardModule,
    // MatToolbarModule,
    FormsModule,
    // MatMenuModule,
    // MatProgressSpinnerModule,
    // MatTabsModule,
    // MatRadioModule,
    // MatSelectModule,
    LoaderComponent,
    // DialogComponent,
    // SharedTableComponent,
    // NotificationsComponent,
    // UserComponent,
    // CalendarModule,
    // ChartTableComponent,
    // TimePickerModule,
    // NgApexchartsModule,
    // TreeModule,
    // MatStepperModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule { }
