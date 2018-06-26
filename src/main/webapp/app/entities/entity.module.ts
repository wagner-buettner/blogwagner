import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogwagnerBlogModule } from './blog/blog.module';
import { BlogwagnerEntryModule } from './entry/entry.module';
import { BlogwagnerTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BlogwagnerBlogModule,
        BlogwagnerEntryModule,
        BlogwagnerTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogwagnerEntityModule {}
