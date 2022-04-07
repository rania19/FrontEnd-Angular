import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FarmComponent } from './farm/farm.component';



import {FarmListComponent} from './farm/farm-list/farm-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FarmService} from './farm/services/farm.service';
import {FarmItemComponent} from './farm/farm-list/farm-item/farm-item.component';
import { AuthComponent } from './auth/auth.component';
import {FarmAddComponent} from './farm/farm-add/farm-add.component';
import { RegisterComponent } from './auth/register/register.component';

import {authInterceptorProviders} from './helpers/auth.interceptor';
import { AmdinComponent } from './amdin/amdin.component';
import { UserComponent } from './user/user.component';

import { ProductComponent } from './product/product.component';





import {FarmManageComponent} from './farm/farm-manage/farm-manage.component';
import {ProductAddComponent} from './product/product-add/product-add.component';
import {VegProductAddComponent} from './product/product-add/veg-product-add/veg-product-add.component';
import {AnimalProductAddComponent} from './product/product-add/animal-product-add/animal-product-add.component';
import {MilkProductAddComponent} from './product/product-add/milk-product-add/milk-product-add.component';
import {ProductService} from './services/product.service';
import {FarmDetailComponent} from './farm/farm-detail/farm-detail.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {ProductItemComponent} from './product/product-item/product-item.component';
import {MilkProductItemComponent} from './product/milk-product-item/milk-product-item.component';
import {VegtProductItemComponent} from './product/vegt-product-item/vegt-product-item.component';
import { InvestementComponent } from './investement/investement.component';
import { PropositionsComponent } from './propositions/propositions.component';


import {InvestService} from './services/InvestService';
import {PropositionsListComponent} from './propositions/propositions-list/propositions-list.component';
import {PropositionsItemComponent} from './propositions/propositions-list/propositions-item/propositions-item.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CancelComponent } from './cancel/cancel.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import {UserService} from './services/user.service';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AccountComponent } from './account/account.component';
import { ConfirmIdentityComponent } from './confirm-identity/confirm-identity.component';
import { ChangemailComponent } from './changemail/changemail.component';





import {FeedbackService} from './services/Feedback.service';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import {FeedbackItemComponent} from './feedbacks/feedback-item/feedback-item.component';

import { SideBarComponent } from './amdin/side-bar/side-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './amdin/dashboard/dashboard.component';
import { AdminHeaderComponent } from './amdin/admin-header/admin-header.component';
import { AdminFooterComponent } from './amdin/admin-footer/admin-footer.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { StatComponent } from './stat/stat.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {AdminService} from './services/Admin.service';
import { ManageUsersComponent } from './amdin/manage-users/manage-users.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { SendReclamationComponent } from './send-reclamation/send-reclamation.component';
import {ReclamationService} from './services/Reclamation.service';
import { ReclamationItemComponent } from './reclamation/reclamation-item/reclamation-item.component';
import { LivreurComponent } from './livreur/livreur.component';
import { AddLivreurComponent } from './livreur/add-livreur/add-livreur.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ConfirmAlertComponent } from './confirm-alert/confirm-alert.component';
import { ConfirmLivraisonComponent } from './confirm-livraison/confirm-livraison.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SignalDialogComponent } from './signal-dialog/signal-dialog.component';
import { SignalDetailComponent } from './signal-detail/signal-detail.component';
import { BannDialogComponent } from './bann-dialog/bann-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DeleteRecDialogComponent } from './delete-rec-dialog/delete-rec-dialog.component';
import {Common} from './models/common';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { DeleteProductDialogComponent } from './delete-product-dialog/delete-product-dialog.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { FarmInvestsComponent } from './farm-invests/farm-invests.component';
import { EspaceLivreurComponent } from './espace-livreur/espace-livreur.component';
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { RatingLivreurComponent } from './rating-livreur/rating-livreur.component';
import { FarmUpdateComponent } from './farm-update/farm-update.component';
import { ModifyPaymentDataComponent } from './modify-payment-data/modify-payment-data.component';
import { CancelInvestDialogComponent } from './cancel-invest-dialog/cancel-invest-dialog.component';
import { DefinitonComponent } from './definiton/definiton.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FarmComponent,
   FarmAddComponent,
    FarmDetailComponent,
    FarmListComponent,
    FarmItemComponent,
    AuthComponent,
    RegisterComponent,
    AmdinComponent,
    UserComponent,
    FarmManageComponent,
    ProductComponent,
    ListProductComponent,
    ProductItemComponent,
    ProductAddComponent,
    VegProductAddComponent,
    AnimalProductAddComponent,
    MilkProductAddComponent,
    MilkProductItemComponent,
    VegtProductItemComponent,
    InvestementComponent,
    PropositionsComponent,
    PropositionsListComponent,
    PropositionsItemComponent,
    PaymentComponent,
    SuccessComponent,
    CancelComponent,
    SuccessRegisterComponent,
    AcceuilComponent,
    AccountComponent,
    ConfirmIdentityComponent,
    ChangemailComponent,
    FeedbacksComponent,
    FeedbackItemComponent,
    SideBarComponent,
    DashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    StatComponent,
    ManageUsersComponent,
    ReclamationComponent,
    SendReclamationComponent,
    ReclamationItemComponent,
    LivreurComponent,
    AddLivreurComponent,
    SearchfilterPipe,
    ConfirmAlertComponent,
    ConfirmLivraisonComponent,
    SignalDialogComponent,
    SignalDetailComponent,
    BannDialogComponent,
    DeleteRecDialogComponent,
    ManageProductsComponent,
    DeleteProductDialogComponent,
    ProductUpdateComponent,
    FarmInvestsComponent,
    EspaceLivreurComponent,
    LivraisonDetailComponent,
    RatingLivreurComponent,
    FarmUpdateComponent,
    ModifyPaymentDataComponent,
    CancelInvestDialogComponent,
    DefinitonComponent,







  ],
 entryComponents: [SignalDialogComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    HighchartsChartModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule


  ],
  providers: [AdminService, ReclamationService, FeedbackService, FarmService, UserService, ProductService, InvestService, authInterceptorProviders] ,
  bootstrap: [AppComponent]
})
export class AppModule {
  showNavigationArrows = false;
  showNavigationIndicators = false;
}
