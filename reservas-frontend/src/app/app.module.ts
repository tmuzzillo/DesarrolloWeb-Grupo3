import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRolesComponent } from './lista-roles/lista-roles.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgIf, JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ListaSolicitantesComponent } from './lista-solicitantes/lista-solicitantes.component';
import { ListaRecursosComponent } from './lista-recursos/lista-recursos.component';
import { ListaEspaciosComponent } from './lista-espacios/lista-espacios.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ListaReservasComponent } from './lista-reservas/lista-reservas.component';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule, ComboBoxModule, AutoCompleteModule, MultiSelectModule, ListBoxModule, DropDownTreeModule, MentionModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule, PagerModule} from '@syncfusion/ej2-angular-grids';
import { FilterService, PageService, SortService, GroupService, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaRolesComponent,
    HeaderComponent,
    FooterComponent,
    ListaSolicitantesComponent,
    ListaRecursosComponent,
    ListaEspaciosComponent,
    ListaReservasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgIf,
    JsonPipe,
    NgxMaterialTimepickerModule,
    CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule,
    TextBoxModule,
    DropDownListModule, ComboBoxModule, AutoCompleteModule, MultiSelectModule, ListBoxModule, DropDownTreeModule, MentionModule, ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule, GridModule, PagerModule,
  ],
  providers: [FilterService, PageService, SortService, GroupService, EditService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
