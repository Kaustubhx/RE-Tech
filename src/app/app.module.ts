import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';


// Icons

import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

// Components

import { HomePageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SearchComponent } from './components/search/search.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { DetailpageheaderComponent } from './components/detailpageheader/detailpageheader.component';
import { ProjectdetailpageComponent } from './pages/projectdetailpage/projectdetailpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectcardsComponent } from './components/projectcards/projectcards.component';
import { ProjectratingsComponent } from './components/projectratings/projectratings.component';
import { ProjectdetailsComponent } from './components/projectdetails/projectdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    BannerComponent,
    SearchComponent,
    ShowcaseComponent,
    FooterComponent,
    ProjectdetailpageComponent,
    DetailpageheaderComponent,
    ProjectcardsComponent,
    ProjectratingsComponent,
    ProjectdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    FontAwesomeModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronDown, faLocationArrow, faHome, faRupeeSign, faLongArrowAltRight, farHeart, faWhatsapp, faArrowLeft, faMapMarkerAlt, faPhoneAlt, faEllipsisV, faBuilding, faBath);
  }
}