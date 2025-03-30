import { Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component'
import { ProfilComponent } from './components/profil/profil.component'
import { DegreeComponent } from './components/degree/degree.component'
import { ExperienceComponent } from './components/experience/experience.component'
import { MiscComponent } from './components/misc/misc.component'
import { ContactComponent} from './components/contact/contact.component'

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profil', component: ProfilComponent},
    {path: 'degree', component: DegreeComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'miscellaneous', component: MiscComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent},
];
