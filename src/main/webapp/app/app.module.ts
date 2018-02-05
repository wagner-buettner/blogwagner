import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { BlogwagnerSharedModule, UserRouteAccessService } from './shared';
import { BlogwagnerAppRoutingModule} from './app-routing.module';
import { BlogwagnerHomeModule } from './home/home.module';
import { BlogwagnerAdminModule } from './admin/admin.module';
import { BlogwagnerAccountModule } from './account/account.module';
import { BlogwagnerEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        BlogwagnerAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BlogwagnerSharedModule,
        BlogwagnerHomeModule,
        BlogwagnerAdminModule,
        BlogwagnerAccountModule,
        BlogwagnerEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BlogwagnerAppModule {}
