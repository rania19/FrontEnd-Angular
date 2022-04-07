import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FarmComponent} from './farm/farm.component';
import {FarmAddComponent} from './farm/farm-add/farm-add.component';
import {AuthComponent} from './auth/auth.component';
import {RegisterComponent} from './auth/register/register.component';
import {AmdinComponent} from './amdin/amdin.component';
import {UserComponent} from './user/user.component';




import {FarmManageComponent} from './farm/farm-manage/farm-manage.component';
import {ProductAddComponent} from './product/product-add/product-add.component';
import {VegProductAddComponent} from './product/product-add/veg-product-add/veg-product-add.component';
import {AnimalProductAddComponent} from './product/product-add/animal-product-add/animal-product-add.component';
import {MilkProductAddComponent} from './product/product-add/milk-product-add/milk-product-add.component';
import {FarmDetailComponent} from './farm/farm-detail/farm-detail.component';
import {InvestementComponent} from './investement/investement.component';
import {PropositionsComponent} from './propositions/propositions.component';
import {PropositionsItemComponent} from './propositions/propositions-list/propositions-item/propositions-item.component';
import {PaymentComponent} from './payment/payment.component';
import {SuccessComponent} from './success/success.component';
import {CancelComponent} from './cancel/cancel.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {HeaderComponent} from './header/header.component';
import {AccountComponent} from './account/account.component';
import {ConfirmIdentityComponent} from './confirm-identity/confirm-identity.component';
import {ChangemailComponent} from './changemail/changemail.component';
import {DashboardComponent} from './amdin/dashboard/dashboard.component';
import {ManageUsersComponent} from './amdin/manage-users/manage-users.component';
import {ReclamationComponent} from './reclamation/reclamation.component';
import {SendReclamationComponent} from './send-reclamation/send-reclamation.component';
import {LivreurComponent} from './livreur/livreur.component';
import {AddLivreurComponent} from './livreur/add-livreur/add-livreur.component';
import {ConfirmLivraisonComponent} from './confirm-livraison/confirm-livraison.component';
import {SignalDetailComponent} from './signal-detail/signal-detail.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {EspaceLivreurComponent} from './espace-livreur/espace-livreur.component';
import {LivraisonDetailComponent} from './livraison-detail/livraison-detail.component';
import {FarmUpdateComponent} from './farm-update/farm-update.component';
import {ModifyPaymentDataComponent} from './modify-payment-data/modify-payment-data.component';
import {DefinitonComponent} from './definiton/definiton.component';







const routes: Routes = [


  { path: 'register', component: RegisterComponent  },


  { path: 'modifyData', component: ModifyPaymentDataComponent},
  { path: 'sendRec', component: SendReclamationComponent  },
  { path: 'updateFarm/:id', component: FarmUpdateComponent},
  { path: 'Addliv', component: AddLivreurComponent},
  { path: '', redirectTo: '/Acceuil', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'def', component: DefinitonComponent },

  { path: 'Acceuil', component: AcceuilComponent, children: [
      { path: 'def', component: DefinitonComponent  },
    ] },
  { path: 'EspaceLiv', component: EspaceLivreurComponent },
  { path: 'farm-manage', component: FarmManageComponent , children:[
      { path: 'VegProduct-add/:id', component: VegProductAddComponent},
      { path: 'AnimalProduct-add/:id', component: AnimalProductAddComponent},
      { path: 'MilkProduct-add/:id', component: MilkProductAddComponent},
    ]  },
  { path: 'admin', component: AmdinComponent, children: [

      { path: '', component: DashboardComponent},
      { path: 'SignDet/:id', component: SignalDetailComponent},

      { path: 'livreur', component: LivreurComponent, children: [

        ] },
      { path: 'reclamations', component: ReclamationComponent  },
      { path: 'dash', component: DashboardComponent},
      { path: 'ManageUsers', component: ManageUsersComponent, children: [

        ]
      },
    ]  },
  { path: 'header', component: HeaderComponent  },
  { path: 'invest/:id', component: InvestementComponent, children: [
      { path: 'getprop/:id', component: PropositionsComponent},

    ]  },


  { path: 'propItem/:prop/:idFarm/:amount', component: PropositionsItemComponent  },

  { path: 'livItem/:liv', component: LivraisonDetailComponent },

  { path: 'user', component: UserComponent },

  { path: 'confirmIdentity', component: ConfirmIdentityComponent},

  { path: 'confirmLiv', component: ConfirmLivraisonComponent},
  { path: 'account', component: AccountComponent},
  { path: 'updateProd/:id', component: ProductUpdateComponent},
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'farms', component: FarmComponent},
  { path: 'farm-add', component: FarmAddComponent },
  { path: 'det/:id', component: FarmDetailComponent },
  { path: 'invest/:id', component: FarmDetailComponent},
  { path: 'updateMail', component: ChangemailComponent },

  { path: 'product-add/:id', component: ProductAddComponent },
  { path: 'pay/:id/:prop/:amount', component: PaymentComponent},
  { path: 'login', component: AuthComponent  },
  { path: 'success', component: SuccessComponent  },
  { path: 'cancel', component: CancelComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
